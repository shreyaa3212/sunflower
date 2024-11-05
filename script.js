const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");

        // Create the checkbox and append it to the li
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        // Append the text input after the checkbox
        let textNode = document.createTextNode(inputBox.value);
        li.appendChild(textNode);
        
        // Create and append the span element with the '×' symbol
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);

        // Append the li to the list container
        listContainer.appendChild(li);

        // Clear the input box for the next task
        inputBox.value = ""; 

        // Save the data to local storage
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } 
    else if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        e.target.parentElement.classList.toggle("checked");
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
