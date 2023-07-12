const burger = document.querySelector(".header__burger");
const aside = document.querySelector(".aside");
const asideWrapper = document.querySelector('.aside__wrapper');

  burger.addEventListener("click", () => {
    burger.classList.toggle("burgerActive");
    aside.classList.toggle("aside__active");
    asideWrapper.classList.toggle('asideActive')
    if (burger.classList.contains("burgerActive")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });


aside.addEventListener("scroll", () => {
  if(aside.scrollTop > 0) {
    burger.style.opacity = "0";
  }else{
    burger.style.opacity = "1";
  }
})

asideWrapper.addEventListener("click", (event) => {
  if(event.target === asideWrapper){
    burger.classList.remove("burgerActive");
    aside.classList.remove("aside__active");
    asideWrapper.classList.remove('asideActive')
    document.body.style.overflow = 'auto';
  }
})
