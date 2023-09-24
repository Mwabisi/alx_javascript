#!/usr/bin/node
const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

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

    // Filter the films where Wedge Antilles is present
    const filmsWithWedgeAntilles = filmsData.results.filter(film =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    // Print the number of films with Wedge Antilles
    console.log(`Number of films with Wedge Antilles: ${filmsWithWedgeAntilles.length}`);
  }
});
