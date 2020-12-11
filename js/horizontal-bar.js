function horizontalBar(id, value){
    const ctx = document.getElementById("chart" + id)
    ctx.width = 640
    ctx.height = 20
    let data = [
        {data: value, backgroundColor: "rgba(244, 143, 177, 0.6)"}
    ]
    /*for(i in x){
        var addData = {data: x[i], backgroundColor: "rgba(244, 143, 177, 0.6)"};
        //data.push(addData);
    }*/



    var chart = createHorizontalBar(ctx, data)


    return function(datas){
        if(chart) {
            chart.destroy()
        }
        let newData = [
            {data: datas, backgroundColor: "rgba(244, 143, 177, 0.6)"}
        ]
        var chart = createHorizontalBar(ctx, newData)
    }
}

function createHorizontalBar(ctx, data){
    var result = new Chart(ctx, {
        type: "horizontalBar",
        data: {
          datasets: data
        },
        options: {
            animation: false,
            responsive: false,
            legend: {
                display: false
            },                
            scales: {
                xAxes: [
                    {
                        ticks:{
                            min: 0,
                            max: 100
                        },
                        display: false,
                    }
                ],
                yAxes: [
                    {
                        ticks:{
                            min: 0,
                            max: 100
                        },
                        display: false,
                        barPercentage: 2

                    }
                ]
            }
        }
    });
    return result
}