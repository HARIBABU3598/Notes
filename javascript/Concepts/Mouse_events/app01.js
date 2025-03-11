const mybox=document.getElementById("mybox");
const mybtn=document.getElementById("mybtn");
function overevent(event){
    mybox.style.backgroundColor="red";
    mybox.textContent="Clicked";
}
function outevent(event){
    mybox.style.backgroundColor="cadetblue";
    mybox.textContent="Click me";
}
function clickevent(event){
    mybox.textContent="clicked";
    mybox.style.backgroundColor="red";
    
}
mybox.addEventListener("mouseover",overevent);
mybox.addEventListener("mouseout",outevent);
mybox.addEventListener("click",clickevent);
