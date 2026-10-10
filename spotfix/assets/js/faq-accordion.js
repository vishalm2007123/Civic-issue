
/* SpotFix FAQ Accordion Helper */
window.SpotFixFAQ = {
  initAccordion: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll('.faq-item-title').forEach(btn => {
      btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isExpanded);
        body.style.display = isExpanded ? 'none' : 'block';
      });
    });
  }
};
