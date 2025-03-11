setTimeout(()=>console.log("Thalapathy vijay"),1500);
//to clear timeout
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(()=>console.log("Thalapathy vijay"),2000);
}
function stopTimer(){
    clearTimeout(timeoutId);
    console.log("cleared");
}
startTimer();
stopTimer();