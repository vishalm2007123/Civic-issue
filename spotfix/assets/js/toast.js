
/* SpotFix Toast Notification Engine */
(function() {
  window.SpotFixToast = {
    show: function(message, type = 'info', duration = 4000) {
      let container = document.getElementById('spotfix-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'spotfix-toast-container';
        container.className = 'spotfix-toast-container';
        document.body.appendChild(container);
      }
      const toast = document.createElement('div');
      toast.className = 'spotfix-toast spotfix-toast-' + type;
      toast.setAttribute('role', 'alert');
      
      const iconMap = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
      };

      toast.innerHTML = '<span class="spotfix-toast-icon">' + (iconMap[type] || 'ℹ') + '</span>' +
                        '<span class="spotfix-toast-msg">' + message + '</span>' +
                        '<button class="spotfix-toast-close" aria-label="Close">&times;</button>';
                        
      container.appendChild(toast);
      
      toast.querySelector('.spotfix-toast-close').addEventListener('click', () => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
      });
      
      setTimeout(() => {
        if (toast.parentNode) {
          toast.classList.add('hide');
          setTimeout(() => toast.remove(), 300);
        }
      }, duration);
    }
  };
})();
