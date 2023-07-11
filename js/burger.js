const burger = document.querySelector(".header__burger");
const aside = document.querySelector(".aside");

if (window.innerWidth > 1200) {
  if (!aside.classList.contains("aside__activeTwo")) {
    burger.classList.add("burgerActive");
  }

  burger.addEventListener("click", () => {
    aside.classList.toggle("aside__activeTwo");
    if (aside.classList.contains("aside__activeTwo")) {
      burger.classList.remove("burgerActive");
    } else {
      burger.classList.add("burgerActive");
    }
  });
} else {

  aside.addEventListener("scroll", () => {
    if(aside.scrollTop > 0) {
      burger.style.opacity = "0";
    }else{
      burger.style.opacity = "1";
    }
  })
  burger.addEventListener("click", () => {
    burger.classList.toggle("burgerActive");
    aside.classList.toggle("aside__active");

    if (burger.classList.contains("burgerActive")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
}
