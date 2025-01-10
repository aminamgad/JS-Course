// Chaining Promises

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() =>  resolve("step 1"), 1000)
    })
}

fetchData()
.then((res) => {
    console.log(res);
    return "step 2"
})
.then((res) => {
    console.log(res);
    return "step 3"
})
.then((res) => {
    console.log(res);
})

// 🏋️‍♂️ Exercise 3: Chain Promises for Math Operations
// Create a function addNumbers that returns a promise to add two numbers after 1 second.
// Chain .then() calls to add three different numbers, one after the other

function addNumbers(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

addNumbers(5, 10)
.then((res) => {
    console.log(res); // 15 
    return addNumbers(res, 20)
})
.then((res) => {
    console.log(res); // 35 
    return addNumbers(res, 30)
})
.then((res) => {
    console.log(res); // 65 
})
