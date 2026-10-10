
/* SpotFix Complaint Timeline Progress Component */
window.SpotFixTimeline = {
  renderTimeline: function(containerId, steps) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = steps.map((s, idx) => `
      <div style="display:flex; gap:16px; margin-bottom:20px; position:relative;">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="width:32px; height:32px; border-radius:50%; background:${s.done ? '#10b981' : '#475569'}; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:14px;">
            ${s.done ? '✓' : idx + 1}
          </div>
          ${idx < steps.length - 1 ? '<div style="width:2px; flex:1; background:' + (s.done ? '#10b981' : '#475569') + '; margin-top:4px;"></div>' : ''}
        </div>
        <div style="flex:1;">
          <h4 style="margin:0; font-size:15px; color:${s.done ? 'var(--text)' : '#94a3b8'};">${s.title}</h4>
          <p style="margin:4px 0 0; font-size:13px; color:#64748b;">${s.description}</p>
          <small style="color:#94a3b8;">${s.time || ''}</small>
        </div>
      </div>
    `).join('');
  }
};
