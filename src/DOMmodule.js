function DOMModule() {

const body = document.querySelector("body")
const header = document.createElement("div")
header.className = "header"
body.appendChild(header)
projectPanel = document.createElement("div")
projectPanel.className = "project-panel"
body.appendChild(projectPanel)
const toDoArea = document.createElement("div")
toDoArea.className = "todo-area"
body.appendChild(toDoArea)

}

export default DOMModule