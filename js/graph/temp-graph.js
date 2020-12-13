/*参考URL:https://nagix.github.io/chartjs-plugin-streaming/ja/

体温をグラフに表示する関数
変数にこの関数をぶち込んで使う
仮に変数sampleに入れたとすると、値を更新するときは
sample(新しい値);
とする
*/

function tempGraph(data){
  const ctx = document.getElementById('temp-graph');
  const tempNum = document.getElementById('temp-num');
  let temp = data;

  tempNum.textContent = temp + "°";

  const chart = new Chart(ctx, {
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
                  y: temp//ここに最新の体温データを入れる
                });
              });
            },

            delay: 1000
          }
        }],
        yAxes: [{
          //display: false
        }]
      }  
    }
  });

  return function(data){
    temp = data;
    tempNum.textContent = temp + "°";
  }
}