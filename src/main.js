import './scss/style.scss';

const body = document.body;
const header = body.querySelector('.header');
const burger = body.querySelector('.burger');
const line = burger.querySelector('.burger__line');
const menu = body.querySelector('.page__menu');

window.addEventListener('scroll', () => {
  const windowScrollY = window.scrollY;

  if (windowScrollY === 0) {
    header.classList.remove('header--black');
  }

  if (windowScrollY > 0 && !header.className.includes('header--black')) {
    header.classList.add('header--black');
  }
});

burger.addEventListener('click', () => {
  menu.classList.toggle('page__menu--active');
  burger.classList.toggle('burger--active');
  line.classList.toggle('burger__line--active');
});
