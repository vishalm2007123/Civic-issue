
/* SpotFix Before & After Image Slider Component */
window.SpotFixSlider = {
  initSlider: function(containerId, beforeUrl, afterUrl) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.style.cssText = 'position:relative; width:100%; height:300px; overflow:hidden; border-radius:16px; user-select:none;';
    el.innerHTML = `
      <div style="position:absolute; inset:0; background:url('${afterUrl}') center/cover no-repeat;">
        <span style="position:absolute; top:12px; right:12px; background:rgba(16,185,129,0.9); color:#fff; padding:4px 10px; border-radius:6px; font-size:12px; font-weight:bold;">AFTER FIX</span>
      </div>
      <div id="before-layer-${containerId}" style="position:absolute; inset:0; width:50%; background:url('${beforeUrl}') center/cover no-repeat; border-right:3px solid #fff; box-shadow:4px 0 12px rgba(0,0,0,0.4);">
        <span style="position:absolute; top:12px; left:12px; background:rgba(239,68,68,0.9); color:#fff; padding:4px 10px; border-radius:6px; font-size:12px; font-weight:bold;">BEFORE</span>
      </div>
      <input type="range" min="0" max="100" value="50" style="position:absolute; inset:0; width:100%; height:100%; opacity:0; cursor:ew-resize;" oninput="document.getElementById('before-layer-${containerId}').style.width = this.value + '%'">
    `;
  }
};
