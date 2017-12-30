# Soft Require

Checks to see if npm is installed and loads it, if not it throws a catchable error.

Soft require is a simple library that allows you to require an npm library that 
may not be installed/available. This allows you to dynamically load npm libraries, 
and catch the error. This module does two things:

1. It just wraps a require.resolve in a try catch, then returns the result of the require.
2. Enforces good practices (read: passes linting) for dynamically loading npm modules.

## Installation

From the command line, in the path of your project type in:

```bash
$ npm install --save safe-require
```

## In Your Code

To dynamically load npm libraries (code is included in repo as `example.js`):

```javascript
const softRequire = require('soft-require');

const libraries = ['chai', 'moasdf', 'mocha'];
const loaded = {};
const logger = console;

libraries.forEach((library) => {
  try {
    loaded[library] = softRequire(library);
  } catch (err) {
    logger.error(err.message);
  }
});

logger.info(`Loaded the following libraries successfully: ${Object.keys(loaded).join(', ')}`);
```

May your linting be successful and your libraries loaded dynamically.

## To Test

If you clone this repo, you can test with: `npm run test`