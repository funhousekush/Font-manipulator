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
    }
}