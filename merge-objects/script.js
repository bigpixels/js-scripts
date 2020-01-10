"use strict";

// Написать функцию mergeObjects, которая принимает 2 объекта в качестве аргументов и возвращает новый объект - глубокое слияние этих двух объектов.
// Дальнейшее изменение объектов obj1, obj2 не должно приводить к изменению объекта result.
// Функция должна валидировать входные данные.
// В слиянии должны участвовать только собственные свойства объектов.

var obj1 = {
    a: 3,
    b: 4,
    c: {
       a: {
          a: 38,
          b: 21
       },
       b: 6
    }
 }
 
 var obj2 = {
    a: 3,
    b: 58,
    d: 32,
    c: {
       a: {
          a: 2,
          b: 1
       }
    }
 }

var result = {};

for (var key in obj1) {
   if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      var currentObj = obj1[key];
      result[key] = {};
      for (var subKey in currentObj) {
         result[key][subKey] = currentObj[subKey];
      }   
   } else {
      result[key] = obj1[key];
   }
}

for (var key in obj2) {
   if (typeof obj2[key] === 'object' && obj2[key] !== null) {
      var currentObj = obj2[key];
      for (var subKey in currentObj) {
         result[key][subKey] = currentObj[subKey];
      }   
   } else {
      result[key] = obj2[key];
   }
}

console.log(result);