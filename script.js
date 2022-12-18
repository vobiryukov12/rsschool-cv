const projectsButton = document.querySelector('.projects__button');

projectsButton.onclick = () => {
  const hide = document.querySelector('.hide');
  hide.style.display = "block";
  projectsButton.style.display = "none";
}

const navMenu = document.querySelector('.nav-menu__left');
const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', function () {
  headerBurger.classList.toggle('active-burger');
  navMenu.classList.toggle('active-burger-nav');
});