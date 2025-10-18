const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


// Load tasks from localStorage on page load
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(taskText => {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
    });
}

// Save tasks to localStorage
function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
// Event listener for the add button
addTaskBtn.addEventListener('click', addTask);
// Event listener for pressing Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
// Event delegation for marking tasks as completed
taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});

// Optional: Function to remove completed tasks
function removeCompletedTasks() {
    const completedTasks = document.querySelectorAll('.checked');
    completedTasks.forEach(task => task.remove());
}
// You can add a button in HTML to call this function if needed