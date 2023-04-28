const loginForm = document.querySelector('form');

// Add an event listener to the form submission
loginForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the username and password values from the form
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // TODO: Validate the username and password

  // TODO: Use server-side scripting to authenticate the user and redirect them to their account page
  // For example:
  window.location.href = '/account/' + username;
});
