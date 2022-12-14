/* Galeria */
const body = document.querySelector('body');
const galleryWrapper = document.querySelector('.gallery__wrapper');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const rightArrow = document.querySelector('.fa-angle-right');
const leftArrow = document.querySelector('.fa-angle-left');
const slideNumber = document.querySelector('.slide-number');
const playSlideshow = document.querySelector('.fa-play');
const pauseSlideshow = document.querySelector('.fa-pause');
const stopSlideshow = document.querySelector('.fa-stop');
const close = document.querySelector('.fa-xmark');


const images = ["../images/lustro-mini.jpg", "../images/lustro-2-mini.jpg", "../images/ściana-szklana-mini.jpg", "../images/ścianka-szklana-industrialna-mini.jpg", "../images/balustrada-zewnetrzna-mini.jpg", "../images/balustrada-zewnetrzna-2-mini.jpg", "../images/kabina-prysznicowa-mini.jpg", "../images/kabina-prysznicowa-2-mini.jpg", "../images/ścianka-walk-in-mini.jpg", "../images/panele-szklane-mini.jpg"];
let counter = 0;

images.map(image => {    
    const div = document.createElement('div');    
    div.classList.add('image-box');
    const img = document.createElement('img');
    img.setAttribute('id', counter++);
    img.src = image;        
    div.appendChild(img);  
    galleryWrapper.appendChild(div);
})

/* Slider */

galleryWrapper.addEventListener('click', (e) => {
    let id = e.target.id;
    counter = e.target.id; 
    modal.style.display = 'flex';    
    const showImg = images[e.target.id];
    modalContent.style.backgroundImage = `url(${showImg})`;
    const numberOfSlide = parseInt(e.target.id) + 1;
    slideNumber.textContent = `${numberOfSlide}/${images.length}`;
})

const prevSlide = () => { 
    counter--;    
    if(counter === -1) {
        counter = images.length -1;
    }
    modalContent.style.backgroundImage = `url(${images[counter]})`;
    slideNumber.textContent = `${counter + 1}/${images.length}`;
}

const nextSlide = () => {
    counter++
    if(counter === images.length){
        counter = 0;
    }
    modalContent.style.backgroundImage = `url(${images[counter]})`;
    slideNumber.textContent = `${counter + 1}/${images.length}`;
}

const nextSlideSlideshow = () => {
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    modalContent.style.backgroundImage = `url(${images[counter]})`;
    slideNumber.textContent = `${counter + 1}/${images.length}`;
    console.log('1...3...5');
}

playSlideshow.addEventListener('click', () => {
    const nextSlideInterval =  setInterval(nextSlideSlideshow, 3000);
    pauseSlideshow.style.display = 'block';
    playSlideshow.style.display = 'none';
    

    stopSlideshow.addEventListener('click', () => {
        pauseSlideshow.style.display = 'none';
        playSlideshow.style.display = 'block';
        clearInterval(nextSlideInterval);
    });

    pauseSlideshow.addEventListener('click', () => {
        pauseSlideshow.style.display = 'none';
        playSlideshow.style.display = 'block';
        clearInterval(nextSlideInterval);
    })
});

const closeModal = () => {
    modal.style.display = 'none';
}

close.addEventListener('click', closeModal);


leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

