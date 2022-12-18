const projectsButton = document.querySelector('.projects__button');

projectsButton.onclick = () => {
  const hide = document.querySelector('.hide');
  hide.style.display = "block";
  projectsButton.style.display = "none";
}