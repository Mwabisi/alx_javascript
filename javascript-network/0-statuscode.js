#!/usr/bin/node
const http = require('http');

// Function to get and display the status code and message
function getStatus(url) {
    const req = http.get(url, (res) => {
        console.log(`Status Code: ${res.statusCode}`);
        if (res.statusCode === 200) {
            console.log(`Path exists.`);
        } else if (res.statusCode === 404) {
            console.log(`Path doesn't exist.`);
        } else if (res.statusCode === 301) {
            console.log(`Path redirects.`);
        } else if (res.statusCode === 204) {
            console.log(`Path has no content.`);
        } else {
            console.log(`Unexpected status code: ${res.statusCode}`);
        }
    });

    req.on('error', (error) => {
        console.error(`Request failed: ${error.message}`);
    });
}

// Input URL from the user (replace 'https://example.com' with your desired URL)
const url = 'https://example.com';

// Call the function with the provided URL
getStatus(url);