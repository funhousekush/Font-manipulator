leftwristX = 0;
rightwristX = 0;
difference = 0;

function preload(){}

function setup() 
{
    video = createCapture(VIDEO);
    video.size(560, 500);

    canvas = createCanvas(560, 400);
    canvas.position(600, 140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotFixed);
}

function draw() 
{
    background("#ff0000");

    textSize(difference);
    fill("#FFE787");
    text("Peter", 50, 400);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotFixed(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = ceil(leftwristX - rightwristX);
    }
}