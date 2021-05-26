 const promise = new Promise((resolve, reject) => {

    
    setTimeout(() => {
        console.log("got the user");
        reject(new Error("User not logged in"));
    }, 2000);
});

promise
.then(user => {
    console.log(user);
})
.catch(err => console.log(err.message)); 

 const myPromise = new Promise((success, fail)=>{

    if(3 == 3){
        success('success')
    }else{
        fail('fail')
    }
})

/* myPromise
.then(
    ()=>{
        console.log('success');
    }
).catch(()=>{
    console.log('myPromise de problem var');
})  */

const myFunction = async () =>{
    try{
       console.log(myPromise);
    }catch(err ){
        console.log('async de bir problem var');
    }
}

myFunction()

fetch('http://127.0.0.1:5500/index.html')
.then(res => {
    console.log(res);
})