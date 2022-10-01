import { projectContainer } from "./index.js"
import { projectArray } from "./index.js"
import { todoContainer } from "./index.js"

export let currentProject

export function displayProjects() {
    projectContainer.innerHTML = ""
    projectArray.forEach((NewProject, index) => {
    const  projectButton = document.createElement("button")
    projectButton.textContent = NewProject.title
    projectButton.dataset.projectIndex = `${index}`
    projectButton.style.display = "block"
    projectButton.className = "project-button"
    projectContainer.appendChild(projectButton)
    projectButton.addEventListener("click", () => {
        currentProject = index
        todoContainer.innerHTML = ""
        displayTodos()
        
    })
    
   
    })
    }

export function displayTodos(){
todoContainer.innerHTML = ""
projectArray.forEach((NewProject, index) => {
    if (index === currentProject){
        NewProject.todoArray.forEach((todo, index) => {
            const todoDiv = document.createElement("div")
            console.log(todoDiv)
            todoDiv.className = "todo-div"
            todoContainer.appendChild(todoDiv)
            for (let key in todo){
                const entry = document.createElement("div")
                todoDiv.appendChild(entry)
                console.log(todoDiv)
                entry.textContent = `${key} : ${todo[key]}`
            }

            todoDiv.dataset.todoArrayIndex = `${index}`

        })
    }
    else { return }

})

}

// every time we create a new project object
// we put a  new todo array as a property
//when we click a project button
//we clear the todo container
//we select the todo property 
// we load the specific todos into the page




export class Todo {
    constructor(Title,Description,DueDate,Priority){
        this.title = Title
        this.description = Description
        this.dueDate = DueDate
        this.priority = Priority
        }
    }

export class Project {
    constructor(Title){
        this.title = Title
        this.todoArray = []
    }

}

