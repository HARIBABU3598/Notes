//extract elements from array and object and store in different variable
//from array
const color=["red", "green", "blue"];
const [color1, color2,color3] =color;
console.log(color1);
//from object
const person={
    name:"thalapathy",
    age:"50"
}
const {name,age}=person;
console.log(name);
//swap variables
var x=10;
var y=20;
[x,y]=[y,x];
console.log(x);
//swap arrays
const arr1=["amma","appa"];
[arr1[0],arr1[1]]=[arr1[1],arr1[0]];
console.log(arr1);

