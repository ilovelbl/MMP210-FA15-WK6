function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);


    //drawWindow(50,50);//call the function
    //drawWindow(50+100+10,50);

    for(var i = 0; i<10; i++){
        console.log(i);
        drawWindow(150*i+10,50);
    }
    for(var j =0; j<11; j++){
        console.log(j);
        drawWindow(150*j+20,350);
    }

//fill('gray');
//    rect(50+100+10,50,100,250);
//
//    fill(104,250,190);
//    rect(270,50,100,250);
}

function draw(){

}
function
drawWindow(startX,startY){
    fill('peru');
    stroke('silver');
    strokeWeight(5);
    rect(startX,startY,100,250);



}





