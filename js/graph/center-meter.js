//参考URL:https://github.com/toorshia/justgage#options

/*function centerMeter(percent){
    const wrapper = document.getElementById("center-wrapper")
    const width = wrapper.clientWidth
    const height = wrapper.clientHeight

    var canvas = $(".border-inner")[0];
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 500);  // 以前描画したcanvasがあればクリア。

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";

    // min -200, max 20
    var result = percent;   // 60%の表記
    var startPoint = -1.8* (100 - result)
    ctx.arc(width/2, height, 78, startPoint / 180 * Math.PI, Math.PI, true);
    ctx.stroke();
}*/

function centerMeter(data){
    var g = new JustGage({
        id: "gauge",
        value: data,
        valueMinFontSize: 30,
        min: 0,
        max: 100,
        minTxt: "感染リスク小",
        maxTxt: "感染リスク大",
        minLabelMinFontSize: 15,
        maxLabelMinFontSize: 15,
        minLabelFontColor: "#edebeb",
        relatedGaugeSize: true,
        noGradient: true,
        gaugeWidthScale: 0.4,
        displayRemaining: "test"
    })
}