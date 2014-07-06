buster-reporter-sauce
=====================

Enables buster-static with SauceLabs.

## Usage ##
1. `npm install buster-reporter-sauce`
2. In your `buster.js` add to `extensions: [ ... require('buster-reporter-sauce') ... ]`
3. Fire up `buster-static`
4. Point SauceLabs to you `buster-static` instance (e.g. using `grunt-saucelabs`)
