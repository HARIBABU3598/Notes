let submit=document.getElementById("submit");
submit.addEventListener("click",fetchdata);
async function fetchdata() {
    try{
    let user_name=document.getElementById("user_name").value;
    let response=await fetch(`https://jsonplaceholder.typicode.com/users?name=${user_name}`);
    console.log(response);
    if(!response.ok)
    {
        throw new Error("HTTP Error!!! bhaaaa");
    }
    let data =await response.json();
    console.log(data);
    var info=document.getElementById("info");
    info.textContent=`user info 
                    Name : ${data[0].name}
                    Email: ${data[0].website}
                    Phone: ${data[0].phone}`;
}
catch(error)
{
    console.log(error);
    info.textContent="enter the correct user Name";
};
}