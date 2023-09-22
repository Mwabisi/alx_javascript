#!/usr/bin/node
async function getStatusCode(url) {
    const response = await fetch(url);
    return response.status;
  }
  
  async function main() {
    const url = prompt('Enter the URL to request: ');
    const statusCode = await getStatusCode(url);
  
    console.log(`code: ${statusCode}`);
  }
  
  main();  