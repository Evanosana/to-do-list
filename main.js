const addNew = document.getElementById("addNew");
const container = document.getElementById("container");

let textBox = document.getElementById("addNewText");
let memory
let finished

if(!localStorage.length){
    memory = []
    finished = []
} else{
    memory = JSON.parse(localStorage.getItem('memory'));
    finished = JSON.parse(localStorage.getItem('finished'));
    console.log(localStorage)
    runExistingTasks();
}

addNew.addEventListener("click", addNewRow);
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addNewRow();
    }
});

textBox.focus();
function addNewRow(){
    let textBoxItem = textBox.value;
    if(!textBoxItem){
        return;
    }
    memory.push(textBoxItem);
    finished.push(textBoxItem+'n');

    const newRowDiv = document.createElement("div");
    const newRowLabel = document.createElement("label");
    const newRowFinishButton = document.createElement("button");
    const newRowDeleteButton = document.createElement("button");

    container.appendChild(newRowDiv);
    newRowDiv.appendChild(newRowLabel);
    newRowDiv.appendChild(newRowFinishButton);
    newRowDiv.appendChild(newRowDeleteButton);

    newRowDiv.classList.add("row");
    newRowLabel.classList.add("child");
    newRowFinishButton.classList.add("rowButtonFinished", "rowButton");
    newRowDeleteButton.classList.add("rowButtonDelete", "rowButton");

    newRowLabel.innerText = textBoxItem;
    newRowFinishButton.textContent = 'Finish';
    newRowDeleteButton.textContent = 'Delete';

    newRowFinishButton.id = "finishButton";
    newRowFinishButton.addEventListener("click", finishButton);
    newRowDeleteButton.addEventListener("click", deleteButton);

    textBox.value = '';
    textBox.focus();

    localStorage.setItem('memory', JSON.stringify(memory));
    localStorage.setItem('finished', JSON.stringify(finished));
    console.log(localStorage);
}
function finishButton(event){
    const finishButton = event.target.previousElementSibling
    const label = event.target.parentElement.querySelector('.child').innerText;
    if(finishButton.classList.contains("finished")){
        console.log(true);
        finishButton.classList.remove("finished");
        const finishButtonUnmark = event.target;
        finishButtonUnmark.innerText = "Finish";
        for(let i = 0; i < finished.length; i++){
            if(finished[i].includes(label)){
                finished[i] = label+'n';
                localStorage.setItem('finished', JSON.stringify(finished))
                console.log(localStorage)
            }
        }
        return;
    }
    for(let i = 0; i < finished.length; i++){
        if(finished[i].includes(label)){
            finished[i] = label+'y';
            localStorage.setItem('finished', JSON.stringify(finished))
            console.log(localStorage)
        }
    }
    finishButton.classList.add("finished");
    const finishButtonUnmark = event.target;
    finishButtonUnmark.innerText = "Unmark";
}
function deleteButton(event){
    const deleteRow = event.target.parentElement;
    deleteRow.remove();

    const label = event.target.parentElement.querySelector('.child').innerText;
    for(let i = 0; i < memory.length; i++){
        if(memory[i] === label){
            console.log(memory[i]);
            memory.splice(i, 1);
        }
    }
    for(let i = 0; i < finished.length; i++){
        if(finished[i].includes(label)){
            console.log(finished[i]);
            console.log(i)
            finished.splice(i, 1);
        }
    }
    localStorage.setItem('memory', JSON.stringify(memory))
    localStorage.setItem('finished', JSON.stringify(finished))
    console.log(localStorage)
}
function runExistingTasks(){
    // for(let i = 0; i < finished.length; i++){
    //     if(finished[i].includes('y')){
    //         console.log(memory[i])
    //     }
    // }

    for(let i = 0; i < memory.length; i++){
        const newRowDiv = document.createElement("div");
        const newRowLabel = document.createElement("label");
        const newRowFinishButton = document.createElement("button");
        const newRowDeleteButton = document.createElement("button");

        container.appendChild(newRowDiv);
        newRowDiv.appendChild(newRowLabel);
        newRowDiv.appendChild(newRowFinishButton);
        newRowDiv.appendChild(newRowDeleteButton);

        newRowDiv.classList.add("row");
        newRowLabel.classList.add("child");
        newRowFinishButton.classList.add("rowButtonFinished", "rowButton");
        newRowDeleteButton.classList.add("rowButtonDelete", "rowButton");

        newRowLabel.innerText = memory[i];
        newRowFinishButton.textContent = 'Finish';
        newRowDeleteButton.textContent = 'Delete';

        newRowFinishButton.id = "finishButton";
        newRowFinishButton.addEventListener("click", finishButton);
        newRowDeleteButton.addEventListener("click", deleteButton);

        if (finished[i].includes('y')) {
            newRowLabel.classList.add("finished");
            newRowFinishButton.innerText = "Unmark";
        }
    }
}

