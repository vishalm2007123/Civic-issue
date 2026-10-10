
/* SpotFix Network & Offline Connectivity Detector */
window.SpotFixOffline = {
  init: function() {
    const updateOnlineStatus = () => {
      const isOnline = navigator.onLine;
      let badge = document.getElementById('network-status-badge');
      if (!badge) {
        badge = document.createElement('div');
        badge.id = 'network-status-badge';
        badge.style.cssText = 'position:fixed; bottom:12px; left:12px; z-index:999; padding:4px 10px; border-radius:12px; font-size:11px; font-weight:bold; color:#fff;';
        document.body.appendChild(badge);
      }
      badge.style.background = isOnline ? 'rgba(16,185,129,0.8)' : 'rgba(239,68,68,0.9)';
      badge.textContent = isOnline ? '🟢 Network Online' : '🔴 Offline Mode (Saved locally)';
    };
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
  }
};
document.addEventListener('DOMContentLoaded', () => SpotFixOffline.init());
