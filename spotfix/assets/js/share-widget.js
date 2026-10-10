
/* SpotFix Social & Web Share Helper */
window.SpotFixShare = {
  shareReport: function(title, text, url) {
    if (navigator.share) {
      navigator.share({ title, text, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url || window.location.href);
      if (window.SpotFixToast) SpotFixToast.show('Link copied to clipboard!', 'success');
    }
  }
};
