
/* SpotFix Citizen Badge & Level Gamification System */
window.SpotFixBadge = {
  calculateLevel: function(points) {
    if (points >= 1000) return { level: 5, title: 'Civic Master 👑', color: '#8b5cf6' };
    if (points >= 600) return { level: 4, title: 'Ward Guardian 🛡️', color: '#10b981' };
    if (points >= 300) return { level: 3, title: 'SpotFixer Pro ⭐', color: '#f59e0b' };
    if (points >= 100) return { level: 2, title: 'Active Spotter 🔍', color: '#6366f1' };
    return { level: 1, title: 'Civic Novice 🌱', color: '#94a3b8' };
  }
};
