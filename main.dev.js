"use strict";

var player = document.getElementById("player");
var container = document.getElementById("gameContainer");
var obstacleOne = document.getElementById("obstacle");
var obstacleTwo = document.getElementById("obstacleTwo");
var obstacleThree = document.getElementById("obstacleThree");
var startScreen = document.getElementById("startScreen");
var gameOverScreen = document.getElementById("gameOver");
var audio = document.getElementById("myAudio");
var moveTop = -300;
var moveLeft = 0;
var moveObstacleLeft = -5;
var currentObstacleOnePositionX = 980;
var currentObstacleTwoPositionX = 980;
var currentObstacleThreePositionX = 980;
audio.volume = 0.5; //  const resetVariables = () =>{
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

var startGame = function startGame() {
  startScreen.setAttribute("style", "display:none");

  var spawnObstacleOne = function spawnObstacleOne() {
    min = Math.ceil(-610);
    max = Math.floor(-250);
    obstacleOne.setAttribute("style", "top:".concat(Math.random() * (max - min + 1) + min));
  };

  if (currentObstacleOnePositionX = 0) {
    spawnObstacleOne;
  }

  var spawnObstacleTwo = function spawnObstacleTwo() {
    min = Math.ceil(-610);
    max = Math.floor(-250);
    obstacleTwo.setAttribute("style", "top:".concat(Math.random() * (max - min + 1) + min));
  };

  var spawnObstacleThree = function spawnObstacleThree() {
    min = Math.ceil(-610);
    max = Math.floor(-250);
    obstacleThree.setAttribute("style", "top:".concat(Math.random() * (max - min + 1) + min));
  };

  var moveObstacleOne = function moveObstacleOne() {
    currentObstacleOnePositionX -= 5;

    if (currentObstacleOnePositionX > -10) {
      obstacleOne.style.left = currentObstacleOnePositionX + "px";
    } else {
      currentObstacleOnePositionX = 980, spawnObstacleOne();
    }
  };

  var moveObstacleTwo = function moveObstacleTwo() {
    currentObstacleTwoPositionX -= 10;

    if (currentObstacleTwoPositionX > -100) {
      obstacleTwo.style.left = currentObstacleTwoPositionX + "px";
    } else {
      currentObstacleTwoPositionX = 980, spawnObstacleTwo();
    }
  };

  var moveObstacleThree = function moveObstacleThree() {
    currentObstacleThreePositionX -= 7;

    if (currentObstacleThreePositionX > -10) {
      obstacleThree.style.left = currentObstacleThreePositionX + "px";
    } else {
      currentObstacleThreePositionX = 980, spawnObstacleThree();
    }
  };

  var myTimers = function myTimers() {
    setInterval(timers, 20);
  };

  var timers = function timers() {
    moveObstacleOne();
    moveObstacleTwo();
    moveObstacleThree(); // setInterval(moveObstacleOne,20);
    // setInterval(moveObstacleTwo,20);
    // setInterval(moveObstacleThree,20);
  };

  myTimers(); //PLAYER MOVEMENT

  function playerMove(e) {
    if (e.keyCode === 87) {
      moveTop -= 40;
      player.style.top = moveTop + "px";

      if (moveTop <= -460) {
        moveTop = -460;
      }
    }

    ;

    if (e.keyCode === 83) {
      moveTop += 40;
      player.style.top = moveTop + "px";

      if (moveTop >= -140) {
        moveTop = -140;
      }
    }

    ;

    if (e.keyCode === 68) {
      moveLeft += 20;
      player.style.left = moveLeft + "px";

      if (moveLeft >= 880) {
        moveLeft = 880;
      }
    }

    ;

    if (e.keyCode === 65) {
      moveLeft -= 20;
      player.style.left = moveLeft + "px";

      if (moveLeft <= 20) {
        moveLeft = 20;
      }
    }

    ;
  }

  ;
  document.addEventListener("keydown", playerMove);

  var collisions = function collisions() {
    //COMMENT BACK IN TO TURN ON COLLISIONS<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    var playerHitboxRect = player.getBoundingClientRect();
    var obstacleOneRect = obstacleOne.getBoundingClientRect();
    var obstacleTwoRect = obstacleTwo.getBoundingClientRect();
    var obstacleThreeRect = obstacleThree.getBoundingClientRect();

    if (playerHitboxRect.top < obstacleTwoRect.top + obstacleTwoRect.width && playerHitboxRect.top + playerHitboxRect.width > obstacleTwoRect.top && playerHitboxRect.left < obstacleTwoRect.left + obstacleTwoRect.height && playerHitboxRect.left + playerHitboxRect.height > obstacleTwoRect.left) {
      return gameOverScreen.setAttribute("style", "display:inline");
    }

    if (playerHitboxRect.top < obstacleOneRect.top + obstacleOneRect.width && playerHitboxRect.top + playerHitboxRect.width > obstacleOneRect.top && playerHitboxRect.left < obstacleOneRect.left + obstacleOneRect.height && playerHitboxRect.left + playerHitboxRect.height > obstacleOneRect.left) {
      return gameOverScreen.setAttribute("style", "display:inline");
    }

    if (playerHitboxRect.top < obstacleThreeRect.top + obstacleThreeRect.width && playerHitboxRect.top + playerHitboxRect.width > obstacleThreeRect.top && playerHitboxRect.left < obstacleThreeRect.left + obstacleThreeRect.height && playerHitboxRect.left + playerHitboxRect.height > obstacleThreeRect.left) {
      return gameOverScreen.setAttribute("style", "display:inline");
    }
  }; // if (collision === true){console.log("ded");}
  // if(gameOverScreen.style.display = "inline"){console.log("hello")}


  setInterval(collisions, 100); // (gameOverScreen.setAttribute("style","display:inline"), clearInterval(myTimers));
};