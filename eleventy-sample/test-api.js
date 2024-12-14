require('dotenv').config();
const fetch = require('node-fetch');

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

async function testAPI() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/posts`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      }
    });
    
    const data = await response.json();
    console.log('API Connection Successful!');
    console.log('Data received:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error connecting to Strapi:', error);
  }
}

testAPI();