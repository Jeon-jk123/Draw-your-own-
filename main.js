Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
var mouseevent="empty";
var last_position_of_x,last_position_of_y;
var color="purple";
var width=1;

Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
color=document.getElementById("color").value;
width=document.getElementById("width").value;

    mouseevent="mousedown";
}

Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
     current_position_of_mouse_x= e.clientX - Canvas.offsetLeft;
     current_position_of_mouse_y= e.clientY - Canvas.offsetTop;
if   (mouseevent=="mousedown"){

    ctx.beginPath();
    ctx.lineWidth=width;
    ctx.strokeStyle=color;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,40,0,2*Math.PI);

    ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;

}

function clean() {
    ctx.clearRect(0,0,Canvas.width,Canvas.height);
}