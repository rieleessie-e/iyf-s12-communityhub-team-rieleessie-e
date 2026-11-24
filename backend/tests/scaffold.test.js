const test = require('node:test');
const assert = require('node:assert/strict');
const healthRouter = require('../src/routes/health');
const errorHandler = require('../src/middleware/errorHandler');

test('health route exports an Express router', () => {
  assert.equal(typeof healthRouter, 'function');
});

test('error handler exports a function', () => {
  assert.equal(typeof errorHandler, 'function');
});
