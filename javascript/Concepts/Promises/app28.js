//promise to return the value
function RemoveClothes()
    {
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        const removed=true;
        if(removed){
            resolve("task1 completed");
        }
        else{
            reject("not");
        }
    },2000);})
    }
function Bathing()
    {
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        const bathed=true;
        if(bathed){
            resolve("task2 completed");
        }
        else{
            reject("not");
        }},1000);})
    }
function WearClothes()
    {
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        const removed=true;
        if(removed){
            resolve("task3 completed");
        }
        else{
            reject("not");
        }
    },1500);})
    }
RemoveClothes().then((value)=>{console.log(value);return Bathing();})
               .then((value)=>{console.log(value);return WearClothes();})
               .then((value)=>{console.log(value);console.log("all completed");})
               .catch(error=>console.error(error));
               