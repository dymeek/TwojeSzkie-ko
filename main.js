const hamburger = document.querySelector('.fa-bars');
const iksButton = document.querySelector('.fa-x');
const hamburgerMenu = document.querySelector('.hamburger__menu');
const leftAnimation = document.querySelector('.section__wrapper__img');
const rightAnimation = document.querySelector('.wrapper__section__description');
const sectionOne = document.querySelector('.section__one');
const imageWrapper = document.querySelector('.hero__image');

console.log(leftAnimation)

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
    
    const time = document.querySelector('.time').innerText = showTime;
    let t = setTimeout(() => { newDate() }, 1000);
}

newDate();

window.addEventListener('mousemove', (e) => {  
    if(e.target === imageWrapper){ 
        leftAnimation.style.animation = 'showLeft .8s forwards ease-in';
        rightAnimation.style.animation = 'showRight .8s forwards ease-in';
    }
})

hamburger.addEventListener('click', showMenu)
iksButton.addEventListener('click', closeMenu)


/* Walidacja Formularza */

const submitBtn = document.getElementById('submit');
const userName = document.getElementById('name');
const mail = document.getElementById('mail');
const topic = document.getElementById('topic');
const errorMSG = document.querySelector('.error-message');
const textArea = document.getElementById('textarea');

const checkUsername = () => {
    if(userName.value === ''){
        errorMSG.textContent = 'Podaj prawidłowe dane!'
        errorMSG.style.display = 'block';
    }else {
        errorMSG.style.display = 'none';
        userName.value = '';
    }
}

const checkEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    if(re.test(mail.value)){
        errorMSG.style.display = 'none';
        mail.value = '';
    }else {
        errorMSG.textContent = 'Niepoprawny adres e-mail!'
        errorMSG.style.display = 'block';
    }
}

const checkTopic = () => {
    if(topic.value !== ''){
        topic.value = '';
        errorMSG.style.display = 'none';
    }else {
        errorMSG.textContent = 'Proszę wpisać temat wiadomości!';
        errorMSG.style.display =' block';
    }
}

const checkTextArea = () => {
    if(textArea.value !== ''){
        errorMSG.style.display = 'none';
        textArea.value = '';
    }else {
        errorMSG.textContent = 'Proszę wpisać wiadomość!';
        errorMSG.style.display = 'block';
    }
}

const sendForm = e => {
    e.preventDefault();
    if(topic.value !== '' && userName.value !== '' && mail.value !== '' && textArea !== '') {
        checkUsername();
        checkEmail();
        checkTopic();
        checkTextArea();
    }else {
        errorMSG.textContent = 'Wszsytkie pola muszą być uzupełnione';
        errorMSG.style.display = 'block';
    }
}

submitBtn.addEventListener('click', sendForm);