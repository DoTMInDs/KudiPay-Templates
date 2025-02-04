
  function validateForm() {
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin').value;
    // const terms = document.getElementById('terms').checked;
  
    // Example validation: Check if phone number and pin are not empty
    if (phoneNumber.trim() === '' || pin.trim() === '') {
      alert('Please fill in all fields.');
      return false;
  }

     // Example validation: Check if pin is 4 digits
     if (!/^\d{4}$/.test(pin)) {
      alert('Pin must be a 4-digit number.');
      return false;
  }
 
    // Redirect to verification page
    window.location.href = 'home.html';
    return false; // Prevent form submission
  }
  