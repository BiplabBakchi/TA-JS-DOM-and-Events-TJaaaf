let root = document.querySelector('.cards');
let rootTags = document.querySelector('.tags');
let searchBar = document.getElementById('search');

let allCharacters = got.houses.reduce((acc, cv)=> {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let allTags = got.houses.map(house=> house.name);
let activeHouse = '';

function createUI(data = []) {
    root.innerHTML = '';
    data.forEach((people)=> {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let img = document.createElement("img");
        img.src = people.image
        let h2 = document.createElement('h2');
        h2.innerText = people.name;
        let p = document.createElement('p');
        p.innerText = people.description;
        let a = document.createElement('a');
        a.innerText = 'Know More!';
        a.href = people.wikiLink;
        div.append(img, h2);
        li.append(div, p, a); 
        root.append(li);
    })    
}

function createTagsUI(tags = []) {
    rootTags.innerHTML = '';
    tags.forEach((tag)=> {
        let button = document.createElement('button');
        button.innerText = tag;
        if (activeHouse === tag) {
            button.classList.add('active');
        }
        button.addEventListener("click", ()=> {
            activeHouse = tag;
            let charactersOfTheHouse = got.houses.find(house => house.name === tag).people || [];
           createUI(charactersOfTheHouse);
           createTagsUI(allTags);
        })
        rootTags.append(button);
    })    
}

function handleSearch(event) {
    let searchText = event.target.value.toLowerCase();
    let filterPeople = allCharacters.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()));
    createUI(filterPeople);
}

searchBar.addEventListener('input', handleSearch);
createUI(allCharacters);
createTagsUI(allTags);