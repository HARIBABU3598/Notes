//create element
const myh1=document.createElement('h1');
//add attributes
myh1.textContent="Thalapathy";
myh1.Id="myh1";
myh1.style.color="black";
myh1.style.textAlign="center";
//append elements to body
document.body.append(myh1);
myh1.Id="newh1";
console.log(myh1);
const box2=document.getElementById("box2");
document.body.insertBefore(myh1,box2);
//remove the elements
document.body.removeChild(myh1);

