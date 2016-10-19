import test from 'ava';
import isPlainObj from 'is-plain-obj';

test('`rules/base.js` is valid config', (t) => {
  const config = require('../rules/base');

  t.true(isPlainObj(config));
  t.true(isPlainObj(config.env));
  t.true(isPlainObj(config.parserOptions));
  t.true(isPlainObj(config.rules));
});

test('`rules/esnext.js` is valid config', (t) => {
  const config = require('../rules/esnext');

  t.true(isPlainObj(config));
  t.is(config.parser, 'babel-eslint');
  t.true(isPlainObj(config.parserOptions));
});

test('`rules/import.js` is valid config', (t) => {
  const config = require('../rules/import');

  t.true(isPlainObj(config));
  t.deepEqual(config.plugins, ['import']);
  t.true(isPlainObj(config.parserOptions));
  t.true(isPlainObj(config.settings));
  t.true(isPlainObj(config.rules));
});

test('`rules/react.js` is valid config', (t) => {
  const config = require('../rules/react');

  t.true(isPlainObj(config));
  t.deepEqual(config.plugins, ['react']);
  t.true(isPlainObj(config.parserOptions));
  t.true(isPlainObj(config.rules));
});

test('`index.js` is valid config', (t) => {
  const config = require('..');

  t.true(isPlainObj(config));
  t.true(Array.isArray(config.extends));
});

test('`react.js` is valid config', (t) => {
  const config = require('../react');

  t.true(isPlainObj(config));
  t.true(Array.isArray(config.extends));
});
