
/* SpotFix Real-Time Notification Bell & Unread Drawer */
window.SpotFixNotifs = {
  unreadCount: 3,
  toggleDrawer: function() {
    let drawer = document.getElementById('notif-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'notif-drawer';
      drawer.style.cssText = 'position:fixed; top:70px; right:60px; z-index:9999; width:300px; background:var(--card-bg, #1e293b); color:var(--text, #fff); border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:16px; box-shadow:0 10px 30px rgba(0,0,0,0.4); display:none;';
      drawer.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:8px; margin-bottom:12px;">
          <h4 style="margin:0;">🔔 Notifications</h4>
          <span style="background:#ef4444; color:#fff; font-size:11px; padding:2px 6px; border-radius:10px;">3 New</span>
        </div>
        <div style="font-size:13px; display:flex; flex-direction:column; gap:10px;">
          <div style="background:rgba(255,255,255,0.05); padding:8px; border-radius:8px;">
            <strong>FIX-1089 Updated:</strong> Status changed to <em>In Progress</em>.
          </div>
          <div style="background:rgba(255,255,255,0.05); padding:8px; border-radius:8px;">
            <strong>🎁 Reward Earned:</strong> +50 points for report validation!
          </div>
          <div style="background:rgba(255,255,255,0.05); padding:8px; border-radius:8px;">
            <strong>📢 Announcement:</strong> Ward 12 cleanliness drive this Saturday.
          </div>
        </div>
      `;
      document.body.appendChild(drawer);
    }
    drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
  }
};
