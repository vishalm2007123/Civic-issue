
/* SpotFix UI Audio Feedback Effects */
window.SpotFixSound = {
  enabled: localStorage.getItem('spotfix_sound') === 'true',
  playClick: function() {
    if (!this.enabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch(e) {}
  },
  toggleSound: function() {
    this.enabled = !this.enabled;
    localStorage.setItem('spotfix_sound', this.enabled);
    if (window.SpotFixToast) SpotFixToast.show('UI Sound Effects ' + (this.enabled ? 'Enabled 🔊' : 'Muted 🔇'), 'info');
  }
};
document.addEventListener('click', (e) => {
  if (e.target.matches('button, a, .btn, input[type="submit"]')) {
    SpotFixSound.playClick();
  }
});
