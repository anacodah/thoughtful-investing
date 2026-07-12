const https = require('https');
https.get('https://unsplash.com/s/photos/senior-indian-couple', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/"id":"([a-zA-Z0-9_\-]{11})"/g);
    if (match) {
      console.log('Matches:', [...new Set(match.map(m => m.slice(6, -1)))].slice(0, 5));
    }
  });
});
