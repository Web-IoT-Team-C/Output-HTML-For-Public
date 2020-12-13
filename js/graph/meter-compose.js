/*参考URL:https://web-designer.cman.jp/html_ref/abc_list/meter/

左のメーターを制御するための関数
idに制御したいメーターのid, dataに表示させたい割合を％形式にして数値型で渡す
また、渡したデータをメータの右上に表示する*/
function meterCompose(id, data){
    const meter = document.getElementById("meter" + id);
    const inviNum = document.getElementById("invi-num" + id);

    meter.value = data
    inviNum.textContent = data
}