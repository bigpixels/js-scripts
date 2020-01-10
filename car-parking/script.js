"use strict";
// Создайте свой автопарк.
// 1. Добавьте возможность указывать расход масла автомобиля, при его создании.
// 2. Добавьте возможность указания максимальной скорости при создании, а так же скорости поездки при поездке. На основе этих данных вычисляйте затраченное на поездку время.

let car0 = car();
console.log('Добрый день. Вам доступны следующие кнопки для машинки car0:\n- ride(дистанция, расход масла) - позволяет ехать на заданное расстояние.\n- showTime(дистанция, скорость, макисмальная скорость) - позволяет узнать время, необходимое на поездку.');

function car() {
    let gasBalance = 200; //литров бензина доступно изначально
    let oilBalance = 1000; //грамм масла доступно изначально
    let gasСonsumption = 10; //расход горючего
    let neededTime = 0; //время, необходимое на поездку

    function _getTime(distance, speed) {
        neededTime = distance/speed;
        return neededTime
    }

    function _checkGas() { // _ обозначает приватность. Потому что в JS нет приватных методов. Методы с _ внутренние в программе и пользователь не должен с ними работать.
        return gasBalance;
    }

    function _checkOil() {
        return oilBalance;
    }

    function _checkMaxSpeed(speed, maxSpeed) {
        return speed <= maxSpeed;
    }

    function _chekCar (distance, oilСonsumption) { //проверка, есть ли бензин и масло
        let neededGas = distance / gasСonsumption; //затраченное горючее, которое зависит от расстояния
        gasBalance -= neededGas;
        let neededOil = neededGas * oilСonsumption; //расход масла от общего расхода горючего, которое было затрачено для преодоления пути
        oilBalance -= neededOil;
        return neededGas <= gasBalance || neededOil <= oilBalance; //достаточно ли бензина или масла
    }

    return { 
        ride: function (distance, oilСonsumption) { //публичный метод, позволяет ехать на какое-то расстояние. Это наша "кнопка", которые доступны пользователю.
            if (_chekCar(distance, oilСonsumption) && _checkGas() >= 0 && _checkOil() >= 0) {
                return console.log('у вас осталось ' + gasBalance + ' литров топлива. Состояние масла: ' + oilBalance + ' грамм.');
            } else if (_checkGas() <= 0) {
                return console.log('закончилось топливо');
            } else if (_checkOil() <= 0) {
                return console.log('закончилось масло');
            } else if (distance < 0 || oilСonsumption < 0) {
                return console.log('введены неверные значения');
            }
        },
        showtime: function (distance, speed, maxSpeed) { //публичный метод, позволяет узнать затраченное на поездку время. Еще одна "кнопка" Указываем дистанцию и скорость, чтобы узнать врмея.
            if (_getTime(distance, speed) >=0 && _checkMaxSpeed(speed, maxSpeed)) {
                return console.log('Затраченное на поездку время: ' + neededTime);
            } else {
                return console.log('Введены неверные значения');
            }
        }
    } 
}

// в современных двигателях заявленный расход масла составляет, в среднем, от 0.2% от общего расхода горючего,
// которое было затрачено для преодоления какого-либо отрезка пути. Получается, если машина прошла 100 км., 
// а расход составляет 10литров топлива, тогда нормой будет также являться потребление, в среднем, 20 граммов масла.

// var time = 0;
// var speed = 0; //скорость, которую ввел пользователь
// var speedMax = 400;
//расстояние, которое ввел пользователь

