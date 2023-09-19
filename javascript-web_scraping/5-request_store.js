#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePatch = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  fs.writeFile(filePatch, body, 'utf8', function (err) {
    if (err) {
      console.error(err);
    }
  });
});
