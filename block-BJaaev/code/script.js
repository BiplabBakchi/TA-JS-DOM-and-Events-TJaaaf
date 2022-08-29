let inputText = document.querySelector('.text');
let root = document.querySelector('ul');
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear"); 
let activeButton = "all";

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

function createUI( data = allTodos) {
    root.innerHTML = "";
    data.forEach((todo, index) => {
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
//For clearing todos
clear.addEventListener("click", () => {
    allTodos = allTodos.filter(todo => !todo.isDone);
    activeButton = "clear";
    updateActiveButton();
    localStorage.setItem('todos', JSON.stringify(allTodos));
    createUI();
})
//For Active todos
active.addEventListener("click", () => {
    let notCompleted = allTodos.filter(todo => !todo.isDone);
    createUI(notCompleted);
    activeButton = "active";
    updateActiveButton();
})
//For Completed todos
completed.addEventListener("click", ()=> {
    let completed = allTodos.filter(todo => todo.isDone);
    createUI(completed);
    activeButton = "completed";
    updateActiveButton();
})
//For all todos
all.addEventListener("click", ()=> {
    createUI();
    activeButton = "all";
    updateActiveButton();
})

function updateActiveButton(btn = activeButton) {
    all.classList.remove('selected');
    active.classList.remove('selected');
    completed.classList.remove('selected');
    if(btn === "all") {
        all.classList.add('selected');
    }
    if(btn === "active") {
        active.classList.add('selected');
    }
    if(btn === "completed") {
        completed.classList.add('selected');
    }
    if(btn === "clear") {
        clear.classList.add('selected');
    }
}
updateActiveButton();
//Handle Event
inputText.addEventListener('keyup', handleEvent);
