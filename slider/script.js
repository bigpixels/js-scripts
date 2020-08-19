'use strict'
let active = 0;
const images = document.querySelector('.img-area');

document.querySelector('.button-primary').onclick = () => {
    images[active].classList.remove('active-img');
    if (active +1 == images.length) {
        active = 0;
    } else {
        active++;
    }
    active++;
    images[active].classList.remove('active-img');
}
