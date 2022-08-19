let form = document.querySelector("form");
let userInfo = {};
let modal = document.querySelector('.modal');
console.dir(modal);
let close = document.querySelector('.close');
function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = (form.elements.name.value);
    userInfo.email = (form.elements.email.value);
    userInfo.movies = (form.elements.gender.movies);
    userInfo.color =(form.elements.color.value);
    userInfo.rating =(form.elements.range.value);
    userInfo.genre = (form.elements.drone.value);
    userInfo.terms = (form.elements.terms.checked);
    console.log(userInfo);

    modal.style.display = "block";
    form.style.display = "none";

  // modal

  close.addEventListener("click", function () {
    form.style.display = "flex";
    modal.style.display = "none";
  });
  form.reset();
  modal.children[1].innerText = `Hello ${userInfo.name}`;
  modal.children[2].innerText = `Email: ${userInfo.email}`;
  modal.children[3].innerText = `You Love: ${userInfo.movies}`;
  modal.children[4].innerText = `Color: ${userInfo.color}`;
  modal.children[5].innerText = `Rating: ${userInfo.rating}`;
  modal.children[6].innerText = `Book Genre: ${userInfo.genre}`;
  if (userInfo.terms == true) {
    modal.children[7].innerText = `✅ You agreed to Terms and conditions`;
  } else {
    modal.children[7].innerText = `❌ You didn't agree to Terms and conditions`;
  }
};
form.addEventListener('submit', handleSubmit);

console.log(userInfo);
