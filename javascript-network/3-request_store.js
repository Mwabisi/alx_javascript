#!/usr/bin/node
const request = require('request');
const fs = require('fs');

// Define the URL as the first command line argument
const url = process.argv[2];

// Define the file path as the second command line argument
const filePath = process.argv[3];

// Make a GET request to the URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    // Write the response body to the specified file with UTF-8 encoding
    fs.writeFileSync(filePath, body, { encoding: 'utf-8' });
    console.log(`Webpage contents successfully saved to ${filePath}`);
  }
});