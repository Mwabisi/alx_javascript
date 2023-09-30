function validatePassword() {
    
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error");
  
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
  
    const password = passwordInput.value;
  
    if (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    ) {
      
      errorMessage.textContent = "";
      return true;
    } else {
      
      errorMessage.textContent =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
      return false;
    }
  }
  
  const passwordForm = document.getElementById("passwordForm");
  
  passwordForm.addEventListener("submit", function (event) {
    // Validate the password when the form is submitted.
    if (!validatePassword()) {
      // If validation fails, prevent the form from submitting.
      event.preventDefault();
    }
  });
  