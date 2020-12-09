function horizontalBar(x){
    new Chart(document.getElementById("chart"), {
        type: "horizontalBar",
        data: {
          labels: ["Foo"],
          datasets: [
            {data: [x], backgroundColor: "rgba(244, 143, 177, 0.6)" }
          ]
        },
        options: {
            responsive: false,
            legend: {
                display: false
            },                
            scales: {
                xAxes: [
                    {
                        stacked: true,
                    }
                ],
                yAxes: [
                    {
                        barPercentage: 0.2,
                        stacked: true,
                    }
                ]
            }
        }
      });
}