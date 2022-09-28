


function displayProjects() {
    projectContainer.innerHTML = ""
    projectArray.forEach((project, index) => {
    const  projectButton = document.createElement("button")
    projectButton.style.display = "block"
    projectButton.textContent = project
    projectButton.className = "project-button"
    projectContainer.appendChild(projectButton)
    projectButton.dataset.projectIndex = `${index}`
    createTodoArray()
    })
    }

// every time we create a new project
//we create a todo page to go along
//we create new todo array
// we add that array to an array of todo arrays

//when we click a project button
//we clear the todo container
//we select the specific todo array
// we load the specific todos into the page

function createTodoArray() {
    const todoArray = []
    todoArray.push(arrayOfTodoArrays)
    todoArray.dataset.todoArrayIndex = `${index}`

}

// search for todoArray with index that matches the project button and display it


function displayTodos(){
todoContainer.innerHTML = ""
arrayOfTodoArrays.forEach((todoArray, index) => {
    if (todoArray.dataset.todoArrayIndex = i){
        todoArray.forEach((todo, index) => {
            const todoDiv = document.createElement("div")
            todoDiv.className = "todo-div"
            todoContainer.appendChild(todoDiv)
            for(let key in Todo){
                const entry = document.createElement("div")
                todoDiv.appendChild(entry)
                entry.textContent = `${key} : ${Todo[key]} `
            }
            const todoDeleteButton = document.createElement("button")
            todoDeleteButton.className = "delete"
            todoDiv.appendChild(todoDeleteButton)
            
            todoDeleteButton.textContent = "Delete"
                todoDeleteButton.addEventListener("click", (event) => {
                todoDeleteButton.innerHTML = ""
                const attr = todoDeleteButton.parentElement.getAttribute("data-todo-index")
                todoArray.splice(attr, 1)
                displayTodos()
                })
            })
    }
    else { return }
})



}

class Todo {
    constructor(Title,Description,DueDate,Priority){
        this.title = Title
        this.description = Description
        this.dueDate = DueDate
        this.priority = Priority
        }
    }



