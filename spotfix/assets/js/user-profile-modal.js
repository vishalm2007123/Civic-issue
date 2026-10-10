
/* SpotFix Citizen User Profile Dropdown & Stats Modal */
window.SpotFixProfile = {
  toggleProfileMenu: function() {
    let modal = document.getElementById('user-profile-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'user-profile-modal';
      modal.style.cssText = 'position:fixed; top:70px; right:24px; z-index:999; width:280px; background:var(--card-bg, #1e293b); color:var(--text, #fff); border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:16px; box-shadow:0 10px 30px rgba(0,0,0,0.4); display:none;';
      modal.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; border-bottom:1px solid #334155; padding-bottom:12px; margin-bottom:12px;">
          <div class="spotfix-avatar" style="width:48px; height:48px; font-size:18px;">AS</div>
          <div>
            <h4 style="margin:0; font-size:15px;">Aarav Sharma</h4>
            <small style="color:#10b981;">Level 4 Civic Guardian</small>
          </div>
        </div>
        <div style="font-size:13px; line-height:1.8;">
          <div style="display:flex; justify-content:space-between;"><span>Reported Issues:</span> <strong>14</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Resolved Fixes:</span> <strong>12</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Reward Points:</span> <strong style="color:#f59e0b;">450 pts</strong></div>
        </div>
        <hr style="border:none; border-top:1px solid #334155; margin:12px 0;">
        <a href="rewards.html" style="display:block; color:#6366f1; text-decoration:none; font-size:13px; font-weight:600; margin-bottom:8px;">🎁 Claim Rewards</a>
        <a href="index.html" style="display:block; color:#ef4444; text-decoration:none; font-size:13px; font-weight:600;">🚪 Log Out</a>
      `;
      document.body.appendChild(modal);
    }
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
};
