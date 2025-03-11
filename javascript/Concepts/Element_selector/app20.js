//getElementById()
const myh1=document.getElementById("myh1");
myh1.style.backgroundColor="green";
myh1.style.textAlign="center";
//getElementByClassName();
const myclass=document.getElementsByClassName("fruit");
myclass[1].style.backgroundColor="green";
//Enhanced for loop
for(mc of myclass){
    mc.style.backgroundColor="red";
}
//or foEach method
Array.from(myclass).forEach(mc=>mc.style.backgroundColor="green");

//querySelector();
const qs=document.querySelector("ul");
const qs1=document.querySelector("li");
console.log(qs1);
console.log(qs);
qs1.style.backgroundColor="green";
qs.style.backgroundColor="pink";

//queryselectorAll()
const qsa=document.querySelectorAll("ul");
const qsa1=document.querySelectorAll("li");
console.log(qsa1);
console.log(qsa);
qsa1[0].style.backgroundColor="red";
qsa[1].style.backgroundColor="blue";