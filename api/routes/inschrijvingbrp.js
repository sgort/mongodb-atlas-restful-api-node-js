const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Constant URL & API key value for Haal Centraal BRP
const haalCentraalAPIbaseURL = 'https://www.haalcentraal.nl/haalcentraal/api/brp';
const haalCentraalAPIKey = 'drsgPGjarGGRl2pKQTnLqfj3NfsTPBhR';

fetch(haalCentraalAPIbaseURL + '/ingeschrevenpersonen/999994669', {
    // Default options are marked with *
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'x-api-key': haalCentraalAPIKey,
        'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer' // no-referrer, *client
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('Error: ', err));

module.exports = router;