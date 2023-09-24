#!/usr/bin/node
function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
  
    function displayFullName() {
      alert(`Welcome ${fullName}!`);
    }
  
    displayFullName();
  
    return fullName; 
  }
  
  const fullNameReturned = welcome('Holberton', 'School'); 
  
  console.log(fullNameReturned); 
  