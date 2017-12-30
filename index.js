/* eslint-disable import/no-dynamic-require, global-require */
module.exports = function softRequire(name) {
  try {
    require.resolve(name);
    return require(name);
  } catch (err) {
    throw err;
  }
};
