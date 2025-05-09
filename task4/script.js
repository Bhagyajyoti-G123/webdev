const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInput = document.getElementById("task-input");
  const taskDateTime = document.getElementById("task-datetime");
  addTask(taskInput.value, taskDateTime.value);
  taskInput.value = "";
  taskDateTime.value = "";
});

function addTask(text, datetime) {
  const li = document.createElement("li");
  li.className = "task";

  const span = document.createElement("span");
  span.textContent = `${text} (Due: ${new Date(datetime).toLocaleString()})`;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const newText = prompt("Edit task", text);
    const newDateTime = prompt("Edit datetime", datetime);
    if (newText && newDateTime) {
      span.textContent = `${newText} (Due: ${new Date(newDateTime).toLocaleString()})`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);
}
