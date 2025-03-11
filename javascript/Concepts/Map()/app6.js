//operation to each element and return in new array
var array=[1,2,3,4,5];
var newarray=array.map(square);
function square(elements){
    return elements*2;
}
console.log(newarray);
