// Looping Throught Objects

const book = {
  title: "Js Course",
  author: "Amin Amgad",
  year: 2024,
};

// for ... in

for (let key in book) {
  console.log(`${key} :${book[key]} `);
}

// 🏋️‍♂️ Exercise 4: Loop Through an Object
// Create an object called student with properties name, age, and grade.
// Use a for...in loop to print each key and its value.

const student = {
  name: "Loai",
  age: 22,
  grade: "A",
};

for (let key in student) {
  console.log(`${key} : ${student[key]}`);
}
