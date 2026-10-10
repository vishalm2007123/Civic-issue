
/* SpotFix Theme Toggle Engine */
(function() {
  const savedTheme = localStorage.getItem('spotfix_theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);

  window.SpotFixTheme = {
    getTheme: function() {
      return document.documentElement.getAttribute('data-theme') || 'light';
    },
    toggleTheme: function() {
      const current = this.getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('spotfix_theme', next);
      const btn = document.getElementById('spotfix-theme-btn');
      if (btn) {
        btn.innerHTML = next === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        btn.setAttribute('aria-label', 'Switch to ' + current + ' mode');
      }
      if (window.SpotFixToast) {
        SpotFixToast.show('Switched to ' + next + ' mode', 'info', 2000);
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('spotfix-theme-btn');
    if (btn) {
      const current = window.SpotFixTheme.getTheme();
      btn.innerHTML = current === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
      btn.addEventListener('click', () => window.SpotFixTheme.toggleTheme());
    }
  });
})();
