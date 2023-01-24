const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('p')
        const buttonsDiv  = document.createElement('div')
        const buttonEdit = document.createElement('button')
        const buttonDel = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        buttonsDiv.setAttribute('class', 'buttons_div')
        buttonEdit.setAttribute('class', 'button_edit')
        buttonDel.setAttribute('class', 'button_del')

        buttonEdit.innerHTML = "Edit"
        buttonDel.innerHTML = "Delete"

        text.innerText = input.value

        buttonsDiv.append(buttonEdit, buttonDel)
        div.append(text, buttonsDiv)
        todoList.prepend(div)

        buttonEdit.onclick = () => {
            const editPromt = prompt(text.innerHTML).trim()
            if (editPromt === '') {
                return false
            } else {
                text.innerHTML = editPromt
            }
            
        }
        buttonDel.onclick = () => {
            div.remove()
        }
    }
    input.value = ''
}



createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', event => event.code === 'Enter' ? createTodo() : false)