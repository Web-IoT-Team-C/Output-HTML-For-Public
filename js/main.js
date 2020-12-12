function main(){
    for(i = 1; i <= 4; i++){
        meterCompose("meter"+i, 70)
    }

    tempGraph();
    doughnutGraph();
    centerMeter(43);
    getMedia(hdConstraints);
}

main();