'use strict';
//найти среднее арифметическое чисел, которые ввел пользователь
let userInput = prompt('Введите числа через запятую:'); // пользователь вводит что-то в инпут (получили строку)
let inputArray = userInput.split(', '); //Метод .split(', ') разбивает строку на массив строк по заданному разделителю (в данном случае разделитель запятая).

//Преобразуем элементы массива к числу. InputArray - строки в массива к числу.
let userNumbers  = inputArray.map(function(item, index, arr) { //метод .map модифицирует каждый элемент массива.
  let number = parseInt(item); //конвертируем элемент к числу. 
  return isNaN(number)? item : number; //делаем проверку конвертации.
});
console.log(inputArray); //массив строк
console.log(userNumbers); //массив чисел

//Среднее арифметическое при помощи reduce
let sum = userNumbers.reduce((accum, current) => accum + current, 0); // Находим сумму чисел массива
console.log("Получаем сумму чисел: " + sum + "\nДелим сумму на количество чисел (длину массива): " + sum/userNumbers.length); //делим её на длину массива  

// Среднее арифметическое
// function arraySum(array) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     console.log("Получаем сумму чисел: " + sum);
//     console.log("Делим сумму на количество чисел (длину массива): " + sum/array.length);
// }

// arraySum(userNumbers);

