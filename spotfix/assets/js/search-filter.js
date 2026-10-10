
/* SpotFix Live Real-time Client-side Search & Filtering */
window.SpotFixFilter = {
  applyFilter: function(searchInputId, containerSelector, itemSelector) {
    const input = document.getElementById(searchInputId);
    if (!input) return;
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll(itemSelector);
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
};
