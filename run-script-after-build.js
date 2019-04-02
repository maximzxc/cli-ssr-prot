const cheerio = require('cheerio')
const fs = require('fs');
const _ = require('lodash');
const indexFilePath = 'dist/browser/index.html'

console.log('After build script started...')

// read our index file
console.log('About to rewrite file: ', indexFilePath);
fs.readFile(indexFilePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    // load html into cheerio so we can manipulate DOM
    const $ = cheerio.load(data)

	$('head').append($('<script>window.liveConfig2 = {"environmentTest": "test"};</script>'))

    // now write that file back
    fs.writeFile(indexFilePath, $.html(), function (err) {
        if (err) return console.log(err);
        console.log('Successfully rewrote index html');
    });
  });

