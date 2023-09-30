 function validateEmail(email) {

  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

const emailInput = document.querySelector('#email');

const form = document.querySelector('#emailForm');
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  const email = emailInput.value;

  // Validate the email format
  if (!validateEmail(email)) {
    // Display the error message
    const errorMessageElement = document.querySelector('#error');
    errorMessageElement.textContent = 'Please enter a valid email address.';

    // Return to prevent the form from submitting
    return;
  }

  form.submit();
});
 