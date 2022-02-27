canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
color= "black";
width= 2.5;
radius= 2.5;

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke()
var mouseevent="";
var X,Y;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color= "black";
width= 2.5;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(){
    width= document.getElementById("2");
    color= document.getElementById("1");
    radius= document.getElementById("3");
mouseevent="mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(){
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    Xnow=e.clientX-canvas.offsetLeft;
    Ynow=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
    
    ctx.beginPath();
    ctx.strokeStyle=1;
    ctx.lineWidth=2;
    ctx.radius= 3

    console.log("last position of x ="+X+"last position of y ="+Y);
    ctx.moveTo(X,Y);

    console.log("current position of x ="+Xnow+"current position of y"+Ynow);
    ctx.lineTo(Xnow, Ynow);
    ctx.stroke();
    }
    X=Xnow;
    Y=Ynow;
}