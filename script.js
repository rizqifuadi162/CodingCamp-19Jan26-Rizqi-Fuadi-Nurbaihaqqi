document.getElementById('taskForm').onsubmit = function(event) {
    event.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;

    addTask(taskName, dueDate);
    this.reset(); // Reset form after submission
};

function addTask(taskName, dueDate) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `${taskName} (Jatuh Tempo: ${dueDate}) <button onclick="removeTask(this)">Hapus</button>`;
    taskList.appendChild(li);
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

document.getElementById('filter').oninput = function() {
    const filterValue = this.value.toLowerCase();
    const tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(task => {
        const taskText = task.textContent.toLowerCase();
        if (taskText.includes(filterValue)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
};