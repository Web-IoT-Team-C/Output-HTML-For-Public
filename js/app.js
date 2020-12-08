new Chart(document.getElementById("chart"), {
    type: "horizontalBar",
    data: {
      labels: ["Foo"],
      datasets: [
        {data: [45], backgroundColor: "rgba(244, 143, 177, 0.6)" },
        {data: [55], backgroundColor: "rgba(100, 181, 246, 0.6)" }
      ]
    },
    options: {
        responsive: false,
        legend: {
            position: 'bottom'
        },                
        scales: {
            xAxes: [
                {
                    stacked: true,
                }
            ],
            yAxes: [
                {
                    stacked: true,
                }
            ]
        }
    }
  });