import test from 'ava';
import isPlainObj from 'is-plain-obj';

test('base rule is valid config', (t) => {
  const config = require('../rules/base');

  t.true(isPlainObj(config));
  t.true(isPlainObj(config.env));
  t.true(isPlainObj(config.parserOptions));
  t.true(isPlainObj(config.rules));
});

test('esnext rule is valid config', (t) => {
  const config = require('../rules/esnext');

  t.true(isPlainObj(config));
  t.is(config.parser, 'babel-eslint');
  t.deepEqual(config.plugins, ['babel']);
  t.true(isPlainObj(config.rules));
});

test('import rule is valid config', (t) => {
  const config = require('../rules/import');

  t.true(isPlainObj(config));
  t.deepEqual(config.plugins, ['import']);
  t.true(isPlainObj(config.rules));
});

test('primary index config is valid config', (t) => {
  const config = require('../');

  t.true(isPlainObj(config));
  t.true(Array.isArray(config.extends));
});
