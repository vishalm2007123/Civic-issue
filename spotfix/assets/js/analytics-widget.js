
/* SpotFix Interactive Analytics & Dynamic Counters */
window.SpotFixAnalytics = {
  animateCounter: function(elementId, target, duration = 2000) {
    const el = document.getElementById(elementId);
    if (!el) return;
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += Math.ceil(target / 50);
      if (start >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = start.toLocaleString();
      }
    }, stepTime || 20);
  },
  initDashboardStats: function() {
    this.animateCounter('stat-fixed-count', 4280);
    this.animateCounter('stat-active-users', 18450);
    this.animateCounter('stat-avg-hours', 18);
  }
};
document.addEventListener('DOMContentLoaded', () => {
  SpotFixAnalytics.initDashboardStats();
});
