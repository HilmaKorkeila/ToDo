class Task {
    constructor(task, category) {
        this.task = task;
        this.category = category;
    }
}

class DuedateTask extends Task {
    constructor(task, category, duedate) {
        super(task, category);
        this.duedate = duedate;
    }
}

// Promise delay function to create a delay for the delete button
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let tasks = [];

const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("categoryInput");
const duedateInput = document.getElementById("duedateInput");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");


function addTask() {
    const task = taskInput.value; 
    const category = categoryInput.value; 
    const duedate = duedateInput.value; 

    const newTask = new DuedateTask(task, category, duedate);

    tasks.push(newTask);

    displayTasks();
}

function displayTasks() {
    todoList.innerHTML = "";

    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task.task + " | " + task.category + " | " + task.duedate;

        todoList.appendChild(li);

        // create delete button for each task
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "Delete";

        // add event listener to delete button to remove the task from the list
        deleteButton.onclick = async function() {
            // wait 1second before removing the task
            await delay(1000);
            todoList.removeChild(li);
        }

        // add delete button to the task item
        li.appendChild(deleteButton);
    });

    // delete input values after adding the task to the list
    document.getElementById("taskInput").value = "";
    document.getElementById("categoryInput").value = "";
    document.getElementById("duedateInput").value = "";
}

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});