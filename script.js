document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');

    addTaskBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('edit-btn')) {
            const textInput = e.target.previousElementSibling;
            textInput.readOnly = !textInput.readOnly;
            if (!textInput.readOnly) {
                textInput.focus();
            }
        } else if (e.target.type === 'checkbox') {
            const textInput = e.target.nextElementSibling;
            textInput.classList.toggle('completed', e.target.checked);
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.className = 'd-flex align-items-center mb-3';
        li.innerHTML = `
            <input type="checkbox" class="mr-2">
            <input type="text" value="${text}" class="form-control mr-2 task-text" readonly>
            <button class="edit-btn btn btn-info btn-sm mr-2">✎</button>
            <button class="delete-btn btn btn-danger btn-sm">✖</button>
        `;
        taskList.appendChild(li);
    }
});
