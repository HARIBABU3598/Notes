console.log("task1");
try{
console.lo("task2");}
catch{
    console.log("error catched")
}
console.log("task completed");
//prompt dividing
try{
const divident=Number(window.prompt("Enter number: "));
const divisor=Number(window.prompt("Enter divisor: "));
if(divisor==0){
    throw new Error("divisor must be greater than 0");
}
if(isNaN(divident)||isNaN(divisor)){
    throw new Error("divident must be number");
}
const result =divident/divisor;
console.log(result);
}catch(e){
    console.error("error");
}
console.log("completed");
