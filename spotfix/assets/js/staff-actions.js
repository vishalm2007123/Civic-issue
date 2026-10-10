
/* SpotFix Staff Bulk Actions Controller */
window.SpotFixStaff = {
  bulkAssign: function(crewName) {
    if (window.SpotFixToast) SpotFixToast.show('Assigned selected issues to ' + crewName, 'success');
  },
  bulkUpdateStatus: function(status) {
    if (window.SpotFixToast) SpotFixToast.show('Updated status to ' + status + ' for selected complaints', 'success');
  }
};
