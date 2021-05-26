//Async code example

console.log("Start");
/* setTimeout(() =>{
    console.log('We are in the timeout')
}, 2000); */

/* const items = [1,2,3,4,5];

items.forEach(item =>{
    console.log(item);
}); */

function loginUser(email, passsword, callback) {
   setTimeout(()=> {
       console.log("Now we have the data");
       callback({userEmail: email});
   }, 5000) 
}

const user = loginUser("gamze@goomail.com", 123456, user => {
    console.log(user);
});



console.log("End");