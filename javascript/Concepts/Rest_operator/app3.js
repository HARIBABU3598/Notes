//bundling the elements in an array
var name1="Thalapathy";
var name2="vijay";
function Fullname(...rest){
    console.log(rest);
}
Fullname(name1,name2);
//adding the elements
function add(...rest){
    let result=0;
    for(let rs of rest){
          result+=rs;
    }
    return result;
}
var total=add(1,2,3,4);
console.log(total);
