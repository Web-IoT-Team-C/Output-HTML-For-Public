function main(){
    for(i = 1; i <= 4; i++){
        horizontalBar(i, [30]);
    }

    tempGraph();
    //setTimeout('horiBar([60]);', 1000)
    horiBar([100]);
}

main();