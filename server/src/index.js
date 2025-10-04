const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



const https = require('https');
const sites = [
  '',
  ''
];

setInterval(() => {
  const now = new Date();
  const hour = now.getUTCHours() + 3; 

  // 07:00 <= saat < 24:00 arasında çalışacak
  if (hour >= 7 && hour < 24) {
    sites.forEach(site => {
      https.get(site, (res) => {
        console.log(`Pinged ${site}: Status ${res.statusCode} at ${now}`);
      }).on('error', (e) => {
        console.error(`Ping error for ${site}:`, e.message);
      });
    });
  }
}, 60000);