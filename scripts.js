let burger = document.getElementById('burger'),
    mobileMenu = document.getElementById('mobile-menu');

console.log(burger);

burger.addEventListener('click', ()=> {
  mobileMenu.style.display = 'flex';
});