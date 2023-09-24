#!/usr/bin/node
const request = require('request');

// Define the API URL for the todos
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
  } else {
    // Parse the JSON response
    const todos = JSON.parse(body);

    const completedTasksByUser = {};

    // Iterate through the todos
    todos.forEach(todo => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          // Increment the count if the user is already in the object
          completedTasksByUser[todo.userId]++;
        } else {
          // Initialize the count if the user is not in the object
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  }
});