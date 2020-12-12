function main(){
    for(i = 1; i <= 4; i++){
        meterCompose("meter"+i, 70)
    }

    tempGraph();
    doughnutGraph();
    centerMeter();
    getMedia(hdConstraints);
    //setTimeout('horiBar([60]);', 1000)
    //horiBar([100]);
}

main();