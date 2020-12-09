//体温をグラフに表示

function temp(){
  var ctx = document.getElementById('temp')

  var chart = new Chart(ctx, {
    type: 'line',  
    data: { 
      datasets: [{  
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }]
    },
  
    options: {  
      legend:{
        display: false
      },
      scales: {  
        xAxes: [{ 
          type: 'realtime',
          realtime: {
            onRefresh: function(chart) {
              chart.data.datasets.forEach(function(dataset) {
                dataset.data.push({
                  x: Date.now(),
                  y: Math.random()//ここに最新の体温データを入れる
                });
              });
            },

            delay: 1000
          }
        }]
      }  
    }
  });
}