let ul = document.querySelector('ul');
got.houses.forEach((house)=> {
    house.people.forEach((person) => {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let img = document.createElement("img");
        img.src = person.image
        let h2 = document.createElement('h2');
        h2.innerText = person.name;
        let p = document.createElement('p');
        p.innerText = person.description;
        let a = document.createElement('a');
        a.innerText = 'Know More!';
        a.href = person.wikiLink;
        div.append(img, h2);
        li.append(div, p, a); 
        ul.append(li); 
    })
})

let starks = document.querySelector('.starks');
let lannisters = document.querySelector('.lannisters');
let baratheons = document.querySelector('.baratheons');
let targaryens = document.querySelector('.targaryens');
let greyjoys = document.querySelector('.greyjoys');
let tyrells = document.querySelector('.tyrells');
let tulleys = document.querySelector(".tulleys");
let redwyne = document.querySelector('.redwyne');
let freys = document.querySelector('.freys')
let arryns = document.querySelector('.arryns');
let dothrakis = document.querySelector(".dothrakis");


let house = {};

starks.addEventListener('click', ()=> {
  let house =  got.houses[0].people;
   createUI(house);
})

lannisters.addEventListener('click', ()=> {
  let house = got.houses[1].people;
   createUI(house);
})

baratheons.addEventListener('click', ()=> {
    let house = got.houses[2].people;
     createUI(house);
})

targaryens.addEventListener('click', ()=> {
    let house = got.houses[3].people;
     createUI(house);
})

greyjoys.addEventListener('click', ()=> {
    let house = got.houses[4].people;
     createUI(house);
})

tyrells.addEventListener('click', ()=> {
    let house = got.houses[5].people;
     createUI(house);
})

tulleys.addEventListener('click', ()=> {
    let house = got.houses[6].people;
     createUI(house);
})

redwyne.addEventListener('click', ()=> {
    let house = got.houses[7].people;
     createUI(house);
})

freys.addEventListener('click', ()=> {
    let house = got.houses[8].people;
     createUI(house);
})

arryns.addEventListener('click', ()=> {
    let house = got.houses[9].people;
     createUI(house);
})

dothrakis.addEventListener('click', ()=> {
    let house = got.houses[10].people;
     createUI(house);
})

function createUI(house = house) {
    ul.innerHTML = "";
    house.forEach((person)=> {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let img = document.createElement("img");
        img.src = person.image
        let h2 = document.createElement('h2');
        h2.innerText = person.name;
        let p = document.createElement('p');
        p.innerText = person.description;
        let a = document.createElement('a');
        a.innerText = 'Know More!';
        a.href = person.wikiLink;
        div.append(img, h2);
        li.append(div, p, a); 
        ul.append(li); 
    })
}

let searchBar = document.getElementById('searchBar');
console.log(searchBar);
/*
let allCharacters = [];
got.houses.forEach((house)=> {
    house.people.forEach((person)=> {
       let characters =  person;
       allCharacters.push(characters);
    });
})
console.log(allCharacters);

allCharacters.forEach((person)=> {
    h =(person.name);
})
*/

function inputHandle(event) {
    
    if(event.keyCode === 13 ){
        let value = event.target.value
        let name = value.toLowerCase();
    }

   
}

searchBar.addEventListener('keyup', inputHandle);





