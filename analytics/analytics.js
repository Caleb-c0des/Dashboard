
new Chart(document.getElementById('revenueChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [4500, 5100, 4800, 5800, 7100, 6800, 7600],
      borderColor: '#e8890c',        // orange line
      backgroundColor: 'rgba(232, 137, 12, 0.15)',  // faint orange fill
      fill: true,
      tension: 0.4,                  // smooth curve
      pointRadius: 0,                // hide dots
    }]
  },
  options: {
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.06)' } },
      y: { min: 0, max: 9000 }
    }
  }
});

new Chart(document.getElementById('growth'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [340, 410, 390, 490, 620, 590, 640],
      borderColor: '#4d9de0',        // orange line
      backgroundColor:  'rgba(30, 80, 160, 0.35)',  // faint orange fill
      fill: true,
      tension: 0.4,                  // smooth curve
      pointRadius: 0,                // hide dots
    }]
  },
  options: {
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.06)' } },
      y: {
  min: 0,
  max: 800,       // your highest value
  ticks: {
    stepSize: 200,  // gap between each number (0, 200, 400, 600, 800)
  }
}
    }
  }
});
new Chart(document.getElementById('hours'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','aug','sep','oct','nov','dec'],
    datasets: [{
      data: [4500, 5100, 4800, 8000, 7100, 7500, 8400,8500,8000,8700,9000,1000],
      borderColor: '#e8890c',        // orange line
      backgroundColor: '#f5a623',   // orange bars
      barPercentage: 1,        // how wide each bar is (0-1)
      categoryPercentage: 0.5,   // how much space each group takes (0-1)
      borderRadius: 4,               // slightly rounded tops
      fill: true,
      tension: 0.4,                  // smooth curve
      pointRadius: 0,                // hide dots
    }]
  },
  options: {
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.06)' } },
      y: { min: 0, max: 9000 }
    }
  }
});