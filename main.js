right_wrist_x = 0;
left_wrist_x = 0;
difference = 0

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);
    
    canvas = createCanvas(800,400);
    canvas.position(430,130);
    
    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose', gotePoses);
    }
    
    function modelDone(){
    console.log('PoseNet is Initialized And Loaded!');
    }

    function draw(){
        background('#5193e3');
        document.getElementById("font-size").innerHTML = "font size of the text will be = "+difference+"px";
        fill("#ooffoa");
        textSize(difference);
        text('Eman,50,400');
        }
    
    function gotePoses(results,error){
      if(error){
        console.error(error);
      }
    if(results.length>0){
         console.log(results);

         right_wrist_x = results[0].pose.rightWrist.x;
         left_wrist_x = results[0].pose.leftWrist.x;

         difference = floor(left_wrist_x - right_wrist_x);

         console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwriste_y = "+results[0].pose.rightWrist.y);
         console.log("leftwrist_x = "+results[0].pose.rightWrist.x+" leftWriste_y = "+results[0].pose.leftWrist.y);
            }
    }
    
   
    
    
  