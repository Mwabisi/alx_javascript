#!/usr/bin/node
const request = require('request');

// Define the API URL as a command line argument
const apiUrl = process.argv[2];

// Define the character ID for Wedge Antilles
const characterId = 18;

// Make a GET request to the API to fetch the list of films
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
  } else {
    // Parse the JSON response
    const filmsData = JSON.parse(body);

    let numberOfFilmsWithWedgeAntilles = 0;

    for (const film of filmsData.results) {
      for (const characterUrl of film.characters) {
        if (characterUrl.includes(`/api/people/${characterId}/`)) {
          numberOfFilmsWithWedgeAntilles++;
          break; 
        }
      }
    }

    // Print the number of films with Wedge Antilles
    console.log(numberOfFilmsWithWedgeAntilles);
  }
});