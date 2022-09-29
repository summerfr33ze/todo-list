import "./style.css"
import { displayProjects } from "./functionsAndClasses.js"
import { createTodoArray} from "./functionsAndClasses.js"
import { displayTodos} from "./functionsAndClasses.js"
import { Todo } from "./functionsandClasses.js"
import { Project } from "./functionsandClasses.js"

//Areas of the Site
const projectPanel = document.querySelector(".project-panel")
const toDoArea = document.querySelector(".todo-area")

// project titles are placed above where form appears
export const projectContainer = document.querySelector(".project-container")
const formContainer = document.querySelector(".form-container")
const projectForm = document.querySelector(".project-form")



//project input elements
const popupInput = document.querySelector(".popup-input")
const add = document.querySelector(".add")
const cancel = document.querySelector(".cancel")



//todo  DOM elements
const title = document.querySelector(".title")
const description= document.querySelector(".description")
const dueDate = document.querySelector(".due-date")
const priority= document.querySelector(".priority")
const addTodo = document.querySelector(".add-todo")
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




/*
  addEventListener("click", (event) => {
    event.preventDefault()
    const todo = new Todo (title.value,description.value,dueDate.value, priority.value)
    todoArray.push(todo)
    displayTodos()
    closeForm()

})

*/