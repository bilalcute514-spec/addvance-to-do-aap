
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      if (task.completed) li.classList.add('completed');

      li.innerHTML = `
        <span>${task.text}</span>
        <div class="actions">
          <button class="complete" onclick="toggleTask(${index})">✔</button>
          <button class="delete" onclick="deleteTask(${index})">✖</button>
        </div>
      `;

      taskList.appendChild(li);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function addTask() {
    if (taskInput.value.trim() === '') {
      alert('Please enter a task');
      return;
    }

    tasks.push({ text: taskInput.value, completed: false });
    taskInput.value = '';
    renderTasks();
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

  renderTasks();