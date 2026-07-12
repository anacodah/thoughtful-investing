const https = require('https');

function getUnsplashId(query) {
  return new Promise((resolve) => {
    https.get('https://unsplash.com/s/photos/' + query, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/"id":"([a-zA-Z0-9_\-]{11})"/g);
        if (match) {
          console.log(query, [...new Set(match.map(m => m.slice(6, -1)))].slice(0, 3));
        } else {
          console.log(query, 'No match');
        }
        resolve();
      });
    });
  });
}

async function run() {
  await getUnsplashId('indian-wedding');
  await getUnsplashId('indian-senior');
  await getUnsplashId('indian-currency');
  await getUnsplashId('piggy-bank');
}

run();
