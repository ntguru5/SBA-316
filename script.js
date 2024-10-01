/**
 * PSEUDOCODE
 * Create task list form with different priorities
 * Checkbox should strikethrough task
 * Be able to delete task
 * Be able to clear all tasks
 * Add some validation for form
 */

// body style
// load Source Code Pro google font
document.body.style.fontFamily = 'Source Code Pro', 'monospace';
document.body.style.backgroundColor = 'azure';

// set font for everything else
const formElements = document.querySelectorAll('button, input, select');
formElements.forEach((element) => {
    element.style.fontFamily = "'Source Code Pro', 'monospace'";
});

// cache elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');
const clearTaskBtn = document.querySelector('#clearTaskBtn');

// event listeners
taskForm.addEventListener('submit', handleTaskSubmit);
clearTaskBtn.addEventListener('click', clearCompletedTasks);

// cache document fragment
const fragment = document.createDocumentFragment();

// Task submission handler
function handleTaskSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const taskText = taskInput.value; // Get task input value
    const priority = document.getElementById('priority').value; // Get selected priority

    // Validate input
    if (taskText.length < 3) {
        alert('Task name must be at least 3 characters long');
        return; // Exit if input is invalid
    }

    // Create task item using createElement
    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskText} (${priority})`; // Display task text and priority

    // Append task item to the task list
    taskList.appendChild(taskItem);

    // Clear input field after submission
    taskInput.value = '';
}
