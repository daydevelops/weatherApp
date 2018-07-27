console.log('starting async.js');
setTimeout(function() {
    console.log('timeout reached');
},1000)

setTimeout(function() {
    console.log('second timeout');
},0)






console.log('finishing async.js');
