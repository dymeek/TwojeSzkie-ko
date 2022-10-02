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


const images = ["/images/lustro.jpeg", "/images/lustro-2.jpeg", "/images/ściana-szklana.jpeg", "/images/ścianka-szklana-industrialna.jpeg", "/images/balustrada-zewnetrzna.jpeg", "/images/balustrada-zewnetrzna-2.jpeg", "/images/kabina-prysznicowa.jpeg", "/images/kabina-prysznicowa-2.jpeg", "/images/ścianka-walk-in.jpg", "/images/panele-szklane.jpeg"];
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
    modal.style.display = 'block';    
    const showImg = images[e.target.id];
    modalContent.style.backgroundImage = `url(${showImg})`;
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



leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

