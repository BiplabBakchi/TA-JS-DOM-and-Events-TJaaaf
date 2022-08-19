let form = document.querySelector('form');

let userNameError = ''; 
let nameError = '';
let emailError = '';
let phoneError = '';
let passwordError = '';

function hasNumber(str) {
    return str.split("").some(e => Number(e));
}

function Character(str) {
    return str.includes("@");
}

function handleSubmit (event) {
    event.preventDefault();
    let userNameElm = event.target.elements.username;
    let parentElm = userNameElm.parentElement;
    if (userNameElm.value.length < 5) {
        userNameError = "Username Can't be less than 5 characters";
        parentElm.classList.add('error');
    }else {
        userNameError = '';
        parentElm.classList.remove('error');
        parentElm.classList.add('success');

    }
    userNameElm.nextElementSibling.innerText = userNameError;

    let nameElm = event.target.elements.name;
    parentElm = nameElm.parentElement;
    if (hasNumber(nameElm.value)){
        nameError = "You can't use number in the name field";
        parentElm.classList.add('error');
    }else {
       nameError = '';
       parentElm.classList.remove('error');
       parentElm.classList.add('success');
    }
    nameElm.nextElementSibling.innerText = nameError;

    let emailElm = event.target.elements.email;
    parentElm = emailElm.parentElement
    if (!Character(emailElm.value)){
     emailError = "Not a valid email";
     parentElm.classList.add('error');
    }else if (emailElm.value.length < 6) {
     emailError = "Not a valid email";
     parentElm.classList.add('error');
    }else {
     emailError = "";
     parentElm.classList.remove('error');
     parentElm.classList.add('success');
    }
    emailElm.nextElementSibling.innerText = emailError;
    parentElm = emailElm.parentElement;
    let phoneElm = event.target.elements.phone;
    parentElm = parentElm.parentElement;
    if (phoneElm.value.length < 7) {
        phoneError = `Phone number can't be less than 7 numbers`;
        parentElm.classList.add('error');
    }else {
        phoneError = '';
        parentElm.classList.remove('error');
        parentElm.classList.add('success');
    }
    phoneElm.nextElementSibling.innerText = phoneError;
    let passwordElm = event.target.elements.password;
    let confirmPasswordElm = event.target.elements.confirm_password;
    parentElm = confirmPasswordElm.parentElement;
    if (passwordElm.value !== confirmPasswordElm.value) {
        passwordError = `Password Doesn't match`;
        parentElm.classList.add('error');
    }else {
        passwordError = "";
        parentElm.classList.remove('error');
        parentElm.classList.add('success');
    }  
    confirmPasswordElm.nextElementSibling.innerText = passwordError; 
    alert (`User Added Successfully!`);
} 

form.addEventListener('submit', handleSubmit);


