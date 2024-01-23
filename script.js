const burgerLine = document.querySelector('.burger-menu');
const burgerList = document.querySelector('.menu__list');
const burgerMenu = document.querySelector('.header__navigation');

const burgerItem = document.querySelectorAll('.header__navigation-item');

burgerLine.addEventListener('click', () => {
  burgerMenu.classList.toggle('hamburger__menu__active');

  burgerLine.classList.toggle('active');
})


for (let i = 0; i < burgerItem.length; i++) {
  burgerItem[i].addEventListener('click', () => {
    burgerMenu.classList.remove('hamburger__menu__active');

    burgerLine.classList.remove('active');
  })
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}