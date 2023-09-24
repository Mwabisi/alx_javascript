#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

// Create the URL for the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
  } else {
    // Parse the JSON response
    const movieData = JSON.parse(body);

    console.log(`Title of Episode ${movieData.episode_id}: ${movieData.title}`);
  }
});