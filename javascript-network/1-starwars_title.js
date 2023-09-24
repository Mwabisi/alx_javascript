#!/usr/bin/node
const request = require('request');

const getStarWarsMovieByEpisode = async (episodeNumber) => {
  const response = await request(`https://swapi-api.alx-tools.com/api/films/${episodeNumber}`);
  const movieData = JSON.parse(response.body);

  return movieData;
};

const printStarWarsMovieTitle = async (episodeNumber) => {
  const movieData = await getStarWarsMovieByEpisode(episodeNumber);
  const movieTitle = movieData.title;

  console.log(`Star Wars Episode ${episodeNumber}: ${movieTitle}`);
};