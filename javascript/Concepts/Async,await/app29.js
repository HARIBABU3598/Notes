function Serve(){
    setTimeout(()=>console.log("Task1 completed"),2000);
}
function Receive(){
    setTimeout(()=>console.log("Task2 completed"),1000);
}
function Smash(){
    setTimeout(()=>console.log("Task3 completed"),1500);
}
async function Dojob(){
    try{
    const Serveresult= await Serve();
    console.log(Serveresult);
    const receiveresult= await Receive();
    console.log(receiveresult);
    const smashresult= await Smash();
    console.log(smashresult);}
    catch(e){
        console.error(error);
    }
}
Dojob();