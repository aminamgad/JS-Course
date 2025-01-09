// app.js

// DOM elements
const taskInput = document.getElementById('task-input');
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const filterAll = document.getElementById('filter-all');
const filterCompleted = document.getElementById('filter-completed');
const filterPending = document.getElementById('filter-pending');

// Load tasks from localStorage on page load
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add Task Function
function addTask(description) {
    const task = {
        id: Date.now(),
        description,
        completed: false
    };
    tasks.push(task);
    saveTasksToLocalStorage();
    renderTasks();
}

// Delete Task Function
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToLocalStorage();
    renderTasks();
}

// Toggle Task Completion
function toggleCompletion(taskId) {
    const task = tasks.find(task => task.id === taskId);
    task.completed = !task.completed;
    saveTasksToLocalStorage();
    renderTasks();
}

// Render Tasks
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    
    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;  // Show all tasks
    });

    filteredTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        if (task.completed) taskElement.classList.add('completed');
        
        taskElement.innerHTML = `
            <span>${task.description}</span>
            <div>
                <button onclick="toggleCompletion(${task.id})">Toggle</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        taskList.appendChild(taskElement);
    });
}

// Save tasks to localStorage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event Listeners
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskDescription = taskInput.value.trim();
    if (taskDescription) {
        addTask(taskDescription);
        taskInput.value = '';
    }
});

filterAll.addEventListener('click', () => renderTasks('all'));
filterCompleted.addEventListener('click', () => renderTasks('completed'));
filterPending.addEventListener('click', () => renderTasks('pending'));

// Render tasks when the page is loaded
renderTasks();
