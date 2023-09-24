#!/usr/bin/node
const request = require('request');

// Define the URL as the first command-line argument
const url = process.argv[2];

// Make a GET request to the URL
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // Display the status code of the response
    console.log(`code: ${response.statusCode}`);
  }
});