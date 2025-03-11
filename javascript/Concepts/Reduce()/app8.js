//reduce into single element
var num=[1,2,3,4,5];
var reducearray=num.reduce(total);
console.log(reducearray);
function total(acc,elements){
    return elements+acc;
}
//get max
var maxarray=num.reduce(max);
console.log(maxarray);
function max(acc,elements){
    return Math.max(acc,elements);
}