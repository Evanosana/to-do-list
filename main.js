let textBox = document.getElementById("addNewText")

const addNew = document.getElementById("addNew")
const container = document.getElementById("container")

addNew.addEventListener("click", listItems)


function listItems(){
    let textBoxValue = document.getElementById("addNewText").value

    if(textBoxValue === ""){
        console.log("clear")
        return
    }
    else{
        const newElement = document.createElement("div")
        const childLabel = document.createElement("label")
        const buttonOne = document.createElement("button")
        const buttonTwo = document.createElement("button")

        newElement.appendChild(childLabel)
        newElement.appendChild(buttonOne)
        newElement.appendChild(buttonTwo)

        buttonOne.classList.add("rowButtonFinished", "rowButton")
        buttonTwo.classList.add("rowButtonDelete", "rowButton")
        buttonOne.id = "finishButton"
        buttonTwo.id = "deleteButton"
        childLabel.classList.add("child")
        newElement.classList.add("row")

        childLabel.innerText = textBoxValue
        buttonOne.textContent = "Finished"
        buttonTwo.textContent = "Delete"

        const container = document.getElementById("container")
        container.appendChild(newElement)
        
        document.getElementById("addNewText").value = ""
    }
        
        finishButton.addEventListener("click", finishTask)
        deleteButton.addEventListener("click", deleteTask)
}
function finishTask(event){
    const row = event.target.previousElementSibling
    row.classList.add("finished")
}
function deleteTask(event){
    const row = event.target.parentElement
    row.remove()
}