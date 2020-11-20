let player = document.getElementById("player");
let container = document.getElementById("gameContainer");
let obstacleOne = document.getElementById("obstacle");
let obstacleTwo = document.getElementById("obstacleTwo");
let obstacleThree = document.getElementById("obstacleThree");
let startScreen = document.getElementById("startScreen");
let gameOverScreen = document.getElementById("gameOver");
let audio = document.getElementById("myAudio");
let moveTop = -300;
let moveLeft = 0;
let moveObstacleLeft = -5;
let currentObstacleOnePositionX = 980;
let currentObstacleTwoPositionX = 980;
let currentObstacleThreePositionX = 980;

audio.volume = 0.5;
//  const resetVariables = () =>{
//      moveTop = -300;
//      moveLeft = 0;
//      moveObstacleLeft = -5;
//      currentObstacleOnePositionX = 980;
//      currentObstacleTwoPositionX = 980;
//      currentObstacleThreePositionX = 980;
//  }
//  const resetGame = () => {
//      console.log("im runnn")
//     resetVariables();
//     clearInterval(myTimers());
//     startScreen.setAttribute("style", "display:inline");
//     gameOverScreen.setAttribute("style", "display:none");
// }

 const startGame = () => {
startScreen.setAttribute("style","display:none")
const spawnObstacleOne = () => {
    min=Math.ceil(-610);
    max=Math.floor(-250);
    obstacleOne.setAttribute("style",`top:${Math.random() * (max - min + 1) + min}`)
}
if(currentObstacleOnePositionX = 0){spawnObstacleOne}
const spawnObstacleTwo = () => {
    min=Math.ceil(-610);
    max=Math.floor(-250);
    obstacleTwo.setAttribute("style",`top:${Math.random() * (max - min + 1) + min}`)
    
}
const spawnObstacleThree = () => {
    min=Math.ceil(-610);
    max=Math.floor(-250)
    obstacleThree.setAttribute("style",`top:${Math.random() * (max - min + 1) + min}`)
}

 const moveObstacleOne = () => {
     currentObstacleOnePositionX -= 5;
     if(currentObstacleOnePositionX > -10){
      obstacleOne.style.left = currentObstacleOnePositionX + "px";
     }else{currentObstacleOnePositionX = 980, spawnObstacleOne()}
 }
 const moveObstacleTwo = () => {
    currentObstacleTwoPositionX -= 10;
    if(currentObstacleTwoPositionX > -100){
     obstacleTwo.style.left = currentObstacleTwoPositionX + "px";
    }else{currentObstacleTwoPositionX = 980, spawnObstacleTwo()}
}
const moveObstacleThree = () => {
    currentObstacleThreePositionX -= 7;
    if(currentObstacleThreePositionX > -10){
     obstacleThree.style.left = currentObstacleThreePositionX + "px";
    }else{currentObstacleThreePositionX = 980, spawnObstacleThree()}
}
var myTimers = () => {setInterval(timers,20)}
const timers = () => {
    moveObstacleOne();
    moveObstacleTwo();
    moveObstacleThree();
// setInterval(moveObstacleOne,20);
// setInterval(moveObstacleTwo,20);
// setInterval(moveObstacleThree,20);
}
myTimers();
//PLAYER MOVEMENT

function playerMove(e){
    if(e.keyCode === 87){
        moveTop -= 40;
        player.style.top = moveTop + "px";
        if(moveTop <= -460){
            moveTop = -460;
        }
    } ;

    if(e.keyCode === 83){
        moveTop +=40
        player.style.top = moveTop + "px";
        if(moveTop >= -140){
            moveTop = -140;
        }
    };

    if(e.keyCode === 68){
        moveLeft +=20
        player.style.left = moveLeft + "px";
        if(moveLeft >= 880){
            moveLeft = 880;
        }
    };

    if(e.keyCode === 65){
        moveLeft -=20
        player.style.left = moveLeft + "px";
        if (moveLeft <=20){
            moveLeft =20;
        }
    };
};
document.addEventListener("keydown", playerMove);
const collisions = () => {
//COMMENT BACK IN TO TURN ON COLLISIONS<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let playerHitboxRect = player.getBoundingClientRect();

let obstacleOneRect = obstacleOne.getBoundingClientRect();
let obstacleTwoRect = obstacleTwo.getBoundingClientRect();
let obstacleThreeRect = obstacleThree.getBoundingClientRect();

if (playerHitboxRect.top < obstacleTwoRect.top + obstacleTwoRect.width && 
    playerHitboxRect.top + playerHitboxRect.width > obstacleTwoRect.top &&
    playerHitboxRect.left < obstacleTwoRect.left + obstacleTwoRect.height &&
    playerHitboxRect.left + playerHitboxRect.height > obstacleTwoRect.left){
       return (gameOverScreen.setAttribute("style","display:inline"));
    }
if (playerHitboxRect.top < obstacleOneRect.top + obstacleOneRect.width && 
    playerHitboxRect.top + playerHitboxRect.width > obstacleOneRect.top &&
    playerHitboxRect.left < obstacleOneRect.left + obstacleOneRect.height &&
    playerHitboxRect.left + playerHitboxRect.height > obstacleOneRect.left){
       return (gameOverScreen.setAttribute("style","display:inline"));
    }
if (playerHitboxRect.top < obstacleThreeRect.top + obstacleThreeRect.width && 
    playerHitboxRect.top + playerHitboxRect.width > obstacleThreeRect.top &&
    playerHitboxRect.left < obstacleThreeRect.left + obstacleThreeRect.height &&
    playerHitboxRect.left + playerHitboxRect.height > obstacleThreeRect.left){
       return (gameOverScreen.setAttribute("style","display:inline"));
    }
};
// if (collision === true){console.log("ded");}
// if(gameOverScreen.style.display = "inline"){console.log("hello")}
setInterval(collisions,100);
// (gameOverScreen.setAttribute("style","display:inline"), clearInterval(myTimers));
 }





