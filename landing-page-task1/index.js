const carousel = document.querySelector('.carousel');
const reviews = document.querySelectorAll('.carousel__review');
const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');

let currentIndex = 0;

function displayReview(index) {
  const offset = index * -100;
  carousel.style.transform = `translateX(${offset}%)`;
}

backward.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayReview(currentIndex);
  }
});

forward.addEventListener('click', () => {
  if (currentIndex < reviews.length - 1) {
    currentIndex++;
    displayReview(currentIndex);
  }
});

displayReview(currentIndex);
