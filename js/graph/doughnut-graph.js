function doughnutGraph(){
    var ctx = document.getElementById("mask");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
              backgroundColor: [
                  "#BB5179"
              ],
              data: [38, 62]
          }]
        },
        options: {
            legend: {
                display: false
            },
          title: {
            display: false,
            text: '血液型 割合'
          }
        }
      });
}