//Async code example

console.log("Start");
/* setTimeout(() =>{
    console.log('We are in the timeout')
}, 2000); */

/* const items = [1,2,3,4,5];

items.forEach(item =>{
    console.log(item);
}); */

function loginUser(email, passsword) {
    return new Promise((resolve,reject) => {
    setTimeout(()=> {
       console.log("Now we have the data");
       resolve({userEmail: email});
   }, 3000); 
    })
   
}

function getuserVideos(email) {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
     resolve(["video1", "video2", "video3"])
    }, 2000);  
    })  
}

function videoDetails(video) {
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        resolve("title of the video")
    }, 2000); 
    })
    
   }

/* const user = loginUser("gamze@goomail.com", 123456, user => {
    console.log(user);
    getuserVideos(user.userEmail, videos => {
        console.log(videos);
        videoDetails(videos[0], title =>{
            console.log(title);
        });
    });
}); */

/* loginUser('gamze', 'bumba')
.then(user => getuserVideos(user.email))
.then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail)); */

// //SYNC
async function displayUser() {
    try{    
        const loggedUser = await loginUser("gamze", "12345");
    const videos = await getuserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);}
    catch(err){
        console.log("sorun var");
    }

}
displayUser();




console.log("End");