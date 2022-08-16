let form = document.querySelector("form");
let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = (form.elements.text.value);
    userInfo.email = (form.elements.email.value);
    userInfo.gendre = (form.elements.gender.value);
    userInfo.color =(form.elements.color.value);
    userInfo.range =(form.elements[4].value);
    userInfo.genre = (form.elements.drone.value);
    userInfo.terms = (form.elements.terms.checked);
    console.log(userInfo);
};
form.addEventListener('submit', handleSubmit);

/*
<h1>Hello Name</h1>
      <h2>Email: exp@gmail.com</h2>
      <h2>You LOve: Movies</h2>
      <h2>Color: #ffffff</h2>
      <h2>8</h2>
      <h2>Book: Fiction #fffff</h2>
      <h2>You agreed to terms and  condition</h2>
*/
/*
let rootElement = document.querySelector('.model')
let h2 = document.querySelector('h1');
function createLayout(userInfo) {
    userInfo.forEach((info) => {
        document.createElement
    
    })
}
*/

