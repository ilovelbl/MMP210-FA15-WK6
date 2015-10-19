function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);


    var x = 0;
    var y = 0;
    var gridWidth = 600;

    for(var i = 0; i<50; i++){
        console.log(i);
        drawWindow(x,y);
        // increment our X
        x += 120;//same as x = x + 120
        //check if x is past the grid width
        if(x > gridWidth){
            //set x back to the begnning
            x = 0;
            //move y down
            y += 270;
        }
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





