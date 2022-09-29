
import { projectContainer } from "./index.js"
import { projectArray } from "./index.js"
import { todoContainer } from "./index.js"

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
        todoContainer.innerHTML = ""
        const NewProjectx
        
    })
    
   
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



// search for todoArray with index that matches the project button and display it


export function displayTodos(){
todoContainer.innerHTML = ""
currentProject = 

}

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

