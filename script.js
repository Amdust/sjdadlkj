
  const iconMenu = document.querySelector('.burger');
  const menuBody = document.querySelector('.header__wrapper');
  if(iconMenu){
  iconMenu.addEventListener("click", (e)=> {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('active'),
    menuBody.classList.toggle('header__wrapper--active')
  })}