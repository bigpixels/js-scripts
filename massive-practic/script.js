"use strict";

// Пользователь вводит в prompt() числа через запятую (один раз много цифр, например: "54, 45, 53453, 7, 32").
// - Разрешите пользователю вводить минимум три числа, максимум - десять.
// - Разрешите вводить только числа меньше ста.
// - Если всё введено верно, отсортируйте числа от меньшего к большему и выведите в консоль новую строку.
// * Усложнение (необязательно к выполнению): Отсортируйте числа на сначала чётные, потом нечётные.

 var userNumber = prompt('Введите числа через запятую:').split(', '); //split() Метод .split(', ') разбивает строку на массив строк по заданному разделителю.

// function _compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
// }

// if (_isNumber(userNumbers)) {
    // if (userNumbers.length < 3 && userNumbers.length > 10) {
    //     alert ('Можно вводить минимум три числа, максимум - десять.');   
    // }
// } else {
//     alert ('Введено неверное значение, либо ввод был отменен.');
// }

for (var i = 0; i < userNumber.length; i++) {
    for (var j = 0; j < userNumber[i].length; j++) {
        if (j > 1) {
            alert ('Введено число больше 99.');
            break;
        }   
    }
    if (userNumber.length < 3) {
        alert ('Введено меньше 3 чисел.');
        break;
    } else if (userNumber.length > 10) {
        alert ('Введено больше 10 чисел.');
        break;
    }
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    if (userNumber.length >= 3 && userNumber.length <= 10 && userNumber[i].length < 3) {
        userNumber.sort(compareNumeric);
        alert('Сортировка от меньшего к большему: ' + userNumber);
        userNumber.sort((a, b) => a % 2 - b % 2 || a - b);
        alert('Сортировка по четности: ' + userNumber);
        break;
    }
}
