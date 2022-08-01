let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');

function generateRandomColor() {
    let hexCharacters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let color = '#';
    for(let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharacters[randomNumber];
    }
    return color;
}

function handlerClick() {
    let randomColor = generateRandomColor();
    firstBox.style.backgroundColor = randomColor;

}

function handlerMouseMove() {
    let randomColor = generateRandomColor();
    secondBox.style.backgroundColor = randomColor;

}

firstBox.addEventListener('click', handlerClick);
secondBox.addEventListener('mousemove', handlerMouseMove);