const hamburger = document.querySelector('.fa-bars');
const iksButton = document.querySelector('.fa-x');
const hamburgerMenu = document.querySelector('.hamburger__menu');


const showMenu = () => {
    hamburgerMenu.style.display = "flex";    
    iksButton.style.display = 'block';
    hamburger.style.display = 'none';
}

const closeMenu = () => {
    hamburgerMenu.style.display = "none"; 
    iksButton.style.display = 'none';
    hamburger.style.display = 'block';
}

hamburger.addEventListener('click', showMenu)
iksButton.addEventListener('click', closeMenu)