function main(){
    for(i = 1; i <= 4; i++){
        horizontalBar(i, [30]);
    }

    tempGraph();
    doughnutGraph();
    getMedia(hdConstraints);
    //setTimeout('horiBar([60]);', 1000)
    //horiBar([100]);
}

main();