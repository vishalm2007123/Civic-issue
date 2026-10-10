
/* SpotFix Interactive Location Pin Selector */
window.SpotFixMap = {
  selectedCoords: null,
  initMap: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.style.position = 'relative';
    container.style.height = '240px';
    container.style.background = 'linear-gradient(135deg, #1e293b, #0f172a)';
    container.style.borderRadius = '12px';
    container.style.overflow = 'hidden';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    container.innerHTML = `
      <div style="position:absolute; inset:0; opacity:0.2; background-image:radial-gradient(#6366f1 1px, transparent 1px); background-size:20px 20px;"></div>
      <div id="map-pin" style="z-index:2; text-align:center; cursor:pointer;">
        <span style="font-size:36px;">📍</span>
        <p style="color:#fff; font-size:12px; margin:4px 0; background:rgba(0,0,0,0.6); padding:4px 8px; border-radius:6px;">Click or Drag to Pin Location</p>
      </div>
      <button type="button" id="btn-gps-locate" style="position:absolute; bottom:12px; right:12px; z-index:3; background:#10b981; color:#fff; border:none; padding:6px 12px; border-radius:8px; font-size:12px; cursor:pointer;">🎯 Auto GPS Detect</button>
    `;

    const gpsBtn = container.querySelector('#btn-gps-locate');
    gpsBtn.addEventListener('click', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          this.selectedCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          const locInput = document.getElementById('location');
          if (locInput) locInput.value = `GPS: ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
          if (window.SpotFixToast) SpotFixToast.show('Current location pinned via GPS!', 'success');
        }, () => {
          if (window.SpotFixToast) SpotFixToast.show('GPS location permission denied.', 'warning');
        });
      }
    });
  }
};
document.addEventListener('DOMContentLoaded', () => {
  SpotFixMap.initMap('map-selector-container');
});
