var testData = {
    二酸化炭素: 32,
    マスク率: 73,
    湿度: 53,
}

function main(){
    var num = 1;
    var w = $('.wrapper').width();
    var h = $('.wrapper').height();
    $('.charter').attr('width', w);
    $('.charter').attr('height', h);
    for(i in testData){
        var ctx = document.getElementById("chart"+num++);
        showChart(ctx, i, testData[i])
    }
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

    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                backgroundColor: [
                    color
                ],
                data: [data, 100-data]
            }]
          },
          options: {
            title: {
              display: true,
              text: title
            }
          }
    });
}

main();