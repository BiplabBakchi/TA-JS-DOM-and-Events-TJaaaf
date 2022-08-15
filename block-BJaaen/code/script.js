let userRoot = document.querySelector('.user-icons');
let computerRoot = document.querySelector('.computer-icons');
let result = document.querySelector('h3');
let resetBtn = document.querySelector('.reset');

let dataSet = [
  {
    name: 'rock',
    beats: 'scissors',
  },
  {
    name: 'paper',
    beats: 'rock',
  },
  {
    name: 'scissors',
    beats: 'paper',
  },
]

let userSelected = {},
 computerSelected = {};

function getWinner(user, computer) {
    if(user.name === computer.name) {
        result.innerText = 'Draw';
    }else if (user.beats === computer.name)  {
        result.innerText = 'You Won';

    }else {
        result.innerText = 'You Lost';
    }
}

function getRandomNumber(max=3) {
   return Math.floor(Math.random() * max);
}

function createUserLayout () {
    userRoot.innerHTML = '';
    dataSet.forEach((icon)=> {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;
    if(userSelected.name === icon.name) {
        li.classList.add('selected')
    }
    li.addEventListener('click', ()=> {
        userSelected = icon;
        computerSelected = dataSet[getRandomNumber()];
        getWinner(userSelected, computerSelected);
        createComputerLayout();
        createUserLayout();
        console.log(userSelected, computerSelected);
    })
    li.append(i);
    userRoot.append(li);
    });
}
createUserLayout();

function createComputerLayout () {
    computerRoot.innerHTML = '';
    dataSet.forEach((icon)=> {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;
    if(computerSelected.name === icon.name) {
        li.classList.add('selected')
    }
    li.append(i);
    computerRoot.append(li);
    });
}
createComputerLayout();

resetBtn.addEventListener('click',()=> {
    userSelected = {};
    computerSelected = {};
    createUserLayout();
    createComputerLayout();
    result.innerText = '';
});
