const api = require('express').Router();
const axios = require('axios');

module.exports = api;

api.get('/search/:ocdID', async (req, res, next) => {
  const params = req.params.ocdID.split(',');

  const state = params[0].toLowerCase();
  const city = params[1].toLowerCase();
  const ocdID1 = `ocd-division/country:us/state:${state}`;
  const ocdID2 = ocdID1 + `/place:${city}`;

  try {
    const { data } = await axios.get(
      `https://api.turbovote.org/elections/upcoming?district-divisions=${ocdID1},${ocdID2}`,
      {
        headers: {
          accept: 'application/json',
        },
      }
    );

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(400).send('There was an error');
  }
});

api.use((req, res) => res.status(404).end());
