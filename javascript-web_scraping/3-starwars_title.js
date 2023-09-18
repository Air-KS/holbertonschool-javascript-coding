#!/usr/bin/node

const request = require('request');

const filmID = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${filmID}`;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const film = JSON.parse(body);
    console.log(film.title);
  }
});
