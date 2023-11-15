
const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;

  if (taskInput.style.display === "none") {
    taskInput.style.display = "block";
  } else {
    taskInput.style.display = "none";
  }
  if (!task) return;
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  const taskText = document.createElement("div");
  taskText.classList.add("task-text");
  taskText.innerHTML = task;
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = () => {
    taskList.removeChild(newTask);
  };
  newTask.appendChild(taskText);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  taskInput.value="";
  
};      
const sortButton = document.getElementById("sortButton");             
let isSorted = false;
const sortTasks = () => {
  const taskList = document.getElementById("taskList");
  const tasks = Array.from(taskList.getElementsByClassName("task"));
  if (isSorted) {
    tasks.sort((a, b) => a.innerText.localeCompare(b.innerText));
    sortButton.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none">
    <rect x="2.5" width="2.5" height="12.5" fill="#C4C4C4"/>
    <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)" fill="#C4C4C4"/>
    <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)" fill="#C4C4C4"/>
    <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)" fill="#C4C4C4"/>
    <path d="M3.75 15L0.502405 10.3125L6.9976 10.3125L3.75 15Z" fill="#C4C4C4"/>
  </svg>`
    isSorted = false;
  } else {
    tasks.sort((a, b) => b.innerText.localeCompare(a.innerText));
    sortButton.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none">
    <rect x="5" y="15" width="2.5" height="12.5" transform="rotate(-180 5 15)" fill="#C4C4C4"/>
    <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)" fill="#C4C4C4"/>
    <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)" fill="#C4C4C4"/>
    <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)" fill="#C4C4C4"/>
    <path d="M3.75 6.55671e-07L6.99759 4.6875L0.502404 4.6875L3.75 6.55671e-07Z" fill="#C4C4C4"/>
  </svg>`
    isSorted = true;
  }
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    taskList.appendChild(task);                 
  });                      
};                         
sortButton.onclick = sortTasks;