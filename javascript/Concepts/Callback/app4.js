function add(mul){
    let x=10;
    let y=20;
    let total1=x+y;
    mul(total1,x,y);
}
function mul(total1){
    let x=10;
    let y=20;
    let total2=x*y;
    display(total1,total2);
}
function display(adding,multiplying){
    console.log(`Add : ${adding}`);
    console.log(`Multiply : ${multiplying}`);
}
add(mul,display);