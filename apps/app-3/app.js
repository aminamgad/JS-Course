// Dom Elements

const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const filterAll = document.getElementById("filter-all");
const filterCompleted = document.getElementById("filter-completed");
const filterPending = document.getElementById("filter-pending");

// Local storage for data

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasksAtLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// JSON.parse(); // convert a JSON to an object
// JSON.stringify(); //convert an JS value to JSON format

// let getItem = localStorage.getItem('numbers')
// console.log(getItem);

// localStorage.setItem('numbers',56)

// add task
function addTask(description) {
  const task = {
    id: Date.now(),
    description,
    completed: false,
  };
  tasks.push(task);
  saveTasksAtLocalStorage();
  renderTasks();
}

// delete task

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasksAtLocalStorage();
  renderTasks();
}

// toggle task completion

function toggle(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  task.completed = !task.completed;
  saveTasksAtLocalStorage();
  renderTasks();
}

// render tasks

function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  const filterTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  filterTasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    if (task.completed) taskElement.classList.add("completed");

    taskElement.innerHTML = `
        <span>${task.description} </span>
        <div> 
        <button onclick="toggle(${task.id})"> Toggle </button>
        <button onclick="deleteTask(${task.id})"> Delete </button>
        </div>
        `;
    taskList.appendChild(taskElement);
  });
}

//task form event
taskForm.addEventListener('submit' , function(event){
    event.preventDefault()
    const taskDescription = taskInput.value.trim()
    if(taskDescription){
        addTask(taskDescription)
        taskInput.value = ''
    }
})


// filters

filterAll.addEventListener('click' , () => renderTasks('all'))
filterCompleted.addEventListener('click' , () => renderTasks('completed'))
filterPending.addEventListener('click' , () => renderTasks('pending'))


renderTasks()