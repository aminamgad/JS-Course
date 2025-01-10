//Loops

//1. for loop  i++ = i = i + 1

// for (let i = 0; i < 10; i++){
//     console.log(`Hello world - ${i}`)  // "double quotes"   'single quotes'  `backticks`
// }

// 2. while loop
// let count = 0;
// while(count < 3){
//     console.log("Count is " , count)
//     count++ // count = count + 1
// }

//3. do while loop

// do{
//     console.log("Hello")
// }while(count > 90)

// let num = 0;
// do {
//     console.log("Num is"+ " " + num)
//     num++
// }while(num < 2)

    
// 🏋️‍♂️ Exercise 1: Print Even Numbers
// Write a for loop that prints all even numbers from 0 to 10.

// for(let i = 0; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// 🏋️‍♂️ Exercise 2: Countdown with while Loop
// Write a while loop that starts at 5 and counts down to 1, printing each number. After the loop, print "Blast off!".
// let count = 5;

// while(count > 0){
//     console.log(count)
//     count-- // count = count - 1
// }

// console.log("Blast off!")

// 🏋️‍♂️ Exercise 3: Sum of Numbers with do...while Loop
// Write a do...while loop that sums numbers from 1 to 5 and prints the result.

let num = 1;
let sum = 0;

do{
    sum = sum + num;//15
    num++;//6
}while(num <= 5)

    console.log(sum)