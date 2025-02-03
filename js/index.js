// Mobile menu
const mobileMenu = document.getElementById('mobile_menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('change');
    navLinks.classList.toggle('showing');
    // console.log('clicked');
});


// dropdown account
const dropdown = document.getElementById('dropdown');
const accountBtn = document.getElementById('account-details');

accountBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
    // console.log('clicked');
})
