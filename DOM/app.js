// DEFINE UI var

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// Load all event listener
loadEventListener();

function loadEventListener() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear task event
  clearBtn.addEventListener('click', clearTasks);

  // Filter task
  filter.addEventListener('keyup', filterTask);
}

// Get tasks function

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function (task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="material-icons">clear</i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}
// Add task function
function addTask(e) {
  e.preventDefault();
  if (taskInput.value !== '') {
    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // Create link in li element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // Add icon
    link.innerHTML = '<i class="material-icons">clear</i>';
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
    storeTask(taskInput.value);
  }
  // Clear input
  taskInput.value = '';
}

// Add task function
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      removeLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Clear tasks function
function clearTasks() {
  // taskList.innerHTML = '';
  // https://jsperf.com/innerhtml-vs-removechild
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearStoreTasks();
}

// Filter task function

function filterTask(e) {
  const txt = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(txt) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

// Store task to local storage
function storeTask(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from local storage
function removeLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // console.log(taskItem.firstChild.textContent);
  tasks.forEach(function (item, index) {
    if (taskItem.firstChild.textContent === item) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearStoreTasks() {
  localStorage.clear();
}
