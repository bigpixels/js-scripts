"use strict";
//3.1
let x = prompt ('Ввелите ось х:');
let y = prompt ('Введите ось у:');
let segment = Math.sqrt(Math.pow(x,2) + Math.pow(y,2)); //длина отрезка от 0 до точки пользователя.
if (x > 5 || y > 5 || x < -5 || y < -5) {
    alert ("Вы вышли за пределы оси координат.");
} else if (segment >= 5 && x > 0 && y > 0) {
    alert ("Вы попали в верхний правый угол квадрата. Длина отрезка = " + segment + " Точка попадает в зарисованную область.");
} else if (x > 0 && y > 0) {
    alert ("Вы попали в верхнюю правую область. Длина отрезка = " + segment + " Но точка не попадает угол квадрта.");
} else if (x > 0 && y < 0) {
    alert ("Вы попали в нижнюю правую область. Длина отрезка = " + segment);
} else if (x < 0 && y < 0) {
    alert ("Вы попали в нижнюю левую область. Длина отрезка = " + segment);
} else if (x < 0 && y > 0) {
    alert ("Вы попали в верхнюю левую область. Длина отрезка = " + segment);
} else {
    alert ("Вы точно ввели число? Возможно у Вас были пробелы, их быть не должно, либо Вы дважды ввели 0. Никаких математических операций также быть не должно.");
}  

//3.2
/* 
let lb = prompt ('Введите вес в фунтах, который больше, чем 0 (только числами):');
let kg = lb/2.20462;
if (kg > 0 && kg <= 5) {
    var price = kg * 3 * 0.0288;
    alert ("Вы должны 3 грн за каждый киллограмм, так как вес составляет: " + kg + "кг. К оплате: " + price + " фунтов стерлингов");
} else if (kg >5 && kg <= 10) {
    var price = kg * 5 * 0.0288;
    alert ("Вы должны 5 грн за каждый киллограмм, так как вес составляет: " + kg + "кг. К оплате: " + price + " фунтов стерлингов");
} else if (kg >10 && kg <= 15) {
    var price = kg * 10 * 0.0288;
    alert ("Вы должны 10 грн за каждый киллограмм, так как вес составляет: " + kg + "кг. К оплате: " + price + " фунтов стерлингов");
} else if (kg > 15) {
    alert ("Что-то вы ввели очень дофига.");
}  else {
    alert ("Я ведь просил только числами. " + kg + " -  не тот ответ, который я ожидал увидеть.");
};
*/
//1 грн = 0.0288 фунтов стерлингов
//1 кг = 2.20462 фунтов