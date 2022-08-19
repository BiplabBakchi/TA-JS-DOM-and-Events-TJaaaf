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
    if (userNameElm.value.length < 5) {
        userNameError = "Username Can't be less than 5 characters";
    }else {
        userNameError = '';
    }
    userNameElm.nextElementSibling.innerText = userNameError;

    let nameElm = event.target.elements.name;
    if (hasNumber(nameElm.value)){
        nameError = "You can't use number in the name field";
    }else {
       nameError = '';
    }
    nameElm.nextElementSibling.innerText = nameError;

    let emailElm = event.target.elements.email;

    if (!Character(emailElm.value)){
     emailError = "Not a valid email";
    }else if (emailElm.value.length < 6) {
     emailError = "Not a valid email"
    }else {
     emailError = "";
    }
    emailElm.nextElementSibling.innerText = emailError;

    let phoneElm = event.target.elements.phone;
    if (phoneElm.value.length < 7) {
        phoneError = `Phone number can't be less than 7 numbers`;
    }else {
        phoneError = '';
    }

    let passwordElm = event.target.elements.password;
    let confirmPasswordElm = event.target.elements.confirm_password;
    if (passwordElm.value !== confirmPasswordElm.value) {
        passwordError = `Password Doesn't match`;
    }else {
        passwordError = "";
    }  
    confirmPasswordElm.nextElementSibling.innerText = passwordError; 
    alert (`User Added Successfully!`);
} 

form.addEventListener('submit', handleSubmit);


