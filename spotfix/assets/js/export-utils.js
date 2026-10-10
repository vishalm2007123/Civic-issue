
/* SpotFix Data Export Helper */
window.SpotFixExport = {
  exportToCSV: function(filename, rows) {
    if (!rows || !rows.length) {
      if (window.SpotFixToast) SpotFixToast.show('No data available to export', 'warning');
      return;
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k].toString();
          cell = cell.replace(/"/g, '""');
          if (cell.search(/("|,|\n)/g) >= 0) {
            cell = '"' + cell + '"';
          }
          return cell;
        }).join(separator);
      }).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (window.SpotFixToast) SpotFixToast.show('Exported ' + rows.length + ' rows to CSV', 'success');
    }
  },
  exportToJSON: function(filename, data) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    if (window.SpotFixToast) SpotFixToast.show('Data exported to JSON file', 'success');
  },
  printReport: function() {
    window.print();
  }
};
