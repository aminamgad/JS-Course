// Async Await

 async function fetchData() {
    const data = await  new Promise((resolve) => setTimeout(() => resolve("data is success"),2000));
    console.log(data)
}

fetchData()

// 🏋️‍♂️ Exercise 4: Using Async/Await
// Create a function multiplyNumbers that returns a promise to multiply two numbers after 1 second.
// Use async and await to call multiplyNumbers twice and log the result.

function multiplyNumbers(a, b) {
    return new Promise((res) => {
        setTimeout(() => {
            res(a * b)
        }, 1000)
    })
}


async function calc() {
    const res1 =await multiplyNumbers(2, 3) // 6
    const res2 =await multiplyNumbers(res1, 4) 
    console.log(res2);
}

calc()