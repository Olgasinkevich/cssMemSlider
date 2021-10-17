const buttons = document.querySelectorAll('.button');
const imageContainer = document.querySelector('.images');

const images = document.querySelectorAll('.images img');
let imageWidth = parseInt(window.getComputedStyle(images[0]).width);

window.addEventListener('resize', () => {
  imageWidth = parseInt(window.getComputedStyle(images[0]).width);
})

buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    buttons.forEach(el => el.classList.remove('button_active'));
    item.classList.add('button_active');

    moveSlide(index);
  })
})

function moveSlide(indexNext) {
/*  let defaultX = -parseInt(window.getComputedStyle(imageContainer).left);

  if (defaultX < indexNext * imageWidth)  {
    let id = null;
    id = setInterval(() => {
      if (defaultX < indexNext * imageWidth) {
        defaultX += 100;
        imageContainer.style.left = `${imageContainer.style.left - 100}px`;
        console.log('defaultX', defaultX)
        console.log('imageContainer.style.left', imageContainer.style.left)
      } else {
        clearInterval(id);
      }
    }, 200);
  } else {

  }*/


  imageContainer.style.left = `${-indexNext * imageWidth}px`;
}

