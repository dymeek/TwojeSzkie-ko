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

const newDate = () => {
    
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const sec = date.getSeconds();
    const showTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${sec < 10 ? "0" + sec : sec}`;

    // time.innerHTML = showTime;
    const time = document.querySelector('.time').innerText = showTime;
    let t = setTimeout(() => { newDate() }, 1000);
}

newDate();





hamburger.addEventListener('click', showMenu)
iksButton.addEventListener('click', closeMenu)