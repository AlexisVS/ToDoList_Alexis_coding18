export let init = () => {
    initLocalStorageItems();
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
                let divWrapper, h2, div, confirm, cancel, currentTodoItem;

                currentTodoItem = eventClick.target.parentElement.parentElement
                let deleteCurrentTodoItem = (currentTodoItem) => {
                    currentTodoItem.remove()
                }


                divWrapper = document.createElement("div");
                divWrapper.id = "overlayWrapper";

                div = document.createElement("div");
                div.id = "overlayContent";

                h2 = document.createElement('h2');
                h2.innerHTML = "Êtes vous sure ?";

                cancel = document.createElement('button');
                cancel.id = "btnCancel";
                cancel.innerHTML = "❌";
                cancel.addEventListener('click', eventClick => {
                    eventClick.target.parentElement.parentElement.remove()
                })

                confirm = document.createElement('button');
                confirm.id = "btnConfirm";
                confirm.innerHTML = "✔️";
                confirm.addEventListener('click', eventClick => {
                    deleteCurrentTodoItem(currentTodoItem);
                    eventClick.target.parentElement.parentElement.remove();
                })

                div.prepend(h2, confirm, cancel)
                divWrapper.appendChild(div)
                document.body.append(divWrapper)
                break;
        }
    })

    todoList.addEventListener("keydown", eventKey => {
        let todoListItems
        todoListItems = Array.from(document.querySelector('#todoList').children)
        if (eventKey.key == "Enter") {
            todoListItems.forEach(el => {
                console.log(el.children[1]);
                if (el.children[1].readOnly == false) {
                    el.children[1].readOnly = true
                }
            })
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


let uppdateLocalStorage = () => {
    let todoListItems, arr = [];
    todoListItems = Array.from(document.querySelector('#todoList').children);

    todoListItems.forEach(el => {
        let tempArr;
        tempArr = [];
        tempArr.push(el.children[1].value, el.className);
        arr.push(tempArr);
    })
    window.localStorage.setItem("TodoListItems", JSON.stringify(arr));
}
document.body.addEventListener('click', uppdateLocalStorage)



let initLocalStorageItems = () => {

    if (window.localStorage.getItem("TodoListItems") != null) {

        let storage, todoList, btnArchiver, todoItem, divModifierDelete, btnModifier, btnDelete, inputTodo;

        storage = JSON.parse(window.localStorage.getItem("TodoListItems"))

        storage.forEach(el => {
            todoList = document.querySelector('#todoList');

            btnArchiver = document.createElement('button');
            btnArchiver.innerHTML = "✔️";

            todoItem = document.createElement('li');
            todoItem.className = el[1];

            inputTodo = document.createElement('input');
            inputTodo.value = el[0];
            inputTodo.readOnly = true;

            divModifierDelete = document.createElement('div');
            divModifierDelete.id = "divModifierDelete"

            btnModifier = document.createElement('button');
            btnModifier.innerHTML = "✏️";

            btnDelete = document.createElement('button');
            btnDelete.innerHTML = "❌";

            divModifierDelete.prepend(btnModifier, btnDelete);

            todoItem.prepend(btnArchiver, inputTodo, divModifierDelete);

            todoList.appendChild(todoItem);
        })
    }
}