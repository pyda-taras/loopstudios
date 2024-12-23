import { isWebp } from './modules/isWebp.js';

isWebp();

const body = document.body;
const header = body.querySelector('.header');
const burger = header.querySelector('.burger');
const burgerLine = burger.querySelector('.burger__line');
const menu = body.querySelector('.menu');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.classList.add('header--black');
  } else {
    header.classList.remove('header--black')
  }
});

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  burgerLine.classList.toggle('burger__line--invisible');
  menu.classList.toggle('menu--active');
});
