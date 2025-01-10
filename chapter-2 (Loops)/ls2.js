//Nested Loops

// for (let i = 0; i <= 3 ; i++){
//     for (let j = 0; j <= 3; j++){
//         console.log(`i = ${i} , j = ${j}`)
//     }
// }

// 🏋️‍♂️ Exercise 4: Multiplication Table
// Write a nested for loop to generate and print the multiplication table for numbers 1 to 3.

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
    //i++
}