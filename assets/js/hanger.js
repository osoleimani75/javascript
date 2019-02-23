// reference to HTML cancas
    var canvas = document.getElementById("canvas");
//set drawing surface
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;



    var hanger = canvas.getContext("2d");
    var shanger = canvas.getContext("2d");
    var bhanger = canvas.getContext("2d");
    var hhanger = canvas.getContext("2d");
    hanger.lineWidth = 5;
    hanger.strokeStyle = "#555";
    hanger.strokeRect(30,450,340,3);
 
    hanger.beginPath();
    hanger.moveTo(350, 40);
    hanger.lineTo(50,40);
    hanger.lineTo(50,450);
    hanger.lineTo(90,450);
    hanger.lineTo(90,70);
    hanger.lineTo(350,70);
    hanger.lineTo(350,38);
    hanger.stroke();

    var fillRect = true;
    hanger.beginPath();
    hanger.moveTo(156,33);
    hanger.lineTo(30,150);
    hanger.lineTo(50,180);
    hanger.lineTo(175,60);
    hanger.lineTo(151,34);
    hanger.lineWidth = 9;    

    if (fillRect) {hanger.fill();}
    hanger.stroke();

    hanger.fillStyle='#fff';
    hanger.fill();        
    hanger.lineWidth = 3;    
    hanger.beginPath();
    hanger.fillStyle='#555';
    hanger.arc(152,59,7,0,Math.PI * 2);
    hanger.fill();    
    hanger.arc(62,145,7,0,Math.PI * 2);
    hanger.fill();
    hanger.closePath();    


    function happyHead(){
    hhanger.beginPath();
    hhanger.lineWidth = 5;    
    hanger.strokeStyle='#555';
    hhanger.moveTo(250,100);
    hhanger.lineTo(250,67);
    hhanger.stroke();
    hhanger.closePath();    
    hhanger.lineWidth = 4;    
    hhanger.beginPath();
    hhanger.arc   (250, 140, 40, 0, Math.PI * 2, true); // Outer circle
    hhanger.moveTo(275, 145);
    hhanger.arc   (250, 145, 25, 0, Math.PI, false);  // Mouth (clockwise)
    hhanger.moveTo(238, 130);
    hhanger.arc   (233, 130, 5, 0, Math.PI * 2, true);  // Left eye
    hhanger.moveTo(275, 130);
    hhanger.arc   (270, 130, 5, 0, Math.PI * 2, true);  // Right eye
    hhanger.stroke();
    hhanger.closePath();   

}    
    
function sadHead(){
    shanger.beginPath();
    shanger.lineWidth = 5;    
    hanger.strokeStyle='#555';
    shanger.moveTo(250,100);
    shanger.lineTo(250,67);
    shanger.stroke();
    shanger.closePath();    
    shanger.lineWidth = 6;    
    shanger.beginPath();
    shanger.arc   (250, 140, 40, 0, Math.PI * 2, true); // Outer circle
    shanger.moveTo(272, 158);
    shanger.arc   (247, 183, 35, Math.PI * 1.7, Math.PI * 1.3, true);  // Mouth 
    shanger.moveTo(238, 130);
    shanger.arc   (233, 130, 5, 0, Math.PI * 2, true);  // Left eye
    shanger.moveTo(275, 130);
    shanger.arc   (270, 130, 5, 0, Math.PI * 2, true);  // Right eye
    shanger.stroke();
}    

function neck(){
    bhanger.lineWidth = 9;    
    bhanger.beginPath();
    bhanger.moveTo(250,178);
    bhanger.lineTo(250,208);
    bhanger.stroke();
    bhanger.closePath();    
}
function rightHand(){
    bhanger.lineWidth = 9;    
    bhanger.beginPath();
    bhanger.moveTo(250,208);
    bhanger.lineTo(200,260);
    bhanger.stroke();
    bhanger.closePath();    
}
function leftHand(){
    bhanger.lineWidth = 9;    
    bhanger.beginPath();
    bhanger.moveTo(250,208);
    bhanger.lineTo(300,260);
    bhanger.stroke();
    bhanger.closePath();    
}
function bodyMan(){
    bhanger.lineWidth = 9;    
    bhanger.beginPath();
    bhanger.moveTo(250,208);
    bhanger.lineTo(250,320);
    bhanger.stroke();
    bhanger.closePath();    
}

function rightFeet(){
    bhanger.lineWidth = 9;    
    bhanger.beginPath();
    bhanger.moveTo(250,320);
    bhanger.lineTo(200,380);
    bhanger.stroke();
    bhanger.closePath();   
    hhanger.clearRect(200,98, 140, 84);
    sadHead(); 

}
function leftFeet(){
    bhanger.lineWidth = 9;    
    bhanger.beginPath();
    bhanger.moveTo(250,320);
    bhanger.lineTo(300,380);
    bhanger.stroke();
    bhanger.closePath();    
}

function hangman(num){
    switch(num) {
        case 6:
            happyHead();
          break;
          case 5:
            neck();
            rightHand();
          break;
          case 4:
            leftHand();
          break;
          case 3:
            bodyMan();
          break;
          case 2:
            rightFeet();
          break;
          case 1:
              leftFeet();
          break;
          case 0:
            hhanger.clearRect(200,73, 340, 350);
            shanger.clearRect(200,98, 40, 84);

            break;
        default:{
        }
        // code block
      }    
}