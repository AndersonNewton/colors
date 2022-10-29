function preload(){



}

function setup(){

canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
tint_color = "";

}

function draw(){

    image(video, 100,100, 300,300);
    fill("red");
    circle(100, 100, 50);
    fill("green");
    circle(400, 400, 50);
    fill("blue");
    circle(100, 400, 50);
    fill("yellow");
    circle(400, 100, 50);
   
}

function take_snapshot(){

    save("pic.png");

}


