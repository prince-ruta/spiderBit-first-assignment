const hamburger = document.querySelector('.hamburger');
const topNav = document.querySelector('.top-navigation');
const mobileNav = document.querySelector('.mobile-nav-list');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topNav.classList.toggle('active');
    mobileNav.classList.toggle('active');
})