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

// Signup
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const phone = document.getElementById('phone').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const pin = document.getElementById('pin').value;
    const confirmPin = document.getElementById('confirmPin').value;

    // Validate phone number (example: must be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Validate first name (example: must not be empty)
    if (firstName.trim() === '') {
      alert('Please enter your first name.');
      return;
    }

    // Validate last name (example: must not be empty)
    if (lastName.trim() === '') {
      alert('Please enter your last name.');
      return;
    }

    // Validate PIN (example: must be 4 digits)
    const pinPattern = /^\d{4}$/;
    if (!pinPattern.test(pin)) {
      alert('Please enter a valid 4-digit PIN.');
      return;
    }

    // Validate confirm PIN (must match PIN)
    if (pin !== confirmPin) {
      alert('Pins do not match!');
      return;
    }

    // If all validations pass, redirect to verification.html
    window.location.href = 'verification.html';
  });

// verification
document.getElementById('verification-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const inputs = document.querySelectorAll('.verification-input');
    let code = '';
    inputs.forEach(input => {
      code += input.value;
    });
    if (code.length !== 6 || !/^\d{6}$/.test(code)) {
      alert('Please enter a valid 6-digit code.');
    } else {
      // Redirect to confirmation.html upon successful verification
      window.location.href = 'confirmation.html';
    }
  });