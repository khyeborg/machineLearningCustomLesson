let video;

let noseX =0;
let noseY =0;

let eyeR_X= 0;
let eyeR_Y= 0;
let eyeL_X= 0;
let eyeL_Y= 0;

function setup(){ // occurs once
    createCanvas(windowWidth, windowHeight); // make our canvas fullscreen
    video = createCapture(VIDEO); // camera is inverted
    video.hide(); // we want the video to be on the canvas so lets hide it

    // introduce tensor flow (machine learning)
    // reference: https://ml5js.org/

    // Create a new poseNet method
    const poseNet = ml5.poseNet(video, modelLoaded); //modelloaded is our callback function
    
    // Listen to new 'pose' events (event listener) and then uses gotPoses as callback function
    poseNet.on('pose', gotPoses); // 
    
}   

// When the model is loaded
function modelLoaded() {
    console.log('Model Loaded!');
}



function gotPoses(poses){
    //console.log(poses); // an object of keypoints points;

    //Reference for keypoints :https://www.tensorflow.org/lite/models/pose_estimation/overview
    if (poses.length >0){
    noseX = poses[0].pose.keypoints[0].position.x;
    noseY = poses[0].pose.keypoints[0].position.y;
    eyeR_X = poses[0].pose.keypoints[2].position.x;
    eyeR_Y = poses[0].pose.keypoints[2].position.y;
    eyeL_X = poses[0].pose.keypoints[1].position.x;
    eyeL_Y = poses[0].pose.keypoints[1].position.y;
    //console.log(poses[0].pose.keypoints[0].position.y);
    }

}

function draw(){ // infinite loop
    background(220);
    image(video,0,0); // draw our video on the corner
    //filter(GRAY); // adds filters to our image

    // draw p5 shapes using coordinates
    fill("blue");
    ellipse(noseX,noseY,50);

    fill("Green");
    ellipse(eyeL_X,eyeL_Y,30,20);

    fill("Green");
    ellipse(eyeR_X,eyeR_Y,30,20);

}
