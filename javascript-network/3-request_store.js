#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const downloadWebpage = async (url, filePath) => {
  const response = await request(url);

  // Check if the response was successful.
  if (response.statusCode !== 200) {
    if (response.statusCode === 204) {
      console.log('The webpage is empty');
    } else {
      throw new Error(`Failed to download webpage: ${url}`);
    }
  }

  // Save the response body to the file, if there is any.
  if (response.statusCode === 200) {
    fs.writeFileSync(filePath, response.body, { encoding: 'utf-8' });
  }
};