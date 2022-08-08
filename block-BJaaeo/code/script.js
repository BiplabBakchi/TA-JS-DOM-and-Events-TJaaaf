let screen = document.getElementById('screen');
let btn = document.querySelectorAll('td');
let screenValue = '';

btn.forEach((item)=> {
    item.addEventListener('click', (e) => {
       let text = e.target.innerText;
       if(text == '*') {
        screenValue += '*'
        screen.value = screenValue;
       }else if (text == 'C') {
        screenValue = ""
        screen.value = screenValue;
       }else if (text == '='){
        screen.value = eval(screenValue);
       }else {
        screenValue += text;
        screen.value = screenValue;
       } 
    }) 
})