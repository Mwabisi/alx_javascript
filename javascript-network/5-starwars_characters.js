#!/usr/bin/node
const request = require('request');

const baseUrl = 'https://swapi-api.alx-tools.com/api';

const movieId = process.argv[2];

// Define the URL for the movie details
const movieUrl = `${baseUrl}/films/${movieId}/`;

// Make a GET request to the API to fetch movie details
request(movieUrl, (error, response, movieBody) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
  } else {
    // Parse the JSON response to get the characters' URLs
    const movieData = JSON.parse(movieBody);

    const characterUrls = movieData.characters;

    // Function to fetch and print character names
    function fetchAndPrintCharacterNames(index) {
      if (index < characterUrls.length) {
        const characterUrl = characterUrls[index];
        // Make a GET request to the character URL
        request(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            console.error('Error:', charError);
          } else if (charResponse.statusCode !== 200) {
            console.error('API request failed with status code:', charResponse.statusCode);
          } else {
            // Parse the JSON response to get the character details
            const characterData = JSON.parse(charBody);

            // Print the character's name
            console.log(characterData.name);

            // Continue to the next character
            fetchAndPrintCharacterNames(index + 1);
          }
        });
      }
    }

    fetchAndPrintCharacterNames(0);
  }
});