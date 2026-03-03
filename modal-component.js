/**
 * Modal Component Factory
 * Generates reusable modal components from configuration data
 * Features: Easy to add/modify modals, DRY principle, consistent styling
 */

class ModalComponent {
  constructor(config) {
    this.id = config.id;
    this.title = config.title;
    this.image = config.image;
    this.description = config.description;
    this.content = config.content;
    this.links = config.links || [];
  }

  /**
   * Generates the HTML for a Bootstrap modal
   * @returns {string} Complete modal HTML
   */
  render() {
    const linksHTML = this.links.map(link => `
      <a class="btn btn-lg btn-outline-light btn-floating m-2" href="${link.url}" target="_blank" rel="noopener noreferrer" role="button" title="${link.label}">
        <i class="${link.icon}"></i>
      </a>
    `).join('');

    return `
      <div class="modal fade" id="${this.id}" tabindex="-1" aria-labelledby="${this.id}Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-black text-white">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="${this.id}Label">${this.title}</h1>
              <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="text-center mb-3"><img src="${this.image}" style="width: 20rem" alt="${this.title}"></div>
              ${this.content}
              ${linksHTML ? `<div class="container text-center mb-4">${linksHTML}</div>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * Generates all modals and injects them into the DOM
 * Call this function after DOM is loaded
 */
function generateAllModals() {
  const containerId = 'modals-container';
  let container = document.getElementById(containerId);
  
  // Create container if it doesn't exist
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);
  }

  // Generate and inject all modals
  MODALS_CONFIG.forEach(config => {
    const modal = new ModalComponent(config);
    container.insertAdjacentHTML('beforeend', modal.render());
  });
}

/**
 * Alternative: Generate a single modal by ID
 * Useful if you want to lazy-load modals
 */
function generateModalById(modalId) {
  const config = MODALS_CONFIG.find(m => m.id === modalId);
  if (config) {
    const modal = new ModalComponent(config);
    const container = document.getElementById('modals-container') || (() => {
      const c = document.createElement('div');
      c.id = 'modals-container';
      document.body.appendChild(c);
      return c;
    })();
    container.insertAdjacentHTML('beforeend', modal.render());
  }
}

// Initialize modals when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', generateAllModals);
} else {
  generateAllModals();
}
