const ctx = document.getElementById('myChart').getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, 'rgba(255, 140, 0, 0.35)');
    gradient.addColorStop(1, 'rgba(255, 140, 0, 0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Revenue',
          data: [12000, 19000, 15000, 28000, 24000, 35000, 31000],
          borderColor: '#ff8c00',
          backgroundColor: gradient,
          borderWidth: 2.5,
          pointBackgroundColor: '#ff8c00',
          pointRadius: 5,
          pointHoverRadius: 7,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1a2332',
            borderColor: '#ff8c00',
            borderWidth: 1,
            titleColor: '#ff8c00',
            bodyColor: '#cdd5e0',
            callbacks: {
              label: ctx => ` $${ctx.raw.toLocaleString()}`
            }
          }
        },
        scales: {
          x: {
            grid: { color: '#1e2736' },
            ticks: { color: '#4a5568' }
          },
          y: {
            grid: { color: '#1e2736' },
            ticks: {
              color: '#4a5568',
              callback: v => '$' + (v/1000).toFixed(0) + 'k'
            }
          }
        }
      }
    });
