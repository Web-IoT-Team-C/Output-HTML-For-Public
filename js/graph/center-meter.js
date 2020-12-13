/*参考URL:https://github.com/toorshia/justgage#options

変数にこの関数をぶち込みつつ、引数として表示したい割合を％形式にして、数値型で渡す
仮に変数sampleに代入したとして、値を変更する際は
sample(新しいデータ)
とする
*/

function centerMeter(data){

    const parent = document.getElementById("gauge");
    const child = document.getElementById("show-status");
    const messageBox = document.getElementById("show-message");

    const width = parent.clientWidth;
    
    //表示する文字を設定
    let result;
    let message;
    if(data < 33){
        result = "A";
        message = "安全です";
    }else if(data < 66){
        result = "B"
        message = "注意が必要です";
    }else{
        result = "C"
        message = "危険です";
    }

    child.textContent = result;
    child.style.left = (width / 2);

    messageBox.textContent = message

    //メーターの描写
    var gauge = new JustGage({
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
        hideValue: true
    })

    return function(data){
        gauge.refresh(data)
    }
}