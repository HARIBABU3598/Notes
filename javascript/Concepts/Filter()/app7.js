//filter necessary elements
var num=[1,2,3,4,5,6,7,8,9,10];
var filterArray=num.filter(even);
function even(elements){
    return elements%2===0;
}
console.log(filterArray);
