const axios = require('axios');
const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res) => {
    async function getBuff() {
     let buff=await axios.get(`https://shooting-star-unique-api.vercel.app/api/mwl/random/card`)
     let fullUrl = `https://asapi.shoob.gg/site/api/cardr/` + buff.data

    request.get({url: fullUrl, encoding: null}, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          res.set('Content-Type', 'image/webp');
          res.send(body);
        }  else {
          res.status(500).send('Error occurred while downloading the image');
        }
        });
    }
    getBuff();
})

app.listen(10000, () => {
    console.log('Server is listening on port 10000');
  });