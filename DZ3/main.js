// Задача 1
// Написать функцию, которая принимает 2 параметра (числа) и возвращает в консоли самый минимальный из них

// var num1 = Number(prompt("Напиши первое число"))
// var num2 = Number(prompt("Напиши второе число"))

// var calc = () => {
//     if (num1 > num2) {
//         console.log(num2);
//     } else if (num1 < num2) {
//         console.log(num1);
//     } else {
//         alert("Пиши цифры!")
//     }
// }

// calc()


// Задача 2
// Написать функцию которая принимает 1 параметр в который попадает promt() и вернуть длину строки в консоли.


// var enter = prompt("Проверка длины строки")

// var a = (len) => {
//     console.log(len.length);
// }

// a(enter)




// Задача 3
// Написать простой калькулятор при помощи функции и его параметров. Функция должна уметь вычислять: деление "/",  умножение "*", вычитание "-", сложение "+"


var number1 = Number(prompt("Вводи первое число"))
var number2 = Number(prompt("Вводи второе число"))
var equil
var string = prompt("Выбери действие '+', '-', '/', '*'")

var calc = (number1, number2, string) => {
    if (string == '+') {
        equil = number1 + number2
        alert (equil)
    } else if (string == '-') {
        equil = number1 - number2
        alert (equil)
    } else if (string == '/') {
        equil = number1 / number2
        alert (equil)
    } else if (string == '*') {
        equil = number1 * number2
        alert (equil)
    } else {
        alert ("ОШИБКА! Вводи всё правильно!")
    }
}
calc (number1, number2, string)