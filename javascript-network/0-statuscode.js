#!/usr/bin/node
const getStatusCode = async (url) => {
    const response = await fetch(url);
    return response.status;
  };
  
  const main = async () => {
    const url = prompt('Enter the URL to request: ');
    const statusCode = await getStatusCode(url);
  
    console.log(`code: ${statusCode}`);
  };
  
  main();