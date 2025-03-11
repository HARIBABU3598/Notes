var num=[1,2,3,4,5];
var total=num.reduce(function(acc,elements){
    return acc+elements;
});
console.log(total);
