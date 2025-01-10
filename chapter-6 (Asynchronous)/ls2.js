// Promises

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise success")
   }, 2000 )
})

myPromise
.then((result) => console.log(result))
.catch((err) => console.log(err))

// 🏋️‍♂️ Exercise 2: Promise for Calculation
// Create a function calculate that returns a promise.
// After 1 second, resolve the promise with a calculated value (e.g., 10 + 20).

function calc() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10 + 20)
        }, 1000)
    })
}

calc().then((result) => console.log(result))