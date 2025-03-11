//synchronous
console.log("task1");
console.log("task2");
console.log("task3");
//asynchronous
console.log("task1");
setTimeout(()=>console.log("task2"),1000);
console.log("task3");

