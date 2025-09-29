class USMapController {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = {
      initialScale: options.initialScale || 1,
      territoryColors: options.territoryColors || {},
      defaultColor: options.defaultColor || '#e0e0e0',
      hoverColor: options.hoverColor || '#ffeb3b',
      selectedColor: options.selectedColor || '#ff9800',
      ...options
    };
    
    this.selectedTerritory = null;
    this.modalVisible = false;
    
    this.init();
  }

  init() {
    // Create wrapper structure
    this.container.innerHTML = `
      <div class="map-wrapper" style="display: flex; width: 100%; height: 100%; position: relative;">
        <div class="map-container" style="width: 66%; height: 100%; position: relative;">
          <svg id="us-map-svg" viewBox="0 0 960 600" style="width: 100%; height: 100%;">
            <g id="states-layer"></g>
            <g id="territories-layer"></g>
            <g id="labels-layer"></g>
          </svg>
        </div>
        <div class="modal-container" style="width: 33%; height: 100%; position: relative; overflow: hidden;">
          <div id="territory-modal" class="territory-modal" style="
            width: 100%;
            height: 100%;
            background: white;
            box-shadow: -2px 0 10px rgba(0,0,0,0.1);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            overflow-y: auto;
            padding: 20px;
            box-sizing: border-box;
          ">
            <button class="close-modal" style="
              position: absolute;
              top: 10px;
              right: 10px;
              background: none;
              border: none;
              font-size: 24px;
              cursor: pointer;
              z-index: 10;
            ">&times;</button>
            <div id="modal-content"></div>
          </div>
        </div>
      </div>
    `;
    
    this.svg = this.container.querySelector('#us-map-svg');
    this.statesLayer = this.container.querySelector('#states-layer');
    this.territoriesLayer = this.container.querySelector('#territories-layer');
    this.labelsLayer = this.container.querySelector('#labels-layer');
    this.modal = this.container.querySelector('#territory-modal');
    this.modalContent = this.container.querySelector('#modal-content');
    
    // Set up close button
    this.container.querySelector('.close-modal').addEventListener('click', () => {
      this.hideModal();
    });
    
    this.loadMap();
  }

  async loadMap() {
    try {
      // Load state boundaries
      const statesResponse = await fetch('https://sammyatparachute.github.io/ph-marketing-site/statedata.js');
      const statesScript = await statesResponse.text();
      eval(statesScript);
      
      // Load territory boundaries
      const territoriesResponse = await fetch('https://sammyatparachute.github.io/ph-marketing-site/territorydata.js');
      const territoriesScript = await territoriesResponse.text();
      eval(territoriesScript);
      
      this.renderStates(window.US_STATES_DATA);
      this.renderTerritories(window.US_TERRITORIES_DATA);
      this.setupInteractions();
      
    } catch (error) {
      console.error('Error loading map data:', error);
    }
  }

  renderStates(statesData) {
    Object.entries(statesData).forEach(([stateId, stateData]) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', stateData.path);
      path.setAttribute('id', `state-${stateId}`);
      path.setAttribute('class', 'state-boundary');
      path.style.fill = 'none';
      path.style.stroke = '#999';
      path.style.strokeWidth = '0.5';
      path.style.pointerEvents = 'none';
      
      this.statesLayer.appendChild(path);
    });
  }

  renderTerritories(territoriesData) {
    Object.entries(territoriesData).forEach(([territoryId, territoryData]) => {
      if (!territoryData.path) return;
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', territoryData.path);
      path.setAttribute('id', `territory-${territoryId}`);
      path.setAttribute('data-territory-id', territoryId);
      path.setAttribute('class', 'territory-boundary');
      path.style.fill = this.options.territoryColors[territoryId] || this.options.defaultColor;
      path.style.stroke = '#666';
      path.style.strokeWidth = '0.3';
      path.style.cursor = 'pointer';
      path.style.opacity = '0.7';
      path.style.transition = 'all 0.2s ease';
      
      // Store territory data
      path.territoryData = territoryData;
      
      this.territoriesLayer.appendChild(path);
    });
  }

  setupInteractions() {
    const territories = this.territoriesLayer.querySelectorAll('.territory-boundary');
    
    territories.forEach(territory => {
      territory.addEventListener('mouseenter', (e) => this.handleTerritoryHover(e, true));
      territory.addEventListener('mouseleave', (e) => this.handleTerritoryHover(e, false));
      territory.addEventListener('click', (e) => this.handleTerritoryClick(e));
    });
  }

  handleTerritoryHover(event, isEntering) {
    const territory = event.target;
    if (territory === this.selectedTerritory) return;
    
    if (isEntering) {
      territory.style.fill = this.options.hoverColor;
      territory.style.opacity = '0.9';
    } else {
      const territoryId = territory.getAttribute('data-territory-id');
      territory.style.fill = this.options.territoryColors[territoryId] || this.options.defaultColor;
      territory.style.opacity = '0.7';
    }
  }

  handleTerritoryClick(event) {
    const territory = event.target;
    const territoryId = territory.getAttribute('data-territory-id');
    const territoryData = territory.territoryData;
    
    // Update selected state
    if (this.selectedTerritory) {
      const prevId = this.selectedTerritory.getAttribute('data-territory-id');
      this.selectedTerritory.style.fill = this.options.territoryColors[prevId] || this.options.defaultColor;
      this.selectedTerritory.style.opacity = '0.7';
    }
    
    this.selectedTerritory = territory;
    territory.style.fill = this.options.selectedColor;
    territory.style.opacity = '1';
    
    this.showModal(territoryData);
  }

  showModal(territoryData) {
    // Populate modal content
    this.modalContent.innerHTML = `
      <h2>${territoryData.name || 'Territory Details'}</h2>
      ${territoryData.description ? `<p>${territoryData.description}</p>` : ''}
      
      ${territoryData.repInfo ? `
        <div class="rep-info">
          <h3>Representative</h3>
          <p><strong>${territoryData.repInfo.name}</strong></p>
          ${territoryData.repInfo.email ? `<p>Email: ${territoryData.repInfo.email}</p>` : ''}
          ${territoryData.repInfo.hub_id ? `<p>Hub ID: ${territoryData.repInfo.hub_id}</p>` : ''}
        </div>
      ` : ''}
      
      ${territoryData.countyCount ? `
        <div class="stats">
          <h3>Statistics</h3>
          <p>Counties: ${territoryData.countyCount}</p>
        </div>
      ` : ''}
    `;
    
    // Slide in the modal
    this.modal.style.transform = 'translateX(0)';
    this.modalVisible = true;
  }

  hideModal() {
    this.modal.style.transform = 'translateX(100%)';
    this.modalVisible = false;
    
    // Deselect territory
    if (this.selectedTerritory) {
      const territoryId = this.selectedTerritory.getAttribute('data-territory-id');
      this.selectedTerritory.style.fill = this.options.territoryColors[territoryId] || this.options.defaultColor;
      this.selectedTerritory.style.opacity = '0.7';
      this.selectedTerritory = null;
    }
  }

  // Public methods
  setTerritoryColor(territoryId, color) {
    this.options.territoryColors[territoryId] = color;
    const territory = this.container.querySelector(`#territory-${territoryId}`);
    if (territory && territory !== this.selectedTerritory) {
      territory.style.fill = color;
    }
  }

  highlightTerritory(territoryId) {
    const territory = this.container.querySelector(`#territory-${territoryId}`);
    if (territory) {
      territory.style.fill = this.options.hoverColor;
      territory.style.opacity = '0.9';
    }
  }

  resetHighlight(territoryId) {
    const territory = this.container.querySelector(`#territory-${territoryId}`);
    if (territory && territory !== this.selectedTerritory) {
      territory.style.fill = this.options.territoryColors[territoryId] || this.options.defaultColor;
      territory.style.opacity = '0.7';
    }
  }
}

// Export for use
window.USMapController = USMapController;