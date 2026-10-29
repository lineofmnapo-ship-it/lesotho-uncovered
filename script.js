document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('emailAddress');
  const messageInput = document.getElementById('messageText');
  const successBox = document.getElementById('successMessage');

  let isFormValid = true;

  // 3. Clear all old invalid states before scanning fields
  clearErrors();

  // 4. Validate Full Name Field
  if (nameInput.value.trim() === '') {
    showFieldError(nameInput, 'nameError');
    isFormValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showFieldError(emailInput, 'emailError');
    isFormValid = false;
  }

  if (messageInput.value.trim() === '') {
    showFieldError(messageInput, 'messageError');
    isFormValid = false;
  }

  if (isFormValid) {
    form.style.display = 'none';
  
    successBox.style.display = 'block';

  
    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };
    console.log('Submission accepted:', payload);

    form.reset();
  }
});

function showFieldError(inputElement, errorSpanId) {
  inputElement.style.borderColor = '#e74c3c';
  inputElement.style.backgroundColor = '#fdf2f2';
  document.getElementById(errorSpanId).style.display = 'block';
}

function clearErrors() {
  const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
  inputs.forEach(input => {
    input.style.borderColor = '#cccccc';
    input.style.backgroundColor = '#ffffff';
  });

  const errorSpans = document.querySelectorAll('.error-msg');
  errorSpans.forEach(span => {
    span.style.display = 'none';
  });
}
