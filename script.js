function validateForm() {
    
    document.getElementById('emailError').textContent = '';

    
    const emailInput = document.getElementById('email').value;

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!emailRegex.test(emailInput)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    } else {
        
        alert('Form submitted successfully!');
    }
}
