
/* SpotFix Dynamic SVG Chart Generator */
window.SpotFixChart = {
  renderBarChart: function(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const max = Math.max(...data.map(d => d.value));
    container.innerHTML = `
      <div style="display:flex; align-items:flex-end; gap:16px; height:180px; border-bottom:2px solid #334155; padding-bottom:8px;">
        ${data.map(d => `
          <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px;">
            <span style="font-size:12px; font-weight:bold;">${d.value}</span>
            <div style="width:100%; height:${(d.value / max) * 120}px; background:linear-gradient(180deg, #6366f1, #8b5cf6); border-radius:6px 6px 0 0;"></div>
            <small style="font-size:11px; color:#94a3b8;">${d.label}</small>
          </div>
        `).join('')}
      </div>
    `;
  }
};
