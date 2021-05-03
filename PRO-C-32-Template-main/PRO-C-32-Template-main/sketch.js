const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time
var bg ="sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg)
background(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);
fill ("black")
textSize (30)
if(time>=12){
    text("Time: "+time%12+"PM",50,100)
}
else if(time==0){
    text("Time:12AM",100,100)
}
else {
    text("Time: "+time%12+"AM",50,100)
}
    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch( "http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var responseJSON=await response.json()
var dateTime=responseJSON.datetime
time=dateTime.slice(11,13)
if(time>=04&&time<=06){
bg="sunrise1.png"
}
else if(time>=06&&time<=08){
    bg="sunrise2.png"
}
else if(time>=08&&time<=11){
    bg="sunrise3.png"
}
else if(time>=11&&time<=13){
    bg="sunrise4.png"
}
else if(time>=13&&time<=15){
    bg="sunrise5.png"
}
else if(time>=15&&time<=17){
    bg="sunrise6.png"
}
else if(time>=17&&time<=18){
    bg="sunrise7.png"
}
else if(time>=18&&time<=20){
    bg="sunrise8.png"
}
else if(time>=20&&time<=23){
    bg="sunrise9.png"
}
else if(time>=23&&time==0){
    bg="sunrise10.png"
}
else if(time==0&&time<=03){
    bg="sunrise11.png"
}
else {
    bg="sunrise12.png"
}
    // write code slice the datetime
backgroundImg=loadImage(bg)

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
