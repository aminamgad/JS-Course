// Callbacks

function fechtData(callback) {
    console.log("Pending")
    setTimeout(() => {
        callback("data received")
    }, 3000)
}

function handleData(data) {
    console.log(data)
}

fechtData(handleData);

// 🏋️‍♂️ Exercise 1: Delayed Message with Callback
// Create a function showMessage that takes a message and a callback.
// Use setTimeout to simulate a 1-second delay, then call the callback with the message.

function showMessage(message, callback){
    setTimeout(() => {
        callback(message)
    }, 1000)
}

showMessage("Hello" , console.log)