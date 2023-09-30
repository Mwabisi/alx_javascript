function generateInputFields(num) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; 
    for (let i = 1; i <= num; i++) {
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.name = `field${i}`;
      inputField.placeholder = `Field ${i}`;
      inputContainer.appendChild(inputField);
    }
  }
  
  // Function to validate the form before submission.
  function validateForm(event) {
    const inputContainer = document.getElementById("inputContainer");
    const inputFields = inputContainer.getElementsByTagName("input");
  
    for (const inputField of inputFields) {
      if (inputField.value.trim() === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); 
        return;
      }
    }
  }
  
  const dynamicForm = document.getElementById("dynamicForm");
  
  // Add an event listener for changes in the dropdown selection.
  const numFieldsSelect = document.getElementById("numFields");
  numFieldsSelect.addEventListener("change", function () {
    const selectedValue = parseInt(numFieldsSelect.value);
    generateInputFields(selectedValue);
  });
  
  dynamicForm.addEventListener("submit", validateForm);
  