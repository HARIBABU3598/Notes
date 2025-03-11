const person={name:"hari",age:21,gender:"Male"};
const jsonstring=JSON.stringify(person);
console.log(person);
console.log(jsonstring);
const person2='["hari",21,"Male"]';
const parsedstring=JSON.parse(person2);
console.log(person2);
console.log(parsedstring);


