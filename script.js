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
