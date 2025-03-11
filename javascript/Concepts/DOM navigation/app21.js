//firstelementchild
const element1=document.getElementById("fruits");
const firstchild=element1.firstElementChild;
firstchild.style.backgroundColor="grey";
//lastelementchild
const element2=document.getElementById("fruits");
const lastchild=element2.lastElementChild;
lastchild.style.backgroundColor="grey";
//nextelementsibling
const element3=document.getElementById("fruits");
const nextsib=element3.nextElementSibling;
nextsib.style.backgroundColor="grey";
//previouselementsibling
const element4=document.getElementById("veggies");
const prevsib=element4.previousElementSibling;
prevsib.style.backgroundColor="grey";
//parentelement
const element5=document.getElementById("veggies");
const parele=element5.parentElement;
parele.style.backgroundColor="blue";
//children
const element6=document.getElementById("veggies");
const child=element6.children;
child.style.backgroundColor="purple";