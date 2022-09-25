import DOMModule from "./DOMModule.js"



function openForm() {
    formContainer.style.display = "block";
}
  
function closeForm() {
    formContainer.style.display = "none";
}

class ToDo {
    constructor(Title,Description,DueDate,Priority){
        this.title = Title
        this.description = Description
        this.dueDate = DueDate
        this.priority = Priority
    }
}


projectArray[]



addProject.addEventListener("click", openForm())

add.addEventListener("click", (event) => {
event.preventDefault()


})

cancel.addEventListener("click", (event) => {
    event.preventDefault()
    closeForm()
})

