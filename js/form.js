
  function validateForm() {
    const phone = document.getElementById('phone').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const pin = document.getElementById('pin').value;
    const confirmPin = document.getElementById('confirmPin').value;
    // const terms = document.getElementById('terms').checked;
  
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
  
    // Redirect to verification page
    window.location.href = 'verification.html';
    return false; // Prevent form submission
  }
  