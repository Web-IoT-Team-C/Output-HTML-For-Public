//参考URL:https://github.com/toorshia/justgage#options

function centerMeter(){
    var g = new JustGage({
        id: "gauge",
        value: 80,
        min: 0,
        max: 100,
        minTxt: "感染リスク小",
        maxTxt: "感染リスク大",
        width: 200,
        height: 200,
        gaugeWidthScale: 0.4,
    })
}