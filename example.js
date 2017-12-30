const softRequire = require('./index');

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
