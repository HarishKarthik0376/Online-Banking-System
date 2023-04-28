const registerForm = document.querySelector('form');

// Add an event listener to the form submission
registerForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form values
  const username = registerForm.username.value;
  const password = registerForm.password.value;
  const confirmPassword = registerForm['confirm-password'].value;
  const email = registerForm.email.value;

  // TODO: Validate the form values

  // TODO: Use server-side scripting to create the user account
  // For example:
  alert('Account created successfully!');
  window.location.href = '/login';
});
