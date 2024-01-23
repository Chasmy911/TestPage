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
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
}

const images = document.querySelectorAll('.slider__list');
const buttonleft = document.querySelector('.prev')
const buttonraiht = document.querySelector('.next')
let dots = document.querySelectorAll('.slider__point');

let currentIndex = 1;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[index].classList.add('active');
  dots[currentIndex].classList.remove('active__point');
  dots[index].classList.add('active__point');

  currentIndex = index;
}
buttonleft.addEventListener('click', function (event) {

  let index = currentIndex - 1;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage(index);
});

buttonraiht.addEventListener('click', function (event) {

  let index = currentIndex + 1;
  if (index > 2) {
    index = 0;
  }
  showImage(index);
});

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', dotes);
}
function dotes(e) {
  let nid = e.target.dataset.nid;

  for (let j = 0; j < images.length; j++) {

    dots[j].className = "slider__point";
  }

  for (let j = 0; j < images.length; j++) {

    images[j].classList.remove('active');
  }
  images[nid].classList.add('active');
  dots[nid].classList.add('active__point');;
}

