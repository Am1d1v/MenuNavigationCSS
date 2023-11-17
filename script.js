




const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

// Show Menu
open_btn.addEventListener('click',() => {
    nav.forEach((element) => {
        element.classList.add('visible')
    })
});

// Hide Menu
close_btn.addEventListener('click',() => {
    nav.forEach((element) => {
        element.classList.remove('visible')
    })
});
