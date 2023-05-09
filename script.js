const menu = document.getElementById('menu');
const menu_icon = document.getElementById('menu_icon');

menu_icon.addEventListener('click', () => {
    menu.classList.toggle('toggleMenu');
})