document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    const todoList = document.getElementById('todo-list');

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todoSpan = document.createElement('span');
    todoSpan.innerText = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(todoSpan);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);

    todoInput.value = '';
}

document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
