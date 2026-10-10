
/* SpotFix Top Citizen Fixers Leaderboard */
window.SpotFixLeaderboard = {
  renderLeaderboard: function(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const topUsers = [
      { rank: 1, name: 'Aarav Sharma', points: 1450, fixes: 42, badge: '🏆 Civic Champion' },
      { rank: 2, name: 'Priya Patel', points: 1210, fixes: 35, badge: '🥈 Master Fixer' },
      { rank: 3, name: 'Rohan Mehta', points: 980, fixes: 28, badge: '🥉 Eco Guardian' },
      { rank: 4, name: 'Neha Gupta', points: 840, fixes: 22, badge: '⭐ Active Hero' },
      { rank: 5, name: 'Vikram Singh', points: 720, fixes: 19, badge: '🌟 Spotter' }
    ];
    el.innerHTML = `
      <table style="width:100%; border-collapse:collapse; text-align:left;">
        <thead>
          <tr style="border-bottom:2px solid var(--border, #334155);">
            <th style="padding:10px;">Rank</th>
            <th style="padding:10px;">Citizen Name</th>
            <th style="padding:10px;">Badge</th>
            <th style="padding:10px;">Fixes</th>
            <th style="padding:10px;">Points</th>
          </tr>
        </thead>
        <tbody>
          ${topUsers.map(u => `
            <tr style="border-bottom:1px solid var(--border, #1e293b);">
              <td style="padding:12px; font-weight:bold;">#${u.rank}</td>
              <td style="padding:12px;">${u.name}</td>
              <td style="padding:12px;"><span class="badge-status badge-status-progress">${u.badge}</span></td>
              <td style="padding:12px;">${u.fixes}</td>
              <td style="padding:12px; font-weight:bold; color:#10b981;">${u.points} pts</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
};
