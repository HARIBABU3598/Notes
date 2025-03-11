const myh1=document.getElementById("myh1");
function keydown(event){
    myh1.style.backgroundColor="red";
    myh1.textContent="Clicked";
    console.log(event.key);
    
}
function keyup(event){
    myh1.style.backgroundColor="aqua";
    myh1.textContent="Click me";
    console.log(event.key);
    
}

document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
var x=0;
var y=0;
var moveamount=10;
function move(event){
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y-=moveamount;
                break;
                case "ArrowDown":
                    y+=moveamount;
                    break;
                    case "ArrowLeft":
                        x-=moveamount;
                        break;
                        case "ArrowRight":
                            x+=moveamount;
                            break;
        }
        myh1.style.top=`${y}px`;
        myh1.style.left=`${x}px`;   
    }
}
document.addEventListener("keydown",move);