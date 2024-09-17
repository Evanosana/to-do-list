let textBox = document.getElementById("addNewText") // input box

const addNew = document.getElementById("addNew") // + button
const container = document.getElementById("container") // location for tasks to appear

addNew.addEventListener("click", listItems) // calls the listItems function when the + is clicked


function listItems(){
    let textBoxValue = document.getElementById("addNewText").value // sets the textbox to a value

    if(textBoxValue === ""){ // if the entry is clear, leave the function
        console.log("clear")
        return
    }
    else{ // Add new rows for tasks
        const newElement = document.createElement("div") // row container
        const childLabel = document.createElement("label") // task name
        const buttonOne = document.createElement("button") // finish button
        const buttonTwo = document.createElement("button") // delete button

        // adds children to the row
        newElement.appendChild(childLabel)
        newElement.appendChild(buttonOne)
        newElement.appendChild(buttonTwo)

        // gives classes and ids to the children
        buttonOne.classList.add("rowButtonFinished", "rowButton")
        buttonTwo.classList.add("rowButtonDelete", "rowButton")
        buttonOne.id = "finishButton"
        buttonTwo.id = "deleteButton"
        childLabel.classList.add("child")
        newElement.classList.add("row")

        // adds content to the elements being added ^^^
        childLabel.innerText = textBoxValue
        buttonOne.textContent = "Finished"
        buttonTwo.textContent = "Delete"

        // puts the row inside of the premade container
        const container = document.getElementById("container")
        container.appendChild(newElement)
        
        // once a task is submitted, clear the input field
        document.getElementById("addNewText").value = ""
    }
        
        // calls the function when the respective button is pressed
        finishButton.addEventListener("click", finishTask)
        deleteButton.addEventListener("click", deleteTask)
}
function finishTask(event){ // crosses out a task
    const row = event.target.previousElementSibling
    row.classList.add("finished")
}
function deleteTask(event){ // deletes a row
    const row = event.target.parentElement
    row.remove()
}