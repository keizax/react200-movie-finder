/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Hello World');
      })
  );

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});

it('should have search input', () =>
    nightmare
      .goto(searchPage)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('input');
      })
  );

it('should have button element', () =>
    nightmare
      .goto(searchPage)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('button');
      })
);
