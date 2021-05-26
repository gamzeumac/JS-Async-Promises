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
   }, 3000) 
}

function getuserVideos(email, callback) {
 setTimeout(() => {
     callback(["video1", "video2", "video3"])
 }, 2000)    
}

function videoDetails(video, callback) {
    setTimeout(() => {
        callback("title of the video")
    }, 2000);
   }

const user = loginUser("gamze@goomail.com", 123456, user => {
    console.log(user);
    getuserVideos(user.userEmail, videos => {
        console.log(videos);
        videoDetails(videos[0], title =>{
            console.log(title);
        });
    });
});



console.log("End");