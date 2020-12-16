//マスク着用割合表示用グラフ

function doughnutGraph(){
    const showImg = document.getElementById("check-mask");
    showImg.src = "./img/check.png";
    return function(data){
      if(data){
        showImg.src = "./img/check.png";
      }else{
        showImg.src = "./img/cross.png";
      }
    }
}