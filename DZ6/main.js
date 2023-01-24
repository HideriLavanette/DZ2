const textInput = document.querySelector('.input')
const resList = document.querySelector('.list')
const reverse = document.querySelector('.reverse')
const addBtn = document.querySelector('#add')

textInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        let arr = []
        const result = textInput.value.split('').reverse().join('')
        arr.push(result)
        arr.forEach((item) => {
            const textBlock = document.createElement('div')
            const textP = document.createElement('p')
            const deleteTextBlock = document.createElement('button')

            textBlock.setAttribute('class', 'blockText')
            textP.setAttribute('class', 'textP')
            deleteTextBlock.setAttribute('class', 'delBtn')
            
            deleteTextBlock.innerHTML = 'Удалить'

            deleteTextBlock.onclick = () => {
                textBlock.remove()
            
            }



            textP.innerHTML = item
            textBlock.append(textP)
            textBlock.append(deleteTextBlock)
            resList.append(textBlock)
        })
        }
})


