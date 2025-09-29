(function(window, document) {
  'use strict';

  class USMapController {
    constructor(containerId = 'map-container', options = {}) {
      this.containerId = containerId;
      this.container = document.getElementById(containerId);
      
      if (!this.container) {
        console.error(`Container with ID "${containerId}" not found`);
        return;
      }

      // Default options with ability to override
      this.options = {
        showTerritories: options.showTerritories !== false,
        enableTouch: options.enableTouch !== false,
        showControls: options.showControls !== false,
        defaultFill: options.defaultFill || '#b167d3',
        hoverFill: options.hoverFill || '#d4aae7',
        selectedFill: options.selectedFill || 'rgba(255, 255, 255, .6)',
        stateFill: options.stateFill || '#e0e0e0',
        stateStroke: options.stateStroke || '#d4aae7',
        territoryFill: options.territoryFill || 'rgba(255, 255, 255, 0)',
        territoryOpacity: options.territoryOpacity || 0.6,
        territoryHiddenOpacity: options.territoryHiddenOpacity || 0,
        fontFamily: options.fontFamily || 'europa, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        // Script paths
        stateDataPath: options.stateDataPath || 'https://sammyatparachute.github.io/ph-marketing-site/statedata.js',
        territoryDataPath: options.territoryDataPath || 'https://sammyatparachute.github.io/ph-marketing-site/territorydata.js',
        // Interactivity controls
        stateInteractivity: {
          hover: options.stateInteractivity?.hover !== false,
          click: options.stateInteractivity?.click !== false,
          showTooltip: options.stateInteractivity?.showTooltip !== false,
        },
        territoryInteractivity: {
          hover: options.territoryInteractivity?.hover !== false,
          click: options.territoryInteractivity?.click !== false,
          showTooltip: options.territoryInteractivity?.showTooltip !== false,
          showOnStateHover: options.territoryInteractivity?.showOnStateHover || false,
          hideInitially: options.territoryInteractivity?.hideInitially || false,
        },
        ...options,
      };
      
      this.currentMode = "both";
      this.selectedElement = null;
      this.touchDevice = "ontouchstart" in window;
      
      // Load dependencies and initialize
      this.loadDependencies().then(() => {
        this.init();
      }).catch(error => {
        console.error('Failed to load map dependencies:', error);
        this.showError('Failed to load map data. Please try refreshing the page.');
      });
    }

    loadScript(src) {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          const checkData = () => {
            if ((src.includes('statedata') && typeof window.US_STATES_DATA !== 'undefined') ||
                (src.includes('territorydata') && typeof window.US_TERRITORIES_DATA !== 'undefined')) {
              resolve();
            } else {
              setTimeout(checkData, 100);
            }
          };
          checkData();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    }

    async loadDependencies() {
      this.showLoading();
      
      try {
        await this.loadScript(this.options.stateDataPath);
        console.log('State data loaded successfully');
        
        await this.loadScript(this.options.territoryDataPath);
        console.log('Territory data loaded successfully');
        
        if (typeof window.US_STATES_DATA === 'undefined') {
          throw new Error('US_STATES_DATA not found after loading script');
        }
        if (typeof window.US_TERRITORIES_DATA === 'undefined') {
          console.warn('US_TERRITORIES_DATA not found - territories will not be shown');
        }
      } catch (error) {
        console.error('Error loading dependencies:', error);
        throw error;
      }
    }

    showLoading() {
      if (this.container) {
        this.container.innerHTML = `
          <div style="text-align: center; padding: 40px; color: #999;">
            <div style="font-size: 18px; margin-bottom: 10px;">Loading map data...</div>
            <div style="font-size: 14px;">Please wait</div>
          </div>
        `;
      }
    }

    showError(message) {
      if (this.container) {
        this.container.innerHTML = `
          <div style="text-align: center; padding: 40px; color: #cc0000;">
            <div style="font-size: 18px; margin-bottom: 10px;">Error</div>
            <div style="font-size: 14px;">${message}</div>
          </div>
        `;
      }
    }

    init() {
      this.injectStyles();
      this.createHTML();
      this.createStates();
      this.createTerritories();
      this.bindEvents();
      this.setupResponsive();
      this.setMode(this.currentMode);
    }

    injectStyles() {
      const styleId = 'us-map-controller-styles';
      
      if (document.getElementById(styleId)) return;
      
      const styles = `
        .usmap-wrapper {
          display: flex;
          width: 100%;
          position: relative;
          font-family: ${this.options.fontFamily};
        }

        .usmap-container {
          flex: 0 0 66%;
          position: relative;
          transition: flex 0.3s ease;
        }

        .usmap-container.expanded {
          flex: 0 0 100%;
        }

        .usmap-controls {
          display: flex;
          gap: 10px;
          padding: 15px;
          border-radius: 8px 8px 0 0;
        }

        .usmap-control-btn {
          padding: 10px 20px;
          background: white;
          border: 2px solid ${this.options.defaultFill};
          color: #333;
          border-radius: 5px;
          cursor: pointer;
          font-family: ${this.options.fontFamily};
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .usmap-control-btn:hover {
          background: ${this.options.hoverFill};
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .usmap-control-btn.active {
          background: ${this.options.defaultFill};
          color: white;
        }

        .usmap-svg-container {
          position: relative;
          border-radius: 0 0 8px 8px; 
        }

        .usmap-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .usmap-state {
          fill: ${this.options.stateFill};
          stroke: ${this.options.stateStroke};
          stroke-width: 0.5;
          cursor: ${this.options.stateInteractivity.click ? 'pointer' : 'default'};
          transition: fill 0.3s ease;
        }

        ${this.options.stateInteractivity.hover ? `
        .usmap-state:hover {
          fill: #d0d0d0;
        }` : ''}

        .usmap-state.no-interact {
          cursor: default;
        }

        .usmap-territory {
          fill: ${this.options.territoryFill};
          stroke: white;
          stroke-width: 0;
          cursor: ${this.options.territoryInteractivity.click ? 'pointer' : 'default'};
          transition: all 0.3s ease;
          opacity: ${this.options.territoryInteractivity.hideInitially ? 
                     this.options.territoryHiddenOpacity : 
                     this.options.territoryOpacity};
        }

        .usmap-territory.visible {
          opacity: ${this.options.territoryOpacity};
        }

        ${this.options.territoryInteractivity.hover ? `
        .usmap-territory:hover {
          opacity: 0.8;
          fill: ${this.options.hoverFill};
        }` : ''}

        .usmap-territory.selected {
          fill: ${this.options.selectedFill};
          stroke-width: 0;
          opacity: 1;
        }

        .usmap-hover-modal {
          position: absolute;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 8px 12px;
          border-radius: 5px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-size: 13px;
          z-index: 1000;
          transform: translate(10px, -50%);
        }

        .usmap-hover-modal.active {
          opacity: 1;
        }

        .usmap-info-panel {
          flex: 0 0 33%;
          background: white;
          box-shadow: -2px 0 10px rgba(0,0,0,0.1);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          overflow-y: auto;
          position: relative;
        }

        .usmap-info-panel.active {
          transform: translateX(0);
        }

        .usmap-info-header {
          background: ${this.options.defaultFill};
          color: white;
          padding: 20px;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .usmap-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          line-height: 1;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .usmap-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
        }

        .usmap-info-title {
          font-size: 24px;
          font-weight: 600;
          margin: 0;
          padding-right: 30px;
        }

        .usmap-info-body {
          padding: 20px;
        }

        .usmap-info-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .usmap-info-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 15px;
        }

        .usmap-stat-item {
          text-align: center;
          padding: 15px 10px;
          background: #f8f8f8;
          border-radius: 5px;
        }

        .usmap-stat-value {
          font-size: 20px;
          font-weight: 600;
          color: ${this.options.defaultFill};
          margin-bottom: 5px;
        }

        .usmap-stat-label {
          font-size: 12px;
          color: #999;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .usmap-wrapper {
            flex-direction: column;
          }
          
          .usmap-container,
          .usmap-container.expanded {
            flex: 0 0 100%;
          }
          
          .usmap-info-panel {
            flex: 0 0 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: translateX(100%);
            z-index: 1002;
          }
          
          .usmap-controls {
            flex-direction: column;
          }
          
          .usmap-control-btn {
            width: 100%;
          }
        }
      `;

      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }

    createHTML() {
      const controlsHTML = this.options.showControls ? `
        <div class="usmap-controls">
          <button class="usmap-control-btn" id="${this.containerId}-statesBtn">States</button>
          <button class="usmap-control-btn" id="${this.containerId}-territoriesBtn">Territories</button>
          <button class="usmap-control-btn active" id="${this.containerId}-bothBtn">Both</button>
        </div>
      ` : '';

      this.container.innerHTML = `
        <div class="usmap-wrapper">
          <div class="usmap-container" id="${this.containerId}-mapContainer">
            ${controlsHTML}
            <div class="usmap-svg-container">
              <svg class="usmap-svg" viewBox="0 0 960 600" xmlns="http://www.w3.org/2000/svg">
                <g id="${this.containerId}-states-layer"></g>
                <g id="${this.containerId}-territories-layer"></g>
              </svg>
              <div class="usmap-hover-modal" id="${this.containerId}-hoverModal">
                <div id="${this.containerId}-hoverContent"></div>
              </div>
            </div>
          </div>
          <div class="usmap-info-panel" id="${this.containerId}-infoPanel">
            <div class="usmap-info-header">
              <button class="usmap-close-btn" id="${this.containerId}-closeBtn">×</button>
              <h2 class="usmap-info-title" id="${this.containerId}-infoTitle"></h2>
            </div>
            <div class="usmap-info-body">
              <div class="usmap-info-description" id="${this.containerId}-infoDescription"></div>
              <div class="usmap-info-stats" id="${this.containerId}-infoStats"></div>
            </div>
          </div>
        </div>
      `;
    }

    createStates() {
      const statesLayer = document.getElementById(`${this.containerId}-states-layer`);
      if (!statesLayer || typeof window.US_STATES_DATA === 'undefined') return;

      const statesData = window.US_STATES_DATA;

      Object.keys(statesData).forEach((stateId) => {
        const stateData = statesData[stateId];
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        path.setAttribute("class", "usmap-state");
        path.setAttribute("id", `${this.containerId}-state-${stateId}`);
        path.setAttribute("d", stateData.path);
        path.dataset.name = stateData.name;
        path.dataset.abbreviation = stateData.abbreviation || '';
        path.dataset.type = 'state';

        statesLayer.appendChild(path);
      });
    }

    createTerritories() {
      const territoriesLayer = document.getElementById(`${this.containerId}-territories-layer`);
      if (!territoriesLayer) return;

      if (typeof window.US_TERRITORIES_DATA === 'undefined') {
        console.info("US_TERRITORIES_DATA not found. Territories layer will be empty.");
        return;
      }

      Object.keys(window.US_TERRITORIES_DATA).forEach((territoryId) => {
        const territoryData = window.US_TERRITORIES_DATA[territoryId];
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        path.setAttribute("class", "usmap-territory");
        path.setAttribute("id", `${this.containerId}-territory-${territoryId}`);
        path.setAttribute("d", territoryData.path);
        path.dataset.name = territoryData.name;
        path.dataset.description = territoryData.description || "";
        path.dataset.type = 'territory';
        
        if (territoryData.repInfo) {
          path.dataset.repName = territoryData.repInfo.name || "";
          path.dataset.repEmail = territoryData.repInfo.email || "";
        }

        territoriesLayer.appendChild(path);
      });
    }

    bindEvents() {
      // Control buttons
      if (this.options.showControls) {
        const statesBtn = document.getElementById(`${this.containerId}-statesBtn`);
        const territoriesBtn = document.getElementById(`${this.containerId}-territoriesBtn`);
        const bothBtn = document.getElementById(`${this.containerId}-bothBtn`);
        
        if (statesBtn) {
          statesBtn.addEventListener("click", () => this.setMode("states"));
        }
        if (territoriesBtn) {
          territoriesBtn.addEventListener("click", () => this.setMode("territories"));
        }
        if (bothBtn) {
          bothBtn.addEventListener("click", () => this.setMode("both"));
        }
      }

      // Close button
      const closeBtn = document.getElementById(`${this.containerId}-closeBtn`);
      if (closeBtn) {
        closeBtn.addEventListener("click", () => this.closeInfoPanel());
      }

      // Map interactions
      this.bindMapEvents();

      // Window resize
      window.addEventListener("resize", () => this.handleResize());
    }

    bindMapEvents() {
      const states = document.querySelectorAll(".usmap-state");
      const territories = document.querySelectorAll(".usmap-territory");

      // Bind state events
      states.forEach((element) => {
        if (!this.options.stateInteractivity.hover && !this.options.stateInteractivity.click) {
          element.classList.add('no-interact');
          return;
        }

        if (this.touchDevice) {
          if (this.options.stateInteractivity.click) {
            element.addEventListener("touchstart", (e) => this.handleTouch(e, element));
            element.addEventListener("touchend", (e) => this.handleClick(e, element));
          }
        } else {
          if (this.options.stateInteractivity.hover) {
            element.addEventListener("mouseenter", (e) => this.handleStateHover(e, element));
            element.addEventListener("mouseleave", (e) => this.handleStateLeave(e, element));
            element.addEventListener("mousemove", (e) => this.updateHoverPosition(e));
          }
          if (this.options.stateInteractivity.click) {
            element.addEventListener("click", (e) => this.handleClick(e, element));
          }
        }
      });

      // Bind territory events
      territories.forEach((element) => {
        if (!this.options.territoryInteractivity.hover && !this.options.territoryInteractivity.click) {
          element.style.cursor = 'default';
          return;
        }

        if (this.touchDevice) {
          if (this.options.territoryInteractivity.click) {
            element.addEventListener("touchstart", (e) => this.handleTouch(e, element));
            element.addEventListener("touchend", (e) => this.handleClick(e, element));
          }
        } else {
          if (this.options.territoryInteractivity.hover) {
            element.addEventListener("mouseenter", (e) => this.handleHover(e, element));
            element.addEventListener("mouseleave", () => this.hideHoverModal());
            element.addEventListener("mousemove", (e) => this.updateHoverPosition(e));
          }
          if (this.options.territoryInteractivity.click) {
            element.addEventListener("click", (e) => this.handleClick(e, element));
          }
        }
      });
    }

    handleStateHover(e, element) {
      if (this.options.stateInteractivity.showTooltip) {
        this.showHoverModal(e, element);
      }
      
      if (this.options.territoryInteractivity.showOnStateHover) {
        this.showTerritories();
      }
    }

    handleStateLeave(e, element) {
      this.hideHoverModal();
      
      if (this.options.territoryInteractivity.showOnStateHover && 
          this.options.territoryInteractivity.hideInitially) {
        this.hideTerritories();
      }
    }

    showTerritories() {
      const territories = document.querySelectorAll(".usmap-territory");
      territories.forEach(territory => {
        territory.classList.add('visible');
      });
    }

    hideTerritories() {
      const territories = document.querySelectorAll(".usmap-territory");
      territories.forEach(territory => {
        territory.classList.remove('visible');
      });
    }

    handleTouch(e, element) {
      e.preventDefault();
      this.showHoverModal(e, element);
    }

    handleHover(e, element) {
      this.showHoverModal(e, element);
    }

    showHoverModal(e, element) {
      const modal = document.getElementById(`${this.containerId}-hoverModal`);
      const content = document.getElementById(`${this.containerId}-hoverContent`);

      let title, info;
      if (element.dataset.type === "state") {
        title = element.dataset.name;
        info = element.dataset.abbreviation ? `(${element.dataset.abbreviation})` : '';
      } else if (element.dataset.type === "territory") {
        title = element.dataset.name;
        info = element.dataset.repName ? `Rep: ${element.dataset.repName}` : '';
      }

      content.innerHTML = info ? `<strong>${title}</strong><br>${info}` : `<strong>${title}</strong>`;
      modal.classList.add("active");

      this.updateHoverPosition(e);
    }

    updateHoverPosition(e) {
      const modal = document.getElementById(`${this.containerId}-hoverModal`);
      const rect = this.container.querySelector('.usmap-svg-container').getBoundingClientRect();

      modal.style.left = (e.clientX - rect.left) + "px";
      modal.style.top = (e.clientY - rect.top) + "px";
    }

    hideHoverModal() {
      const modal = document.getElementById(`${this.containerId}-hoverModal`);
      if (modal) {
        modal.classList.remove("active");
      }
    }

    handleClick(e, element) {
      e.preventDefault();
      this.hideHoverModal();
      this.selectElement(element);
      this.showInfoPanel(element);
    }

    selectElement(element) {
      if (this.selectedElement) {
        this.selectedElement.classList.remove("selected");
      }

      element.classList.add("selected");
      this.selectedElement = element;
    }

    showInfoPanel(element) {
      const panel = document.getElementById(`${this.containerId}-infoPanel`);
      const mapContainer = document.getElementById(`${this.containerId}-mapContainer`);
      const title = document.getElementById(`${this.containerId}-infoTitle`);
      const description = document.getElementById(`${this.containerId}-infoDescription`);
      const stats = document.getElementById(`${this.containerId}-infoStats`);

      if (element.dataset.type === "state") {
        title.textContent = element.dataset.name;
        description.textContent = `${element.dataset.name} (${element.dataset.abbreviation})`;
        
        stats.innerHTML = `
          <div class="usmap-stat-item">
            <div class="usmap-stat-value">${element.dataset.abbreviation}</div>
            <div class="usmap-stat-label">State Code</div>
          </div>
        `;
      } else if (element.dataset.type === "territory") {
        title.textContent = element.dataset.name;
        description.textContent = element.dataset.description || `Territory: ${element.dataset.name}`;
        
        const repInfo = element.dataset.repEmail ? `
          <div class="usmap-stat-item">
            <div class="usmap-stat-value">${element.dataset.repName}</div>
            <div class="usmap-stat-label">Representative</div>
          </div>
          <div class="usmap-stat-item">
            <div class="usmap-stat-value" style="font-size: 12px; word-break: break-all;">${element.dataset.repEmail}</div>
            <div class="usmap-stat-label">Contact</div>
          </div>
        ` : '';
        
        stats.innerHTML = repInfo;
      }

      panel.classList.add("active");
      if (mapContainer && window.innerWidth > 768) {
        mapContainer.classList.remove("expanded");
      }
    }

    closeInfoPanel() {
      const panel = document.getElementById(`${this.containerId}-infoPanel`);
      const mapContainer = document.getElementById(`${this.containerId}-mapContainer`);
      
      if (panel) {
        panel.classList.remove("active");
      }
      
      if (mapContainer && window.innerWidth > 768) {
        mapContainer.classList.add("expanded");
      }
      
      if (this.selectedElement) {
        this.selectedElement.classList.remove("selected");
        this.selectedElement = null;
      }
    }

    setMode(mode) {
      this.currentMode = mode;

      document.querySelectorAll(`#${this.containerId} .usmap-control-btn`)
        .forEach((btn) => btn.classList.remove("active"));
      
      const activeBtn = document.getElementById(`${this.containerId}-${mode}Btn`);
      if (activeBtn) activeBtn.classList.add("active");

      const statesLayer = document.getElementById(`${this.containerId}-states-layer`);
      const territoriesLayer = document.getElementById(`${this.containerId}-territories-layer`);

      switch (mode) {
        case "states":
          if (statesLayer) statesLayer.style.display = "block";
          if (territoriesLayer) territoriesLayer.style.display = "none";
          break;
        case "territories":
          if (statesLayer) statesLayer.style.display = "none";
          if (territoriesLayer) territoriesLayer.style.display = "block";
          break;
        case "both":
          if (statesLayer) statesLayer.style.display = "block";
          if (territoriesLayer) territoriesLayer.style.display = "block";
          break;
      }

      this.closeInfoPanel();
    }

    setupResponsive() {
      const svg = this.container.querySelector('.usmap-svg');
      if (!svg) return;

      svg.setAttribute("viewBox", "0 0 960 600");
      
      // Set initial expanded state if panel isn't open
      const mapContainer = document.getElementById(`${this.containerId}-mapContainer`);
      const panel = document.getElementById(`${this.containerId}-infoPanel`);
      
      if (mapContainer && panel && !panel.classList.contains('active')) {
        mapContainer.classList.add('expanded');
      }
    }

    handleResize() {
      this.setupResponsive();
      this.hideHoverModal();

      if (window.innerWidth < 768) {
        this.closeInfoPanel();
      }
    }

    destroy() {
      window.removeEventListener("resize", () => this.handleResize());
      
      if (this.container) {
        this.container.innerHTML = '';
      }
      
      this.selectedElement = null;
      this.currentMode = "both";
    }

    refresh() {
      this.destroy();
      this.loadDependencies().then(() => {
        this.init();
      });
    }

    static init(containerId, options) {
      return new USMapController(containerId, options);
    }
  }

  window.USMapController = USMapController;

  function autoInit() {
    const autoInitElements = document.querySelectorAll('[data-usmap]');
    autoInitElements.forEach(element => {
      const options = {};
      
      if (element.dataset.stateDataPath) options.stateDataPath = element.dataset.stateDataPath;
      if (element.dataset.territoryDataPath) options.territoryDataPath = element.dataset.territoryDataPath;
      if (element.dataset.stateFill) options.stateFill = element.dataset.stateFill;
      if (element.dataset.territoryFill) options.territoryFill = element.dataset.territoryFill;
      
      new USMapController(element.id, options);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = USMapController;
  }
})(window, document);