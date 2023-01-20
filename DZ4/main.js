// Задача 1

const btnP = document.querySelector('.btnPlus')
const count = document.querySelector('.counter')
const btnM = document.querySelector('.btnMinus')
const clear = document.querySelector('.clear')
let countNumber = 0

btnP.onclick = function () {
    countNumber++
    if (countNumber > 0){
        count.innerText = countNumber
    }
}

btnM.onclick = function () {
    countNumber--
    if(countNumber >= 0){
        count.innerText = countNumber
    }
}

clear.onclick = function () {
    countNumber = 0
    count.innerText = countNumber
}



//Задача 2

const mouse = document.querySelector('.mousePosBox')
const x = document.querySelector('.x')
const y = document.querySelector('.y')

mouse.onmousemove = function (e) {
    x.innerText = e.screenX
    y.innerText = e.screenY
}