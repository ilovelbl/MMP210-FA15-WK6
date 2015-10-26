function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);


    var x = 0;
    var y = 0;
    var gridWidth = windowWidth;

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
            y += 300;
        }//end if
    }//end loop

}

function draw(){

}
//function
//drawWindow(startX,startY){
//    fill('peru');
//    stroke('silver');
//    strokeWeight(5);
//    rect(startX,startY,100,250);
//
//
//
//}
function
drawWindow(startX,startY){
      strokeWeight(1);
  stroke('black');
  fill('peru');
  rect(startX,startY,125,20);

  //inside black box
  strokeWeight(1);
  stroke('black');
  fill('lightgray');
  rect(startX+15,startY+20,125-30,150);

  //bottom box
  strokeWeight(1);
  stroke('black');
  fill('peru');
  rect(startX,startY+170,125,40);

  strokeWeight(4);
  stroke('peru');
  line(startX+15,startY+20,startX+15,startY+170);
  line(startX+63,startY+20,startX+63,startY+170);
  x = startX + 110;
  line(x,startY+20,x,startY+170);

  line(startX+15,startY+20,x,startY+20);
  line(startX+15,startY+20+150/2,x,startY+20+150/2);
  line(startX+15,startY+20+150,x,startY+20+150);



}





