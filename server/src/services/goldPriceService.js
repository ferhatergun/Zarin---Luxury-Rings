const axios = require('axios');

let cachedGoldPrice = null;
let lastFetchTime = 0;
const CACHE_DURATION = 3600000; 

async function getGoldPrice() {
  const now = Date.now();

  if (cachedGoldPrice && (now - lastFetchTime) < CACHE_DURATION) {
    return cachedGoldPrice;
  }

  try {
    const apiKey = process.env.GOLDAPI_KEY;
    const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
      headers: { 'x-access-token': apiKey },
      timeout: 5000
    });

    const price = response.data.price_gram_24k;
    if (price > 0) {
      cachedGoldPrice = price;
      lastFetchTime = now;
      return price;
    }
  } catch (error) {
    console.error('Gold API error:', error.message);
  }

  return cachedGoldPrice || 64.3;
}

function calculatePrice(popularityScore, weight, goldPrice) {
  return Math.round((popularityScore + 1) * weight * goldPrice * 100) / 100;
}

function calculatePopularityStars(popularityScore) {
  return Math.round(popularityScore * 5);
}

module.exports = { getGoldPrice, calculatePrice, calculatePopularityStars };
