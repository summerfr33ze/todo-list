import "./style.css"
import { displayProjects } from "./functions-and-classes.js"
import { createTodoArray} from "./functions-and-classes.js"
import { displayTodos} from "./functions-and-classes.js"
import { Todo } from "./functions-and-classes.js"
import { Project } from "./functions-and-classes.js"
import { currentProject } from "./functions-and-classes.js"


//Areas of the Site
const projectPanel = document.querySelector(".project-panel")
const toDoArea = document.querySelector(".todo-area")

// project titles are placed above where form appears
export const projectContainer = document.querySelector(".project-container")
const projectForm = document.querySelector(".project-form")



//project input elements
const popupInput = document.querySelector(".popup-input")
const add = document.querySelector("#add")
const cancel = document.querySelector("#cancel")



//todo  DOM elements
const title = document.querySelector(".title")
const description= document.querySelector(".description")
const dueDate = document.querySelector(".due-date")
const priority= document.querySelector(".priority")
const addTodo = document.querySelector("#add-todo")
const todoForm = document.querySelector("todo-form")
export const todoContainer = document.querySelector(".todo-container")







export const projectArray = []



// user adds project



add.addEventListener("click", (event) => {
    event.preventDefault()
    const NewProject = new Project(popupInput.value)
    projectArray.push(NewProject)
    displayProjects()
    projectForm.reset()
    
})

cancel.addEventListener("click", (event) => {
    event.preventDefault()
    projectForm.reset()
    

})


addTodo.addEventListener("click", (event) => {
    event.preventDefault()
    const todo = new Todo (title.value,description.value,dueDate.value, priority.value)
    projectArray.forEach((NewProject, index) => {
        if (index === currentProject){
            NewProject.todoArray.push(todo)

        }
        else {return}
    })
    displayTodos()
    

})
