var canvas;
var music;
var ball;
var rectangle1;
var rectangle2;
var rectangle3;
var rectangle4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box=createSprite(400,300,30,30);
box.shapeColor=("white")
box.velocityX=3;
box.velocityY=3;
     
rectangle1=createSprite(100,580,170,20)
rectangle1.shapeColor=("blue");

rectangle2=createSprite(300,580,170,20)
rectangle2.shapeColor=("yellow");

rectangle3=createSprite(500,580,170,20)
rectangle3.shapeColor=("maroon");

rectangle4=createSprite(700,580,170,20)
rectangle4.shapeColor=("darkgreen");

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()

box.bounceOff(edges[0]);
box.bounceOff(edges[1]);
box.bounceOff(edges[2]);
box.bounceOff(edges[3]);

if(rectangle1.isTouching(box)){

    box.shapeColor=("blue")
    box.bounceOff(rectangle1)
}

if(rectangle3.isTouching(box)){

    box.shapeColor=("maroon")
    box.bounceOff(rectangle3)
}

if(rectangle4.isTouching(box)){

    box.shapeColor=("darkgreen")
    box.bounceOff(rectangle4)
}

if(rectangle2.isTouching(box)){
box.shapeColor=("yellow");
box.velocityX=0;

}

if(rectangle1.isTouching(box)  && box.bounceOff(rectangle1)){
    box.shapeColor=("blue")
}

if(rectangle3.isTouching(box)  && box.bounceOff(rectangle3)){
    box.shapeColor=("maroon")
}
if(rectangle4.isTouching(box)  && box.bounceOff(rectangle4)){
    box.shapeColor=("darkgreen")
}

    //add condition to check if box touching surface and make it box
    drawSprites();
}
