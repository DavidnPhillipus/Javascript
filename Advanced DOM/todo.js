const form = document.querySelector("new-todo-form")
const todoInput = document.querySelector('#todo-input')
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")
const todos = []
const LOCAL_STORAGE_PREFIX = "ADVAANCED_TODO_LIST"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
const todos = loadTodos()

todos.forEach( todo => renderTodo(todo));

//Add todo
//User will type in to and click the add todo button thi should then add the todo to the list item
list.addEventlistener('change',e => {
    if( !e.target.matches('[data-list-item-chrckbox]')) return
    //Get the todo that is clicked

    //Toggle the complete property to be equal to the checkbox value
    //save our uodated toto
})
form.addEventListener('submit',  e => {
    e.preventDefault
    const todoName = todoInput.value
    if(todoName === "") return
    const newTodo = {
        name: todoName
        complete: false
        id: new Date().valueOf().toString()

    }

    todos.push(todoName)
    renderTodo(todoName)
    saveTodos()
    //render Todo
    todoInput = ""
})



function renderTodo(todoName){
    const templateClone = template.content.cloneNode(true)
    const textElement = document.querySelector("[data-list-item-text]")
    textElement.innerText = todoName
    list.appendChild(templateClone)
    console.log(templateClone)
}
renderTodo()


//Load todos
function loadTodos(){
    consts todosSring = localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todosSring) || []
}

//save todo
function saveTodo(){
    localStorage.setItem( TODOS_STORAGE_KEY, JSON.stringfy(todos))
}






//Delete todo
//Complete todo

//Load todo


