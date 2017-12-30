/* eslint-env node, mocha */
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');

const softRequire = require('./index');

describe('Soft Require', () => {
  it('should fail to load missing module by plain name', () => {
    expect(() => softRequire('missing')).to.throw('Cannot find module \'missing\'');
  });
  it('should fail to load missing module by path and no file', () => {
    expect(() => softRequire('./missing')).to.throw('Cannot find module \'./missing\'');
  });
  it('should not fail to load module by name that is installed', () => {
    const x = softRequire('chai');
    expect(x).to.be.an('object');
  });
  it('should not fail to load module by path that exists', () => {
    const x = softRequire('./index.js');
    expect(x).to.be.an('function');
  });
});
