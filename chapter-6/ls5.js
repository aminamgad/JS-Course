// Handling errors in Async Await  try...catch

async function fectchData() {
  try {
    const data = await new Promise((_, reject) =>
      setTimeout(() => reject("Failed"), 2000)
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fectchData();


// 🏋️‍♂️ Exercise 5: Error Handling
// Create an async function divideNumbers that throws an error if the divisor is zero.
// Use try...catch to handle the error and log a custom error message.

async function divideNumbers(a, b) {
    if(b === 0) throw new Error("Cannot deivide by zero")
        return a / b
}

async function perform() {
    try {
        const res = await divideNumbers(10 , 0)
        console.log(res);
    } catch (error) {
        console.log("Error: ",error.message);
    }
}
perform()