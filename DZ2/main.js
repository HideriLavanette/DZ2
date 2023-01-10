// Задача 1
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите в консоль только те числа из массива, которые начинаются на цифру 1, 2 или 5.


// var array1 = [5, 10, 20, 30, 100, 235, 3000, 5353];
// var array2 = [];

// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] < 10) {
//         if (array1[i] == 1 || array1[i] == 2 || array1[i] == 5) {
//             array2.push(array1[i]);
//         }
//     } else if (array1[i] < 100) {
//         if (Math.floor(array1[i] / 10) == 1 || Math.floor(array1[i] / 10) == 2 || Math.floor(array1[i] / 10) == 5) {
//             array2.push(array1[i]);
//         }
//     } else if (array1[i] < 1000) {
//         if (Math.floor(array1[i] / 100) == 1 || Math.floor(array1[i] / 100) == 2 || Math.floor(array1[i] / 100) == 5) {
//             array2.push(array1[i]);
//         }
//     }
//     else if (array1[i] < 10000) {
//         if (Math.floor(array1[i] / 1000) == 1 || Math.floor(array1[i] / 1000) == 2 || Math.floor(array1[i] / 1000) == 5) {
//             array2.push(array1[i]);
//         }
//     }
// }

// console.log(array2);



// Задача 2
// При помощи цикла выводить цифры в убывающем порядке от 20 до 0 


// for (let i = 20; i >= 0; i--) {
//     console.log(i)
// }



// Задача 3

var lights = {
    red: ["СТОП!"],
    orange: ["ВНИМАНИЕ! Спасибо за внимание))"],
    green: ["ЕДЕМ!"],
    r: "красный",
    o: "оранжевый",
    g: "зелёный"
}

var colorMessage = (prompt("Давай сыграем в 'Сфетофор'! Вводи один из цветов: красный, оранжевый или зелёный"))

switch (colorMessage) {
    case lights.r:
        alert(lights.red);
        break
    case lights.o:
        alert(lights.orange);
        break
    case lights.g:
        alert(lights.green);
        break
    default:
        alert("Неправильно! Вводи 'красный', 'оранжевый' или 'зелёный'!")
        break
}