let textBox = document.getElementById("addNewText")
let counter = 0

const addNew = document.getElementById("addNew")

console.log(counter)
addNew.addEventListener("click", listItems)

function listItems(){
    let textBoxValue = document.getElementById("addNewText").value
    counter = (counter + 1)
    console.log(counter)

    if(textBoxValue === ""){
        console.log("clear")
        return
    }
    else{
        const newElement = document.createElement("div")

        newElement.classList.add("container")
        newElement.createElement("p", "button", "button")

        const container = document.getElementById("container");
        container.appendChild(newElement);
        

        console.log(container)
    }
}