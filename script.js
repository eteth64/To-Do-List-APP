const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

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