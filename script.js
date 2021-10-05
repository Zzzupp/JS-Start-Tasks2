// Задание 1

// Задайте в коде переменную n с числовым значением.

// 1) с помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
// 2) с помощью логического ИЛИ в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
//1.1
// let number = 5;

// if (number > 100 || number < 0){
//     console.log(`Число ${number} не находиться в диапазоне от 0 до 100.`)
// } else {
//     console.log(`Число ${number} находиться в диапазоне от 0 до 100.`)
// }

//1.2.
// let number = 0;
// if (number >= 0 && number <= 100) {
//     console.log('Число ' + number +' находится в диапазоне ста ')
// } else{
//     console.log('Число ' + number +' не находится в диапазоне ста ')
// }

// Задание 2



// Создайте объект с именами и заработными платами
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.


// const engineers = {Den: 1000, Matt: 5000, Steve: 2000};
// for (let property in engineers) {
//     console.log(`Заработная плата ${property} составляет ${engineers[property]} рублей.`)
// }

// Задание 3



// Создать массив из 5 элементов.

// Используя цикл for, вывести каждый второй элемент массива в консоль.


// const value = [5, 'qwe', false, -10, 0.5];

// for(let i = 0; i < value.length; i++) {
//     console.log(value[i]);
// }





// Задание 4



// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.


// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
// }


// Задание 5
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
// 2) Посчитать и вывести в консоль сумму элементов в массиве.
// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (let i = 0; i < numbers.length; i++) {
//         console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
//     }
// for(array of numbers) {
//     console.log(array)
// }
// 3) Посчитать и вывести в консоль сумму четных элементов в массиве.
// sum = 0;
// for(array of numbers) {
//     console.log(array)
//     if (array % 2 == 0){
//         sum = sum + array;
//     }
// }
// console.log(`${sum} - сумма`)


// 4) Найти и вывести в консоль максимальное число массива.
// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.

// let max = numbers[0];
// for(array of numbers) {
    
//     if (max < array){
//         max = array;
//     }
// }
// console.log(max)

// 5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.


// let indexs = [];
// for(let i = 0; i < numbers.length; i++){
//     if (max === numbers[i]){
//         console.log(`найбольшее число ${max}, c индексом ${i}`)
//     }
// }
// for(let property in numbers){
//         if (max === numbers[property]){
//         console.log(`найбольшее число ${numbers[property]}, c индексом ${property}`)
//     }
// }


// Задание 6



// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// let plus = [];
// for(item of arr){
//     if (item > 0){
//         plus.push(item);
//     }
// }
// for(item2 of plus){
//     console.log(item2)
// }




// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

// Задание 7



// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// let nums = [5, 4, 3, 8, 0];
// let limit = 5;


// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

// newnums = [];
// for(let i = 0; i < nums.length; i++){
//     if (nums[i] >= limit) {
//         newnums.push(nums[i]);
//     }

// }
// console.log(newnums)


// Задание 8

// Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

// let arr = [
//     { age: 5, name: 'Vlad' },
//     { age: 10, name: 'Andrew' },
//     { age: 20, name: 'Olga' },
//     { age: 50, name: 'Dima' }

// ];
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age > 10) {
//         console.log(arr[i].name)
//     }
// };

// Задание 9*

// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];



// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова). Вывести этот массив в консоль.
// let vegetables = [
//     { word: 'морковь' }, { word: 'баклажан' }, { word: 'репа' }, { word: 'топинамбур' }
// ];

// console.log(vegetables);
// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

// for (let i = 0; i < vegetables.length; i++) {
//     console.log(`Слова ${vegetables[i].word} длина слова ${vegetables[i].word.length}`)
// };