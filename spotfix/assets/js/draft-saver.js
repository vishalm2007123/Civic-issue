
/* SpotFix Form Auto-Save Engine */
window.SpotFixDraft = {
  saveDraft: function(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    const formData = new FormData(form);
    const obj = {};
    formData.forEach((val, key) => obj[key] = val);
    localStorage.setItem('spotfix_draft_' + formId, JSON.stringify(obj));
    if (window.SpotFixToast) SpotFixToast.show('Report draft auto-saved', 'info', 1500);
  },
  restoreDraft: function(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    const data = localStorage.getItem('spotfix_draft_' + formId);
    if (data) {
      try {
        const obj = JSON.parse(data);
        Object.keys(obj).forEach(key => {
          const input = form.querySelector('[name="' + key + '"]');
          if (input) input.value = obj[key];
        });
        if (window.SpotFixToast) SpotFixToast.show('Draft restored successfully', 'success');
      } catch(e) {}
    }
  },
  clearDraft: function(formId) {
    localStorage.removeItem('spotfix_draft_' + formId);
  }
};
