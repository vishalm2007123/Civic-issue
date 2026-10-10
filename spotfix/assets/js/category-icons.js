
/* SpotFix Civic Category SVG Icon Provider */
window.SpotFixIcons = {
  getCategoryIcon: function(category) {
    const icons = {
      pothole: '🕳️',
      streetlight: '💡',
      garbage: '🗑️',
      water: '🚰',
      traffic: '🚦',
      default: '📌'
    };
    return icons[category.toLowerCase()] || icons.default;
  }
};
