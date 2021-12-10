status="";

function preload()
{
  
   
    
}

function setup()
{
    canvas=createCanvas(450, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function draw()
{
image(video, 0, 0, 450, 350);

}

function start()
{
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    value=document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("model is loaded");
    status="true";
}