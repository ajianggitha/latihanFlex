const menuToggle = document.querySelector('.toggle-menu input');
const nav = document.querySelector('nav .navBar');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('slider');
})