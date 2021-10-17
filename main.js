const buttons = document.querySelectorAll('.button');

const imageContainer = document.querySelector('.images');
const images = document.querySelectorAll('.images img');
let imageWidth = parseInt(window.getComputedStyle(images[0]).width);

const textContainer = document.querySelector('.texts');
const texts = document.querySelectorAll('.text');
let textWidth = parseInt(window.getComputedStyle(texts[0]).width);


window.addEventListener('resize', () => {
  imageWidth = parseInt(window.getComputedStyle(images[0]).width);
  textWidth = parseInt(window.getComputedStyle(texts[0]).width);
})

buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    buttons.forEach(el => el.classList.remove('button_active'));
    item.classList.add('button_active');

    moveSlide(index);
  })
})

function moveSlide(indexNext) {
  imageContainer.style.left = `${-indexNext * imageWidth}px`;
  textContainer.style.left = `${-indexNext * textWidth}px`;
}

