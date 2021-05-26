export let init = () => {
    ajouterTodoItem();
    modifierTodoItem();
    trierTodoItem();
}
//

let ajouterTodoItem = () => {

    let todoAjouter = document.querySelector('#todoAjouter');

    todoAjouter.addEventListener('click', eventClick => {

        let todoList, todoInput, btnArchiver, todoItem, divModifierDelete, btnModifier, btnDelete, inputTodo;

        todoInput = document.querySelector('#todoInput');
        todoList = document.querySelector('#todoList');

        btnArchiver = document.createElement('button');
        btnArchiver.innerHTML = "✔";

        todoItem = document.createElement('li');
        todoItem.className = "todoItem enCours";

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

let modifierTodoItem = () => {
    let todoList;
    todoList = document.querySelector('#todoList')

    todoList.addEventListener("click", eventClick => {
        switch (eventClick.target.innerHTML) {
            case "✔":
                eventClick.target.parentElement.classList.remove("enCours")
                eventClick.target.parentElement.classList.add("archiver")
                break;

            case "✏":
                eventClick.target.parentElement.parentElement.querySelector('input').readOnly == false ? eventClick.target.parentElement.parentElement.querySelector('input').readOnly = true : eventClick.target.parentElement.parentElement.querySelector('input').readOnly = false;
                break;

            case "❌":
                eventClick.target.parentElement.parentElement.remove()
                break;
        }
    })
}

let trierTodoItem = () => {
    let btnEnCours, btnFinis, btnTous, todoList
    btnEnCours = document.querySelector('#triEnCours');
    btnFinis = document.querySelector('#triFinis');
    btnTous = document.querySelector('#triTous')
    todoList = document.querySelector('#todoList')

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}