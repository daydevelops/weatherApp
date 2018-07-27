var somePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //resolve('it worked');
        reject('unable to fufill promise');
    },1000);
});

somePromise.then((msg) => {
    console.log(msg);
}, (error) => {
    console.log(error);
})
