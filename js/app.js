var testData = 43

function main(){
    var w = $('.wrapper').width();
    var h = $('.wrapper').height();
    $('.charter').attr('width', w);
    $('.charter').attr('height', h);
    var ctx = document.getElementById("chart");
    showChart(ctx, "総合危険度", testData)
}


function showChart(ctx, title, data){
    var color;

    if(data <= 33){
        color = "#00fa9a"
    }else if(data <= 66){
        color = "#ffd700"
    }else{
        color = "#a52a2a"
    }

      // グラフオプション
  var options = {
    // グラフの太さ（中央部分を何％切り取るか）
    cutoutPercentage: 65,
    // 凡例を表示しない
    legend: { display: false },
    // 自動サイズ変更をしない
    responsive: true,
    // タイトル
    title: {
      display: true,
      fontSize: 40,
      text: title,
    },
    // マウスオーバー時に情報を表示しない
    tooltips: { enabled: false },
  };

    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [
                    color
                ],
                data: [data, 100-data]
            }]
          },
          options: options
    });
}

main();