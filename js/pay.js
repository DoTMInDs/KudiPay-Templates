
  function validateForm() {
    const phoneNumber = document.getElementById('phone').value;
  
    // Example validation: Check if phone number and pin are not empty
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
 
    // Redirect to verification page
    window.location.href = 'payment_verification.html';
    return false; // Prevent form submission
  }
  