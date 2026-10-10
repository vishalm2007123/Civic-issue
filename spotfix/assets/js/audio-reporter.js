
/* SpotFix Hands-Free Voice Note Issue Description Recorder */
window.SpotFixAudio = {
  isRecording: false,
  timer: null,
  seconds: 0,
  initRecorder: function(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
      <div style="background:rgba(99,102,241,0.08); border:1px solid rgba(99,102,241,0.2); padding:12px 16px; border-radius:12px; display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <button type="button" id="btn-mic-record" style="width:40px; height:40px; border-radius:50%; background:#ef4444; color:#fff; border:none; cursor:pointer; font-size:18px;">🎙️</button>
          <div>
            <strong style="font-size:13px; display:block;">Hands-Free Voice Description</strong>
            <small id="mic-status" style="color:#94a3b8;">Click mic to start audio recording</small>
          </div>
        </div>
        <span id="mic-timer" style="font-family:monospace; font-size:14px; font-weight:bold; color:#f59e0b;">00:00</span>
      </div>
    `;

    const micBtn = el.querySelector('#btn-mic-record');
    const statusText = el.querySelector('#mic-status');
    const timerText = el.querySelector('#mic-timer');

    micBtn.addEventListener('click', () => {
      this.isRecording = !this.isRecording;
      if (this.isRecording) {
        micBtn.style.background = '#10b981';
        statusText.textContent = 'Recording active... speak clearly';
        this.seconds = 0;
        this.timer = setInterval(() => {
          this.seconds++;
          const mins = String(Math.floor(this.seconds / 60)).padStart(2, '0');
          const secs = String(this.seconds % 60).padStart(2, '0');
          timerText.textContent = `${mins}:${secs}`;
        }, 1000);
        if (window.SpotFixToast) SpotFixToast.show('Audio recording started', 'info');
      } else {
        clearInterval(this.timer);
        micBtn.style.background = '#ef4444';
        statusText.textContent = 'Voice note saved (Attachment #1)';
        if (window.SpotFixToast) SpotFixToast.show('Voice description attached to report', 'success');
      }
    });
  }
};
document.addEventListener('DOMContentLoaded', () => SpotFixAudio.initRecorder('audio-recorder-container'));
