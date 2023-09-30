function handleFormSubmit(event) {

    event.preventDefault();
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
  
    // Validate the form fields
    if (name === "" || email === "") {
      
      alert("Please fill in all required fields.");
    } else {
      
      alert("Form submitted successfully!");

    }
  }
  
  const submitForm = document.getElementById("submitForm");
  
  submitForm.addEventListener("submit", handleFormSubmit);
  