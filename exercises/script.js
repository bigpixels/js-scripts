"use strict"

// Дан объект: {name: 'John', 'surname': 'Johnson', 'age': '20'}. Напишите функцию которая записывает соответствующие значения в переменные name, surname и age. 

// function makeUser(userName, userSurName, userAge) {
//   return {
//     name: userName,
//     surname: userSurName,
//     age: userAge
//   };
// }

// let user = makeUser("John", "Johnson", 20);
// console.log("Name: " + user.name, "\nSurname: " + user.surname, "\nAge: " + user.age + "\n");


// Дан массив: ['shoes', 'shirts', 'socks', 'sweaters']. Напишите функцию которая записывает последний элемент этого массива в переменную elem1, а предпоследний - в переменную elem2, не обращаясь к свойству length для решения.
// let clothes = ['shoes', 'shirts', 'socks', 'sweaters'];
// let show2LastElems = function () {
//   let [elem1, elem2] = clothes.reverse();
//   console.log('Elem1: ' + elem1, '\nElem2: ' + elem2);
// }
// console.log(show2LastElems());

//Дан массив с числами: [1, 2, 5, 8, 13] Напишите функцию которая находит сумму элементов этого массива, без применения циклов: for (for..., for...in, for...of, forEach) и while (while... do, do...while).
// let arr = [1, 2, 5, 8, 13];
// let result = arr.reduce(function(sum, current) {
//   return sum + current;
// }, 0);

// alert( result );

//Напишите регулярное выражение для валидации email, которое будет проверять строку на соблюдение данной структуры: не менее одной буквы латиницей, любое количество цифр, возможна точка и символ + , затем символ @ , далее не менее одной буквы латиницей, потом точка и не менее одной буквы латиницей, сумма всех символов не должна превышать 60. 
// function validateEmail(email) {
//   let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return pattern .test(email);
// }
// function validate() {
//   let $result = $("#result");
//   let email = $("#email").val();
//   $result.text("");

//   if (validateEmail(email)) {
//     $result.text(email + " подтвержден.");
//   } else {
//     $result.text(email + " не подтвержден.");
//   }
//   return false;
// }

// $("#validate").bind("click", validate);

//Дан массив [1, 'abc', [], [a], {}, {name: "ololo"}, null, 0]. Напишите функцию которая вернет новый массив без пустых значений (пустой массив и пустой объект - тоже расцениваются как пустые значения)
// let a = 'a';
// let sparseArray = [1, 'abc', [], [a], {}, {name: "ololo"}, null, 0];
// let cleanArray = sparseArray.filter(function (el) {
//   return el != null && el.length != 0 && Object.getOwnPropertyNames(el) !=0 || typeof el === 'number' && isFinite(el);
// });
// console.log(cleanArray);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Получить четные и нечетные числа заднного диапазона.
// let minInput = prompt('Min:');
// let maxInput = prompt('Max:');

// let minNumber = parseInt(minInput);
// let maxNumber = parseInt(maxInput);

// function range(start, end) {
//   let evenNumbers = [];
//   let oddNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i%2 == 0 && i != 0) {
//       evenNumbers.push(i);
//     } else if (i != 0) {
//       oddNumbers.push(i);
//     }
//   }
//   return {
//     'Четные числа: ': evenNumbers,
//     'Нечетные числа: ': oddNumbers.reverse(),
//   };
// }

// console.log(range(minNumber, maxNumber));

/* Exercise 1:
  Write a Javascript program to chek two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100.
*/
let numbers = [49, 50];
let chekNumber = numbers.reduce((accum, current) => current === 100 || accum + current === 100);
console.log(chekNumber);

