//selection = ["otherside.mp3", "revvv.mp3", "strad.mp3" ];
/*song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;




function preload()
{
   song = loadSound(rev.mp3);

}
function setup()
{
  canvas = createCanvas(600,500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("on pose mode");
}



function gotPoses(results)
{
    if(results.length > 0)
    {
         console.log(results);
         leftWristX = results[0].pose.leftWrist.x;
         leftWristY = results[0].pose.leftWrist.y;
         console.log("leftwirist X= " +  leftWristX + "leftwirist Y = " +  leftWristY);

         rightWristX = results[0].pose.rightWrist.x;
         rightWristY = results[0].pose.rightWrist.y;
         console.log("rightwirist X= " + rightWristX + "rightwirist Y = " +  rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function selectre()
{

    
    rn = Math.floor(Math.random()*2);
    console.log(rn);
    song = loadSound(selection[rn]);
}

function play()
{
    song.play;
    song.setVolume(1);
    song.rate(1);
    //selectre();
}*/
selection = ["otherside.mp3", "revvv.mp3", "strad.mp3" ];
song = "";
random_number = Math.floor(Math.random() * 3);
console.log(random_number);

function preload()
{
	song = loadSound(selection[random_number]);
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw() {
	image(video, 0, 0, 600, 500);
}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}