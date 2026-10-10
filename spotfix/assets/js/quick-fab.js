
/* SpotFix Quick Floating Action Button (FAB) */
window.SpotFixFAB = {
  init: function() {
    if (document.getElementById('spotfix-fab')) return;
    const fab = document.createElement('div');
    fab.id = 'spotfix-fab';
    fab.style.cssText = 'position:fixed; bottom:24px; left:24px; z-index:999;';
    fab.innerHTML = `
      <button id="spotfix-fab-btn" aria-label="Quick Report" style="width:56px; height:56px; border-radius:50%; background:linear-gradient(135deg,#6366f1,#8b5cf6); color:#fff; border:none; font-size:24px; box-shadow:0 8px 20px rgba(99,102,241,0.4); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:transform 0.2s ease;">
        ⚡
      </button>
      <div id="spotfix-fab-menu" style="display:none; position:absolute; bottom:68px; left:0; background:rgba(15,23,42,0.95); border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(10px); border-radius:12px; padding:10px; width:180px; box-shadow:0 10px 25px rgba(0,0,0,0.3);">
        <a href="report.html" style="display:block; padding:8px; color:#fff; text-decoration:none; font-size:13px;">📸 Snap & Report</a>
        <a href="track_complaint.html" style="display:block; padding:8px; color:#fff; text-decoration:none; font-size:13px;">🔍 Track Status</a>
        <a href="survey.html" style="display:block; padding:8px; color:#fff; text-decoration:none; font-size:13px;">💬 Give Feedback</a>
      </div>
    `;
    document.body.appendChild(fab);

    const btn = fab.querySelector('#spotfix-fab-btn');
    const menu = fab.querySelector('#spotfix-fab-menu');
    btn.addEventListener('click', () => {
      const isVisible = menu.style.display === 'block';
      menu.style.display = isVisible ? 'none' : 'block';
      btn.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(45deg)';
    });
  }
};
document.addEventListener('DOMContentLoaded', () => SpotFixFAB.init());
