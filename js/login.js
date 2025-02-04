
  function validateForm() {
    const phone = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin').value;
    // const terms = document.getElementById('terms').checked;
  
    // Validate phone number (example: must be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

     // Validate PIN (example: must be 4 digits)
     const pinPattern = /^\d{4}$/;
     if (!pinPattern.test(pin)) {
       alert('Please enter a valid 4-digit PIN.');
       return;
     }
 
    // Redirect to verification page
    window.location.href = 'home.html';
    return false; // Prevent form submission
  }
  