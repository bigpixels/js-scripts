"use strict";

var products = [];
 products[0] = {
   name: 'iMac',
   price: 70000,
   category: 'Apple'
 }
 products[1] = {
   name: 'Galaxy S10+',
   price: 52000,
   category: 'Samsung'
 }
 products[2] = {
  name: 'XPS 13',
  price: 30000,
  category: 'Dell'
}
 products[3] = {
   name: 'Redmi Note 7',
   price: 5800,
   category: 'Xiaomi'
 }
 products[4] = {
  name: 'Mi 9',
  price: 12000,
  category: 'Xiaomi'
 }
 
//Напишите функцию, которая принимает название товара, его цену и категорию, добавляет этот товар в массив, где каждый товар это объект и возвращает массив всех товаров. Товаров может быть сколько угодно. 
function productsAdd (name, price, category) {
  products.push({
  name: name,
  price: price,
  category: category
  });
  return products;
}

// Напишите функцию, которая фильтрует товары по цене от и до и возращает новый массив только с товарами выбранного ценового диапазона или пустой массив. 
var productsPriceFilter = products.filter(function (product, index, products) {
  return product.price > 6000 && product.price < 70000;
});

// Напишите функцию, которая фильтрует товары по категории и возращает новый массив только с товарами выбранной категории, если она есть или пустой массив. 
var productsCategoryFilter = products.filter(function (product, index, products) {
  return product.category === 'Xiaomi';
});

// Напишите функцию, которая возвращает количесто товаров в категории.
var productsAmount = productsCategoryFilter.filter(function (product, index, products) {
  return product.name.length;
});

// Напишите функцию, которая удаляет товар по имени.
var productsRemove = products.filter(function (product, index, products) {
  return product.name !== 'XPS 13';
});

//Напишите функции, которые сортируют товары по цене от меньшего к большему и наоборот и возвращают новый массив
var productsCompare = products.map(function (product, index, products) {
  return product.price;
});
var productsPrise_smaller_to_bigger = productsCompare.sort(function(a,b) {
  return a-b;
});
var productsCompare_Copy = productsCompare.slice(0);
var productsPrise_bigger_to_smaller = productsCompare_Copy.reverse();

// Напишите функцию, котрая принимает вид сортировки (от большего к меньшему или наоборот) и фильтра (диапазон цены или категория) и возвращает новый массив товаров определённой выборки, отсортированные как указал пользователь. 
function sort (productsPrise_bigger_to_smaller, productsCategoryFilter) {
  var newProductsMassive = [];
  products.forEach(function (product, index, products) {
    newProductsMassive = [product];
  });
  return newProductsMassive;
}

// Напишите функцию, котрая принимает фильтра (диапазон цены или категория) и возвращает сумму цен товаров этой выборки. 
var productsPriceSum = productsCategoryFilter.map(function(product, index, products) {
  return product.price;
}).reduce(function(previousValue, currentItem) {
  return previousValue + currentItem;
});

// что такое функция callback? - это функция, которая является аргументом другой функции. forEach - в каждой итерации вызывается функция callback: function (itemName, index, arrayProducts). У неё в атрибутах: элемент итерации, индекс итерации, массив, который мы перебираем.
products.forEach(function (product, index, products) {
  console.log(product,index,products);
});
