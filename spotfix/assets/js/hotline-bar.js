
/* SpotFix Emergency Civic Hotline Banner Ticker */
window.SpotFixHotline = {
  init: function() {
    if (document.getElementById('spotfix-hotline-bar')) return;
    const bar = document.createElement('div');
    bar.id = 'spotfix-hotline-bar';
    bar.style.cssText = 'background:linear-gradient(90deg, #ef4444, #b91c1c); color:#fff; padding:6px 16px; font-size:12px; font-weight:600; text-align:center; display:flex; justify-content:center; align-items:center; gap:12px; border-bottom:1px solid rgba(0,0,0,0.2);';
    bar.innerHTML = `
      <span>🚨 Emergency Civic Helpline: <strong>1800-SPOT-FIX (7768-349)</strong> | Power / Gas Leak / Water Burst Alert line active 24/7</span>
      <button style="background:none; border:none; color:#fff; font-weight:bold; cursor:pointer;" onclick="this.parentNode.remove()">✕</button>
    `;
    document.body.prepend(bar);
  }
};
document.addEventListener('DOMContentLoaded', () => SpotFixHotline.init());
