// const fetch = require('node-fetch');
async function fetchGoogleHomePage() {
    try {
      const response = await fetch('https://www.google.com');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const body = await response.text();  // Get response as plain HTML
      console.log('✅ Google homepage fetched successfully!');
      console.log(body.substring(0, 500)); // Print first 500 characters of the page
    } catch (err) {
      console.error('❌ Error fetching Google:', err.message);
    }
  }
  
  fetchGoogleHomePage();
  