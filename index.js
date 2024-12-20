document.write(`Exercise 17 to 20 <br/><br/>`);

// Question no. 01
// Solution

// let multiArray = [
//     [1, 2, 3, 4],
//     ["Hasnain", "Raza"],
//     [true, false]
// ];
// console.log(multiArray);

// Question no. 02
// Solution

// let array = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log(array);

// for (i = 0; i < array.length; i++) {
//     document.write(`${array[i]}<br/>`);
// }

// Question no. 03
// Solution

// for (i = 1; i <= 10; i++) {
//     document.write(`${i}<br/>`);
// }

// Question no. 04
// Solution

// let tableNumber = +prompt("Which number of table you want to print?");
// let tableLength = +prompt("Enter length of table.\nHow much long you want to print the table?");

// for (i = 1; i <= tableLength; i++) {
//     document.write(`${tableNumber} x ${i} = ${tableNumber * i}<br/>`);
// }

// Question no. 05
// Solution

// let fruits = ["apple", "bnana", "mango", "orange", "strawberry"];

// for (i = 0; i < fruits.length; i++) {
//     document.write(`${fruits[i]}<br/>`);
// }

// for (i = 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is ${fruits[i]}<br/>`);
// }

// Question no. 06
// Solution

// Counting

// document.write(`Counting <br/>`);

// for (i = 1; i <= 15; i++) {
//     document.write(`${i},`);
// }

// document.write(`<br/> Reverse Counting <br/>`);

// Reverse Counting

// for (i = 10; i >= 1; i--) {
//     document.write(`${i},`);
// }

// Even Numbers

// document.write(`<br/> Even Numbers <br/>`);

// for (i = 0; i <= 10; i++) {
//     document.write(`${2*i},`);
// }

// Odd Numbers

// document.write(`<br/> Odd Numbers <br/>`);

// for (i = 0; i < 10; i++) {
//     document.write(`${(2*i)+1},`);
// }

// Series

// document.write(`<br/> Series <br/>`);

// for (i = 1; i <= 10; i++) {
//     document.write(`${2*i}k,`);
// }

// Question no. 07
// Solution

// document.write("Question no. 07<br/>");

// let array = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userSearch = prompt("Enter name to search");
// let check = false;

// for (i = 0; i < array.length; i++) {
//     if (userSearch.toLowerCase() == array[i]) {
//         check = true;
//         document.write(`${userSearch.toLowerCase()} is available at index ${i} in our bakery.`);
//     }
// }
// if (check == false) {
//     document.write("Not available");
// }

// Question no. 08
// Solution

// document.write("Question no. 08 <br/>");

// let numbers = [24, 53, 78, 91, 12];
// let largestNumber = numbers[0];

// document.write(`Array items : ${numbers}<br/>`);

// for (i = 0; i < numbers.length; i++) {
//     if (largestNumber < numbers[i]) {
//         largestNumber = numbers[i];
//     }
// }
// document.write(`The largest number is ${largestNumber}`);

// Question no. 09
// Solution

// document.write("Question no. 09 <br/>");

// let numbers = [24, 53, 78, 91, 12];
// let smallestNumber = numbers[0];

// document.write(`Array items : ${numbers}<br/>`);

// for (i = 0; i < numbers.length; i++) {
//     if (smallestNumber > numbers[i]) {
//         smallestNumber = numbers[i];
//     }
// }
// document.write(`The smallest number is ${smallestNumber}`);

// Question no. 10
// Solution

// document.write("Question no. 10 <br/>");

// for (i = 1; i <= 20; i++) {
//     document.write(`${5*i},`);
// }