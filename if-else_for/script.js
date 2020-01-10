"use strict";

// 1. Напишите функцию, которая возвращает все числа от одного до ста,
// которые меньше, чем квадратный корень числа, которое ввёл пользователь. 
// Выведите числа в консоль. Ввод числа проводите через prompt().
//////////////////////////////////////////////////////////////////////////////////////////////////
// var numberSqrt = Math.round(Math.sqrt(prompt("Введите число:")));
// alert ('Корень введенного числа: ' + numberSqrt + ' (если вы ввели число)');
// function showAllNumbers() {
//     for (var i = 1; i < numberSqrt; i++) {
//         console.log(i);
//         if (i >= 100) {
//            break;
//         }
//     }
// }
// showAllNumbers();
//////////////////////////////////////////////////////////////////////////////////////////////////



// 2. Пользователь вводит целое цисло. Определите, является ли оно простым и выведите ответ в консоль.
//////////////////////////////////////////////////////////////////////////////////////////////////
// var number = prompt('Введите число: ');
// function checkNumber() {
//     if (number %2 === 0) {
//         var result = console.log('Число ' + number + ' является составным');
//     }
//     else if (number %2 !== 0 && number == Number(number)) {
//         var result = console.log('Число ' + number + ' является простым');   
//     }
//     else {
//         var result = console.log('Вы ввели что-то не то.'); 
//     }
//     return result;     
// }
// checkNumber();
//////////////////////////////////////////////////////////////////////////////////////////////////



// 3. Пользователь вводит три числа и знак + или -. Верните в консоль большее/меньшее, в зависимости от введённого знака. Проверяйте все вводы пользователя.
//////////////////////////////////////////////////////////////////////////////////////////////////
// var a = prompt ('Введите число: ');
// var b = prompt ('Введите число: ');
// var c = prompt ('Введите число: ');
// var symbol = prompt ('Введите + или - : ');

// function _isNumber(a, b, c) {
//     return !isNaN(parseFloat(a, b, c)) && isFinite(a, b, c);
// }

// if(_isNumber(a, b, c) && symbol === '+' || symbol === '-') {
//     var result;

//     function showNumber() {
//         if (symbol === "+") {
//             if (a > b && a > c) {
//                 result = console.log('Большее из этих числе: ' + a);
//             }
//             else if (b > a && b > c) {
//                 result = console.log('Большее из этих числе: ' + b);
//             }
//             else if (c > a && c > b) {
//                 result = console.log('Большее из этих числе: ' + c);
//             }
//             return result;
//         } 
    
//         if (symbol === "-") {
//             if (a < b && a < c) {
//                 result = console.log('Меньшее из этих чисел: ' + a);
//             }
//             else if (b < a && b < c) {
//                 result = console.log('Меньшее из этих чисел: ' + b);
//             }
//             else if (c < a && c < b) {
//                 result = console.log('Меньшее из этих чисел: ' + c);
//             }
//             return result;
//         } 
//     } 
//     showNumber(); 
// } else {
//     console.log('Введены неверные значения, либо ввод был отменен.');
// }
//////////////////////////////////////////////////////////////////////////////////////////////////



// 4. Пользователь по очереди вводит в prompt() названия фруктов по одному. Выведите в консоль список всех фруктов, когда пользователь отменит ввод.
//////////////////////////////////////////////////////////////////////////////////////////////////
// var fruits = [];

// function showFruits () {
//     for (var userFruits; userFruits!=0; userFruits++) {
//         userFruits = prompt ('Введите или отмените фрукт: ');
//         if (userFruits == Number(userFruits)) {
//             console.log('Введено неверное значение.');
//             break
//         }
//         if (userFruits === null) {
//             break
//         } else {
//             fruits.push(userFruits);
//             console.log(fruits);
//         }
//     }
// }
// showFruits();

/*второй вариант решения*/
// var userFruits1 = prompt ('Введите или отмените фрукт 1: ');
// var userFruits2 = prompt ('Введите или отмените фрукт 2: ');
// var userFruits3 = prompt ('Введите или отмените фрукт 3: ');

// function showSomething () {
//     if (userFruits1 === null || userFruits2 === null || userFruits3 === null) {
//         return console.log(userFruits1,userFruit2,userFruits3);
//     }
// }
// showSomething();
/*конец второго варианта решения*/
//////////////////////////////////////////////////////////////////////////////////////////////////



// 5. Курс обмена валюты фиксированный и составляет 2772.4 украинских гривен за 100 долларов США. 
// Выведите в консоль, сколько гривен положительной или отрицательной разницы в гривне получит пользователь после ввода суммы и нового курса.
//////////////////////////////////////////////////////////////////////////////////////////////////
// var BASIC_EXCHANGE_RATE = 27;
// var userCurrency = prompt ('Сколько долларов хотите купить?:');

// function _isNumber(userCurrency) {
//     return !isNaN(parseFloat(userCurrency)) && isFinite(userCurrency);
// }

// if (_isNumber(userCurrency)) {
//     var price = alert ('С Вас ' + userCurrency*BASIC_EXCHANGE_RATE + 'грн, пожалуйста.');
//     var newExchangeRate = prompt ('Введие новый курс (грн за доллар): ');

//     if (newExchangeRate == Number(newExchangeRate)) {
//         var newPrice = (newExchangeRate - BASIC_EXCHANGE_RATE) * userCurrency;
//         alert ('По новому курсу разница бы составила: ' + newPrice);
//     } else {
//         alert ('Введено неверное значние');
//     }

// } else {
//     alert ('Введено неверное значние');
// }
//////////////////////////////////////////////////////////////////////////////////////////////////