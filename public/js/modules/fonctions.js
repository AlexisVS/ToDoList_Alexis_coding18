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
        btnArchiver.innerHTML = "✔️";

        todoItem = document.createElement('li');
        todoItem.className = "todoItem enCours";

        inputTodo = document.createElement('input');
        inputTodo.value = todoInput.value;
        inputTodo.readOnly = true;

        divModifierDelete = document.createElement('div');
        divModifierDelete.id = "divModifierDelete"

        btnModifier = document.createElement('button');
        btnModifier.innerHTML = "✏️";

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
            case "✔️":
                eventClick.target.parentElement.classList.remove("enCours")
                eventClick.target.parentElement.classList.add("archiver")
                break;

            case "✏️":
                eventClick.target.parentElement.parentElement.querySelector('input').readOnly == false ? eventClick.target.parentElement.parentElement.querySelector('input').readOnly = true : eventClick.target.parentElement.parentElement.querySelector('input').readOnly = false;
                break;

            case "❌":
                eventClick.target.parentElement.parentElement.remove()
                break;
        }
    })
}

let trierTodoItem = () => {
    let btnEnCours, btnFinis, btnTous, todoList, todoListChildren
    btnEnCours = document.querySelector('#triEnCours');
    btnFinis = document.querySelector('#triFinis');
    btnTous = document.querySelector('#triTous')
    todoList = document.querySelector('#todoList')
    todoListChildren = Array.from(todoList.children)

    document.body.addEventListener('click', eventClick => {
        switch (eventClick.target.innerHTML) {

            // ! si il y a archiver alors tu mets is-dnone
            case "En cours":
                Array.from(todoList.children).forEach(e => {
                    if (e.classList.contains("enCours")) {
                        e.classList.remove('is-dnone')
                    }
                })
                
                Array.from(todoList.children).forEach(e => {
                    if (e.classList.contains("archiver")) {
                        e.classList.add('is-dnone')
                    }
                })

                break;

            // ! si il y a is-dnone retirer is-dnone
            // ! puis si il y a enCours mettre is-dnone
            case "Finis":
                Array.from(todoList.children).forEach(e => {
                    if (e.classList.contains("is-dnone")) {
                        e.classList.remove('is-dnone')
                    }
                })

                Array.from(todoList.children).forEach(e => {
                    if (e.classList.contains("enCours")) {
                        e.classList.add('is-dnone')
                    }
                })
                break;

            // ! si il y a is-dnone retirer is-dnone
            case "Tous":
                Array.from(todoList.children).forEach(e => {
                    if (e.classList.contains("is-dnone")) {
                        e.classList.remove('is-dnone')
                    }
                })
                break;
        }
    })
}