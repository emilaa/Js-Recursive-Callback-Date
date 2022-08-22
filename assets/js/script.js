// function sum(n) {
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// console.log(sum(4));

// function getFactorial(n) {
//   if (n == 1) {
//     return n;
//   } else {
//     return n + getFactorial(n - 1);
//   }
// }
// console.log(getFactorial(4));

// function getSum(n) {
//     if (n == 1) {
//       return n;
//     } else {
//       return n + getSum(n - 1);
//     }
//   }
//   console.log(getSum(4));

// let students = ["Emil", "Saadat", "Seid", "Orxan"];

// array.forEach((element, index) => {});

// for (const item of students) {
//     console.log(item);
// }

// let users = [
//   {
//     email: "emil@code.edu.az",
//     password: "12345",
//   },
//   {
//     email: "seid@code.edu.az",
//     password: "12345",
//   },
//   {
//     email: "orxan@code.edu.az",
//     password: "12345",
//   },
// ];

// for (const item of users) {
//   for (const key in item) {
//     console.log(key);
//   }
// }

// let book = {
//     name: "Xosrov",
//     author: "Nizami",
//     pageCount: 20000
// }

// for (const key in book) {
//     console.log(book[key]);
// }

// let students = ["Emil", "Saadat", "Seid", "Orxan"];

// function getStudents(t,m,...arr){
//     for (const item of arr) {
//         console.log(item);
//     }

//     console.log(t + "-t");
//     console.log(m + "-m");
// }

// getStudents("Emil", "Saadat", "Seid", "Orxan");

// function evenNum(n) {
//   return n % 2 == 0;
// }

// function oddNum(n) {
//     return n % 2 == 0;
//   }

//   function ThanThree(n) {
//     return n >= 3;
//   }

// let evenNum = n => n % 2 == 0;
// let oddNum = n => n % 2 != 0;
// let ThanThree = n => n >= 3;

// function numsByConditions(arr, callback) {
//   let sum = 0;
//   for (const item of arr) {
//     if (callback(item)) {
//       sum += item;
//     }
//   }
//   return sum;
// }

// console.log(numsByConditions([1, 2, 3, 4, 5, 6, 7], n % 2 == 0));
// console.log(numsByConditions([1, 2, 3, 4, 5, 6, 7], n => n <= 4));

// function sumOddNums(arr, callback) {
//   let sum = 0;
//   for (const item of arr) {
//     if (callback(item)) {
//       sum += item;
//     }
//   }
//   return sum;
// }

// function sumThanThree(arr, callback) {
//   let sum = 0;
//   for (const item of arr) {
//     if (callback(item)) {
//       sum += item;
//     }
//   }
//   return sum;
// }

// console.log(numsByConditions([1, 2, 3, 4, 5, 6, 7], oddNum, evenNum));

//let numbers = [2, 5, 63, 80, 4, 6, 1];

// let filteredNumbers = numbers.filter((m) => m % 2 == 1);

// function sumNumbers(arr) {
//   let sum = 0;

//   for (const item of arr) {
//     sum += item;
//   }
//   return sum;
// }

// console.log(sumNumbers(filteredNumbers));

//let numbers = [2, 5, 6, 4, 8];

// numbers.forEach((item, index) => {
//     numbers[index] = item * 2;
// });

// console.log(numbers);

// let result = numbers.map((m) => m * 100);

// console.log(result);
// console.log(numbers);

// let users = [
//   { name: "Emil", surname: "Abdullayev", age: 20 },
//   { name: "Saadat", surname: "Mursaliyeva", age: 19 },
//   { name: "Orxan", surname: "Akberov", age: 26 },
// ];

// let date = new Date();

// // console.log(date);

// let result = users.map(m =>{
//     return{
//         fullname: `${m.name} ${m.surname}`,
//         yearOfBirth: date.getFullYear() - m.age
//     }
// })

// console.log(result);