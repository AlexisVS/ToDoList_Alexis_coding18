export let init = () => {
    ajouterTodoItem()
}

let ajouterTodoItem = () => {

    let todoAjouter = document.querySelector('#todoAjouter');

    todoAjouter.addEventListener('click', eventClick => {

        let todoList, todoInput, btnArchiver, todoItem, divModifierDelete, btnModifier, btnDelete, inputTodo;

        todoInput = document.querySelector('#todoInput');
        todoList = document.querySelector('#todoList');

        btnArchiver = document.createElement('button');
        btnArchiver.innerHTML = "✔";

        todoItem = document.createElement('li');
        todoItem.className = "todoItem";

        inputTodo = document.createElement('input');
        inputTodo.value = todoInput.value;
        inputTodo.readOnly = true;

        divModifierDelete = document.createElement('div');
        divModifierDelete.id = "divModifierDelete"

        btnModifier = document.createElement('button');
        btnModifier.innerHTML = "✏";

        btnDelete = document.createElement('button');
        btnDelete.innerHTML = "❌";

        divModifierDelete.prepend(btnModifier, btnDelete);

        todoItem.prepend(btnArchiver, inputTodo, divModifierDelete);

        todoList.appendChild(todoItem)
    })
}