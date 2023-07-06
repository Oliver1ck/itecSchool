const burger = document.querySelector('.header__burger');
const aside = document.querySelector('.aside');

burger.addEventListener('click', () => {
  burger.classList.toggle('burgerActive');
  aside.classList.toggle('aside__active');

  if(burger.classList.contains('burgerActive')){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'auto';
  }
})
