function main() {
let inputText = document.querySelector('.text');
let rootElm = document.querySelector('ul');

let allTodos = [];

function handleInput(event) {
    let value = event.target.value
    if (event.keyCode === 13 && value !== "") {
        let todo = {
            name: value,
            isDone: false
        };
        allTodos.push(todo);
        event.target.value = "";
        createUI(allTodos, rootElm)
    }   
}

function handleDelete(event) {
    let id =  event.target.dataset.id;
    allTodos.splice(id, 1);
    createUI(allTodos, rootElm);
}

function handeToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    createUI(allTodos, rootElm);
}

function createUI (data, rootElm) {
    rootElm.innerHTML = "";
    data.forEach((todo, index) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.setAttribute('data-id', index)
    input.type = "checkbox";
    input.addEventListener('input', handeToggle);
    input.checked = todo.isDone;
    let p = document.createElement('p');
    p.innerText = todo.name
    let span = document.createElement('span');
    span.setAttribute('data-id', index)
    span.innerText = "X";
    span.addEventListener('click', handleDelete)
 
    li.append(input, p, span);
    rootElm.append(li);
    })   
}
createUI(allTodos, rootElm)
inputText.addEventListener("keyup", handleInput);
}
main();