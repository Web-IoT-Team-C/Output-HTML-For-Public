var testData = 70
var testPer = {co2:"20", humidity:"56", temperture:"23"}

var w = $('.chart-box').width();
var h = $('.chart-box').height();
$('#chart').attr('width', w);
$('#chart').attr('height', h);
const ctx = document.getElementById("chart");

const co2 = document.getElementById("co2");
const humidity = document.getElementById("humidity");
const temperature = document.getElementById("temperature");

function main(){
    co2.innerHTML = testPer["co2"] + "ppm"
    humidity.innerHTML = testPer["humidity"] + "%"
    temperature.innerHTML = testPer["temperture"] + "°"

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