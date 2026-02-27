// grab the canvas
const ctx = document.getElementById('myChart').getContext('2d');

// create the chart
new Chart(ctx, {
  type: 'line',                          // line graph
  data: {
   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Overview',
      data: [5000, 12000, 8000, 20000, 15000, 30000],    // y axis values
      borderColor: 'orange',             // line color
      backgroundColor: 'rgba(255,165,0,0.2)',  // fill color under line
      fill: true,                        // show fill
      tension: 0.4                       // curved line (0 = straight)
    }]
  }
});