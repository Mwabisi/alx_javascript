#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const downloadWebpage = async (url, filePath) => {
  const response = await request(url);

  // Check if the response was successful.
  if (response.statusCode !== 200) {
    throw new Error(`Failed to download webpage: ${url}`);
  }

  // Save the response body to the file.
  fs.writeFileSync(filePath, response.body, { encoding: 'utf-8' });

  console.log(`Webpage downloaded to ${filePath}`);
};