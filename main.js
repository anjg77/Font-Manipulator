noseX=0;
noseY=0;
difference=0;
rightwristx=0;
leftwristx=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(570,150);
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('poseNet is iniatilised');
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = "+noseX + "Nose Y = "+noseY);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("Left Wrist x = "+leftwristx+"Right Wrist x = "+rightwristx+"Difference = "+difference);
    }
}
function draw()
{
    background('#CBC3E3');
    document.getElementById("font_size").innerHTML="Font size of the text = "+difference+"px";
    fill("red");
    stroke("red");
    text('Activity',50,400);
    textSize(difference);
}