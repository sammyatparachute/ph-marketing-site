// Define the class in the global window scope
window.USMapController = class USMapController {
  constructor() {
    this.territories = window.US_TERRITORIES_DATA || {};
    this.states = window.US_STATES_DATA || {};
    this.mode = 'territories'; // or 'states'
    this.selectedTerritory = null;
  }
  
  init(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.log('ERROR: Container not found:', containerId);
      return;
    }
    
    // Create SVG element
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute("viewBox", "0 0 24 18");
    this.svg.setAttribute("class", "territory-map");
    this.svg.style.width = "100%";
    this.svg.style.height = "100%";
    
    // Add states first (as background)
    this.renderStates();
    
    // Add territories on top
    this.renderTerritories();
    
    container.appendChild(this.svg);
  }
  
  renderStates() {
    Object.entries(this.states).forEach(([stateId, state]) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", state.path);
      path.setAttribute("class", "state");
      path.setAttribute("data-state", stateId);
      path.setAttribute("fill", "#f0f0f0");
      path.setAttribute("stroke", "#ccc");
      path.setAttribute("stroke-width", "0.02");
      
      this.svg.appendChild(path);
    });
  }
  
  renderTerritories() {
    Object.entries(this.territories).forEach(([territoryId, territory]) => {
      if (!territory.path) {
        console.log(`No path for territory: ${territoryId}`);
        return;
      }
      
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", territory.path);
      path.setAttribute("class", "territory");
      path.setAttribute("data-territory-id", territoryId);
      path.setAttribute("fill", territory.color || "#4A90E2");
      path.setAttribute("fill-opacity", "0.6");
      path.setAttribute("stroke", "#fff");
      path.setAttribute("stroke-width", "0.02");
      
      // Add hover effect
      path.addEventListener("mouseenter", (e) => this.handleTerritoryHover(e, territory));
      path.addEventListener("mouseleave", () => this.hideTooltip());
      path.addEventListener("click", () => this.handleTerritoryClick(territoryId));
      
      this.svg.appendChild(path);
    });
  }
  
  handleTerritoryHover(event, territory) {
    // Show tooltip
    const tooltip = document.getElementById('map-tooltip') || this.createTooltip();
    tooltip.innerHTML = `
      <strong>${territory.name}</strong><br>
      ${territory.repInfo?.name || 'Unassigned'}<br>
      ${territory.zipCount || 0} zip codes
    `;
    tooltip.style.display = 'block';
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY - 10 + 'px';
  }
  
  hideTooltip() {
    const tooltip = document.getElementById('map-tooltip');
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  }
  
  createTooltip() {
    const tooltip = document.createElement('div');
    tooltip.id = 'map-tooltip';
    tooltip.style.cssText = `
      position: absolute;
      background: white;
      border: 1px solid #ccc;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 1000;
      display: none;
      pointer-events: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(tooltip);
    return tooltip;
  }
  
  handleTerritoryClick(territoryId) {
    console.log('Territory clicked:', territoryId);
    // Add your click handling logic here
    this.selectedTerritory = territoryId;
  }
  
  // Define setMode method to fix the error
  setMode(mode) {
    this.mode = mode;
    // Re-render based on mode
    this.svg.innerHTML = '';
    if (mode === 'states') {
      this.renderStates();
    } else {
      this.renderStates();
      this.renderTerritories();
    }
  }
  
  updateTerritories(newTerritories) {
    this.territories = newTerritories;
    this.svg.innerHTML = '';
    this.renderStates();
    this.renderTerritories();
  }
};

// Also create a global instance if needed
window.mapController = null;

// Initialize function for the page
window.initializeMap = function() {
  if (!window.US_TERRITORIES_DATA) {
    console.log('ERROR: US_TERRITORIES_DATA not loaded');
    return;
  }
  
  window.mapController = new USMapController();
  window.mapController.init('map-container'); // Use your actual container ID
};