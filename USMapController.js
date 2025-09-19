class USMapController {
  constructor(containerId = 'map-container', options = {}) {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    
    if (!this.container) {
      console.error(`Container with ID "${containerId}" not found`);
      return;
    }

    this.options = {
      showTerritories: options.showTerritories !== false,
      enableTouch: options.enableTouch !== false,
      defaultFill: options.defaultFill || '#b167d3',
      hoverFill: options.hoverFill || '#d4aae7',
      selectedFill: options.selectedFill || '#9745b8',
      fontFamily: options.fontFamily || 'europa, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      ...options,
    };
    
    this.currentMode = "states";
    this.selectedElement = null;
    this.touchDevice = "ontouchstart" in window;
    
    this.init();
  }

  init() {
    this.injectStyles();
    this.createHTML();
    this.createStates();
    this.createTerritories();
    this.bindEvents();
    this.setupResponsive();
  }

  injectStyles() {
    const styleId = 'us-map-controller-styles';
    
    // Check if styles already exist
    if (document.getElementById(styleId)) return;
    
    const styles = `
      .usmap-container {
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        font-family: ${this.options.fontFamily};
      }

      .usmap-controls {
        display: flex;
        gap: 10px;
        padding: 15px;
        border-radius: 8px 8px 0 0;
        display: none;
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
        background: #fafafa;
        border-radius: 0 0 8px 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .usmap-svg {
        width: 100%;
        height: auto;
        display: block;
      }

      .usmap-state,
      .usmap-territory {
        fill: ${this.options.defaultFill};
        stroke: white;
        stroke-width: 1;
        cursor: pointer;
        transition: fill 0.3s ease;
      }

      .usmap-state:hover,
      .usmap-territory:hover {
        fill: ${this.options.hoverFill};
      }

      .usmap-state.selected,
      .usmap-territory.selected {
        fill: ${this.options.selectedFill};
        stroke-width: 2;
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
        position: fixed;
        top: 50%;
        right: -400px;
        transform: translateY(-50%);
        width: 380px;
        background: white;
        box-shadow: -2px 0 10px rgba(0,0,0,0.1);
        transition: right 0.3s ease;
        z-index: 1001;
        border-radius: 8px 0 0 8px;
      }

      .usmap-info-panel.active {
        right: 0;
      }

      .usmap-info-header {
        background: ${this.options.defaultFill};
        color: white;
        padding: 20px;
        position: relative;
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
        .usmap-controls {
          flex-direction: column;
        }
        
        .usmap-control-btn {
          width: 100%;
        }
        
        .usmap-info-panel {
          width: 100%;
          right: -100%;
          border-radius: 0;
        }
        
        .usmap-info-panel.active {
          right: 0;
        }
      }

      @media (max-width: 480px) {
        .usmap-info-stats {
          grid-template-columns: 1fr;
        }
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.id = styleId;
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  createHTML() {
    this.container.innerHTML = `
      <div class="usmap-container">
        <div class="usmap-controls">
          <button class="usmap-control-btn active" id="${this.containerId}-statesBtn">States</button>
          <button class="usmap-control-btn" id="${this.containerId}-territoriesBtn">Territories</button>
          <button class="usmap-control-btn" id="${this.containerId}-bothBtn">Both</button>
        </div>
        <div class="usmap-svg-container">
          <svg class="usmap-svg" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
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
    `;
  }

  createStates() {
    const statesLayer = document.getElementById(`${this.containerId}-states-layer`);
    if (!statesLayer) return;

    // Check for external states data, otherwise use a simple placeholder
    const statesData = typeof US_STATES_DATA !== 'undefined' ? US_STATES_DATA : this.getDefaultStatesData();

    Object.keys(statesData).forEach((stateId) => {
      const stateData = statesData[stateId];
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

      path.setAttribute("class", "usmap-state");
      path.setAttribute("id", `${this.containerId}-${stateId}`);
      path.setAttribute("d", stateData.path);
      path.dataset.name = stateData.name;
      path.dataset.population = stateData.population || 0;
      path.dataset.area = stateData.area || 0;

      statesLayer.appendChild(path);
    });
  }

  createTerritories() {
    const territoriesLayer = document.getElementById(`${this.containerId}-territories-layer`);
    if (!territoriesLayer) return;

    // Check if US_TERRITORIES_DATA exists
    if (typeof US_TERRITORIES_DATA === 'undefined') {
      console.info("US_TERRITORIES_DATA not found. Territories layer will be empty.");
      return;
    }

    Object.keys(US_TERRITORIES_DATA).forEach((territoryId) => {
      const territoryData = US_TERRITORIES_DATA[territoryId];
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

      path.setAttribute("class", "usmap-territory");
      path.setAttribute("id", `${this.containerId}-${territoryId}`);
      path.setAttribute("d", territoryData.path);
      path.dataset.name = territoryData.name;
      path.dataset.zipcodes = territoryData.zipcodes || "";
      path.dataset.description = territoryData.description || "";

      territoriesLayer.appendChild(path);
    });
  }

  bindEvents() {
    // Control buttons
    document.getElementById(`${this.containerId}-statesBtn`)
      .addEventListener("click", () => this.setMode("states"));
    document.getElementById(`${this.containerId}-territoriesBtn`)
      .addEventListener("click", () => this.setMode("territories"));
    document.getElementById(`${this.containerId}-bothBtn`)
      .addEventListener("click", () => this.setMode("both"));

    // Close button
    document.getElementById(`${this.containerId}-closeBtn`)
      .addEventListener("click", () => this.closeInfoPanel());

    // Map interactions
    this.bindMapEvents();

    // Window resize
    window.addEventListener("resize", () => this.handleResize());
  }

  bindMapEvents() {
    const states = document.querySelectorAll(".usmap-state");
    const territories = document.querySelectorAll(".usmap-territory");

    [...states, ...territories].forEach((element) => {
      if (this.touchDevice) {
        element.addEventListener("touchstart", (e) => this.handleTouch(e, element));
        element.addEventListener("touchend", (e) => this.handleClick(e, element));
      } else {
        element.addEventListener("mouseenter", (e) => this.handleHover(e, element));
        element.addEventListener("mouseleave", () => this.hideHoverModal());
        element.addEventListener("mousemove", (e) => this.updateHoverPosition(e));
        element.addEventListener("click", (e) => this.handleClick(e, element));
      }
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
    if (element.classList.contains("usmap-state")) {
      title = element.dataset.name;
      const population = parseInt(element.dataset.population || 0);
      info = population > 0 ? `Population: ${population.toLocaleString()}` : '';
    } else if (element.classList.contains("usmap-territory")) {
      title = element.dataset.name;
      info = element.dataset.zipcodes ? `Zip codes: ${element.dataset.zipcodes}` : '';
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
    document.getElementById(`${this.containerId}-hoverModal`).classList.remove("active");
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
    const title = document.getElementById(`${this.containerId}-infoTitle`);
    const description = document.getElementById(`${this.containerId}-infoDescription`);
    const stats = document.getElementById(`${this.containerId}-infoStats`);

    if (element.classList.contains("usmap-state")) {
      title.textContent = element.dataset.name;
      description.textContent = `${element.dataset.name} is a state in the United States.`;

      const population = parseInt(element.dataset.population || 0);
      const area = parseInt(element.dataset.area || 1);

      stats.innerHTML = population > 0 ? `
        <div class="usmap-stat-item">
          <div class="usmap-stat-value">${population.toLocaleString()}</div>
          <div class="usmap-stat-label">Population</div>
        </div>
        <div class="usmap-stat-item">
          <div class="usmap-stat-value">${area.toLocaleString()}</div>
          <div class="usmap-stat-label">Area (sq mi)</div>
        </div>
        <div class="usmap-stat-item">
          <div class="usmap-stat-value">${Math.round(population / area)}</div>
          <div class="usmap-stat-label">Density</div>
        </div>
      ` : `<div class="usmap-stat-item"><div class="usmap-stat-value">N/A</div><div class="usmap-stat-label">No Data</div></div>`;
    } else if (element.classList.contains("usmap-territory")) {
      title.textContent = element.dataset.name;
      description.textContent = element.dataset.description || `${element.dataset.name} is a U.S. territory.`;

      const zipCodes = element.dataset.zipcodes ? element.dataset.zipcodes.split(",") : [];
      stats.innerHTML = zipCodes.length > 0 ? `
        <div class="usmap-stat-item">
          <div class="usmap-stat-value">${zipCodes.length}</div>
          <div class="usmap-stat-label">Zip Codes</div>
        </div>
        <div class="usmap-stat-item">
          <div class="usmap-stat-value">Active</div>
          <div class="usmap-stat-label">Status</div>
        </div>
        <div class="usmap-stat-item">
          <div class="usmap-stat-value">${zipCodes[0]}-${zipCodes[zipCodes.length - 1]}</div>
          <div class="usmap-stat-label">Range</div>
        </div>
      ` : `<div class="usmap-stat-item"><div class="usmap-stat-value">N/A</div><div class="usmap-stat-label">No Data</div></div>`;
    }

    panel.classList.add("active");
  }

  closeInfoPanel() {
    document.getElementById(`${this.containerId}-infoPanel`).classList.remove("active");
    if (this.selectedElement) {
      this.selectedElement.classList.remove("selected");
      this.selectedElement = null;
    }
  }

  setMode(mode) {
    this.currentMode = mode;

    // Update button states
    document.querySelectorAll(`#${this.containerId} .usmap-control-btn`)
      .forEach((btn) => btn.classList.remove("active"));
    
    const activeBtn = document.getElementById(`${this.containerId}-${mode}Btn`);
    if (activeBtn) activeBtn.classList.add("active");

    const statesLayer = document.getElementById(`${this.containerId}-states-layer`);
    const territoriesLayer = document.getElementById(`${this.containerId}-territories-layer`);

    switch (mode) {
      case "states":
        statesLayer.style.display = "block";
        territoriesLayer.style.display = "none";
        break;
      case "territories":
        statesLayer.style.display = "none";
        territoriesLayer.style.display = "block";
        break;
      case "both":
        statesLayer.style.display = "block";
        territoriesLayer.style.display = "block";
        break;
    }

    this.closeInfoPanel();
  }

  setupResponsive() {
    const svg = this.container.querySelector('.usmap-svg');
    if (!svg) return;

    if (window.innerWidth < 480) {
      svg.setAttribute("viewBox", "0 50 1000 500");
    } else if (window.innerWidth < 768) {
      svg.setAttribute("viewBox", "0 25 1000 550");
    } else {
      svg.setAttribute("viewBox", "0 0 1000 600");
    }
  }

  handleResize() {
    this.setupResponsive();
    this.hideHoverModal();

    if (window.innerWidth < 768) {
      this.closeInfoPanel();
    }
  }

  getDefaultStatesData() {
    // Minimal placeholder data for demonstration
    // Replace with actual state path data for production use
    return {
      'california': {
        name: 'California',
        path: 'M 50 200 L 120 200 L 120 350 L 50 350 Z',
        population: 39538223,
        area: 163696
      },
      'texas': {
        name: 'Texas',
        path: 'M 400 350 L 550 350 L 550 500 L 400 500 Z',
        population: 29145505,
        area: 268596
      },
      'newyork': {
        name: 'New York',
        path: 'M 800 150 L 870 150 L 870 220 L 800 220 Z',
        population: 20201249,
        area: 54555
      },
      'florida': {
        name: 'Florida',
        path: 'M 700 450 L 780 450 L 780 550 L 700 550 Z',
        population: 21538187,
        area: 65758
      }
    };
  }

  // Public API methods
  destroy() {
    // Remove event listeners
    window.removeEventListener("resize", () => this.handleResize());
    
    // Clear container
    if (this.container) {
      this.container.innerHTML = '';
    }
    
    // Reset properties
    this.selectedElement = null;
    this.currentMode = "states";
  }

  refresh() {
    this.destroy();
    this.init();
  }

  // Static initialization method
  static init(containerId, options) {
    return new USMapController(containerId, options);
  }
}

// Export for module use
if (typeof module !== "undefined" && module.exports) {
  module.exports = USMapController;
}
if (typeof window !== "undefined") {
  window.USMapController = USMapController;
}

setMode("both");