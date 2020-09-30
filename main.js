let player = document.getElementById("player");
let container = document.getElementById("gameContainer");

let moveTop = -230;
let moveLeft = 0;

function playerMove(e){
    if(e.keyCode == 87){
        //alert(e.keyCode);
        moveTop -= 40;
        player.style.top = moveTop + "px";
        if(moveTop <= -460){
            moveTop = -460;
        }
    } ;

    if(e.keyCode == 83){
        moveTop +=40
        player.style.top = moveTop + "px";
        if(moveTop >= -140){
            moveTop = -140;
        }
    };

    if(e.keyCode == 68){
        moveLeft +=20
        player.style.left = moveLeft + "px";
        if(moveLeft >= 880){
            moveLeft = 880;
        }
    };

    if(e.keyCode == 65){
        moveLeft -=20
        player.style.left = moveLeft + "px";
        if (moveLeft <=20){
            moveLeft =20;
        }
    };
};
document.addEventListener("keydown", playerMove);

//player.addEventListener("keypress",logKey(e));
//if (e.defaultPrevented) {
//    return;
//}
//switch(e.code){
//    case "KeyS":
//        player.style.top = ++100;
//        break;
//    
//};
//
//
//
//
//
//let moveRate = 10;


