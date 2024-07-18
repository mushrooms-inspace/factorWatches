let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
}

gsap.to('.logo', { opacity: 1, duration: 1, delay: 2, y: 0 });
gsap.to('.navbar .nav_item', { opacity: 1, duration: 1, delay: 2.1, y: 0 });
gsap.to('.title', { opacity: 1, duration: 1, delay: 1.6, y: 0 });
gsap.to('.description', { opacity: 1, duration: 1, delay: 1.8, y: 0 });
gsap.to('.btn', { opacity: 1, duration: 1, delay: 2.1, y: 0 });