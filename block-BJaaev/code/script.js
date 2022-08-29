let inputText = document.querySelector('.text');
let root = document.querySelector('ul');
let allTodos = JSON.parse(localStorage.getItem('todos')) || [];

function handleEvent(event) {
    let value = event.target.value
  if(event.keyCode === 13 && value !== "") {
    todo = {
        name:  value,
        isDone: false
       }
       allTodos.push(todo);
       event.target.value = "";
       localStorage.setItem('todos', JSON.stringify(allTodos));
       createUI();
  }
}

function handleDelete(event) {
   let id = event.target.dataset.id;
    allTodos.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    createUI();
}

function handleToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    localStorage.setItem('todos', JSON.stringify(allTodos));
    createUI();
}

function createUI() {
    root.innerHTML = "";
    allTodos.forEach((todo, index) => {
        let li = document.createElement('li');
        let input  = document.createElement('input');
        input.type = "checkBox";
        input.setAttribute('data-id', index)
        input.checked = todo.isDone;
        input.addEventListener('change', handleToggle)
        let p = document.createElement('p');
        p.innerText = todo.name;
        let span = document.createElement('span');
        span.setAttribute("data-id", index)
        span.addEventListener('click', handleDelete);
        span.innerText = 'X';
        li.append(input, p, span);
        root.append(li);
    }); 
}

inputText.addEventListener('keyup', handleEvent);







