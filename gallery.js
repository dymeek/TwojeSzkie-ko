/* Galeria */

const body = document.querySelector('body');
const galleryWrapper = document.querySelector('.gallery__wrapper');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const rightArrow = document.querySelector('.fa-angle-right');
const leftArrow = document.querySelector('.fa-angle-left');

const images = ['/images/lustro.jpeg', "/images/lustro-2.jpeg", "/images/ściana-szklana.jpeg", "/images/ścianka-szklana-industrialna.jpeg", "/images/balustrada-zewnetrzna.jpeg", "/images/balustrada-zewnetrzna-2.jpeg", "/images/kabina-prysznicowa.jpeg", "/images/kabina-prysznicowa-2.jpeg", "/images/ścianka-walk-in.jpg", "/images/panele-szklane.jpeg"];
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

galleryWrapper.addEventListener('click', (e) => {
    let id = e.target.id;
    console.log(e.target.id) 
    counter = e.target.id;
    console.log(counter)
    modal.style.display = 'block';    
    const showImg = images[e.target.id];
    modalContent.style.backgroundImage = `url(${showImg})`;
})

const prevSlide = () => {    
    let showImg = images[--counter]  
    console.log(counter)    
    modalContent.style.backgroundImage = `url(${showImg})`;
    console.log(showImg);
    if(counter === -1) {
        // counter = 9
        console.log(showImg);
        counter = images.length - 1;
        console.log(showImg);
        console.log(counter);  
    }
}

const nextSlide = () => {
    const showImg = images[++counter];
    modalContent.style.backgroundImage = `url(${showImg})`;
    if(counter === images.length - 1){
        counter = -1;
    }
}

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

