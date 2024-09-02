let userEmail = prompt ("Enter your name")
let userpass = prompt ("Enter your Pasword ")
  
const userArray = [
    {
        username : "Tanveer sohail ",
        userEmail : "tanveer@gmail.com",
        userpass : "tanve123"
    },{
        username : "Waqar noor ",
        userEmail : "waqar@gmail.com",
        userpass : "waqar123"
    },{
        username : "Rashid Malik ",
        userEmail : "rashid@gmail.com",
        userpass : "rashid123"
    },{
        username : "Rahber hayat ",
        userEmail : "waqas@gmail.com",
        userpass : "rahber123"
    }
];

let isUserFound = true;

   for(let i = 0; i < userArray.length; i++) {
    
    if(userEmail == userArray[i].userEmail && userpass == userArray[i].userpass)
    {
       
        console.log("Your Account is found")
        document.write(`welcome ${userArray[i].username}`)
        break;  
    
 }
else
    {
        isUserFound = false
    }   
}
if(!isUserFound)
{
    console.warn("Your Account Is Not found")
}
    


