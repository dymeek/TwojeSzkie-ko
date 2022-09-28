/* Galeria */

const body = document.querySelector('body');
const galleryWrapper = document.querySelector('.gallery__wrapper');

const images = ['/images/lustro.jpeg', "/images/lustro-2.jpeg", "/images/ściana-szklana.jpeg", "/images/ścianka-szklana-industrialna.jpeg", "/images/balustrada-zewnetrzna.jpeg", "/images/balustrada-zewnetrzna-2.jpeg", "/images/kabina-prysznicowa.jpeg", "/images/kabina-prysznicowa 2.jpeg", "/images/ścianka-walk-in.jpg", "/images/panele-szklane.jpeg"];
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

window.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.target.id)
})