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
    });
}

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});