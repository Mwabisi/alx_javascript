#!/usr/bin/node
// Import the 'request' module
const request = require('request');

// Function to get and display the status code
function getStatus(url) {
    request.get(url, (error, response) => {
        if (error) {
            // Handle request errors
            console.error(`Request failed: ${error}`);
        } else {
            console.log(`Code: ${response.statusCode}`);
        }
    });
}

const url = 'https://example.com';
getStatus(url);
