//参考URL:https://web-designer.cman.jp/html_ref/abc_list/meter/

//左のメーターを制御するための関数
//idに制御したいメーターのid, dataに表示させたい割合を％形式にして数値型で渡す
function meterCompose(id, data){
    const meter = document.getElementById(id);
    meter.value = data
}