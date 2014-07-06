buster-reporter-sauce
=====================

[![Build Status](https://travis-ci.org/insidewarehouse/buster-reporter-sauce.svg?branch=master)](https://travis-ci.org/insidewarehouse/buster-reporter-sauce)

Enables buster-static with SauceLabs.

## Usage ##
1. `npm install buster-reporter-sauce`
2. In your `buster.js` add to `extensions: [ ... require('buster-reporter-sauce') ... ]`
3. Fire up `buster-static`
4. Point SauceLabs to you `buster-static` instance (e.g. using `grunt-saucelabs`), don't forget to `?reporter=sauce`

Pro tip: start `buster-static` on a well known port to avoid trouble with SauceLabs Connect, e.g. 8000. Your test URL
will then be `http://127.0.0.1:8000/?repoter=sauce`.