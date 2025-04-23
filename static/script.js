document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('taskList');
  const taskForm = document.getElementById('taskForm');
  const taskNameInput = document.getElementById('taskName');
  const listTasksBtn = document.getElementById('listTasksBtn');

  // Fetch and display tasks
  function loadTasks() {
    fetch('/tasks')
      .then(res => res.json())
      .then(tasks => {
        taskList.innerHTML = ''; // Clear previous list
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.textContent = `${task.id}. ${task.name} - ${task.status}`;
          taskList.appendChild(li);
        });
      })
      .catch(err => {
        console.error("Error loading tasks:", err);
      });
  }

  // Handle task creation
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = taskNameInput.value.trim();
    if (!name) return;

    fetch('/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
    .then(() => {
      taskNameInput.value = '';
      loadTasks(); // Refresh list after creating
    })
    .catch(err => {
      console.error("Error creating task:", err);
    });
  });

  // Handle List Tasks button click
  listTasksBtn.addEventListener('click', () => {
    loadTasks();
  });

  // Optional: load tasks when page loads
  loadTasks();
});
