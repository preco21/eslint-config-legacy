'use strict';

const isPlainObj = require('is-plain-obj');
const baseConfig = require('../rules/base');
const esnextConfig = require('../rules/esnext');
const importConfig = require('../rules/import');
const reactConfig = require('../rules/react');
const reactRootConfig = require('../react');
const nativeRootConfig = require('../native');
const indexRootConfig = require('..');

describe('ESLint config', () => {
  test('`rules/base.js` is valid config', () => {
    expect(isPlainObj(baseConfig)).toBeTruthy();
    expect(isPlainObj(baseConfig.env)).toBeTruthy();
    expect(isPlainObj(baseConfig.parserOptions)).toBeTruthy();
    expect(isPlainObj(baseConfig.rules)).toBeTruthy();
  });

  test('`rules/esnext.js` is valid config', () => {
    expect(isPlainObj(esnextConfig)).toBeTruthy();
    expect(esnextConfig.parser).toBe('babel-eslint');
    expect(isPlainObj(esnextConfig.parserOptions)).toBeTruthy();
  });

  test('`rules/import.js` is valid config', () => {
    expect(isPlainObj(importConfig)).toBeTruthy();
    expect(importConfig.plugins).toContain('import');
    expect(isPlainObj(importConfig.parserOptions)).toBeTruthy();
    expect(isPlainObj(importConfig.settings)).toBeTruthy();
    expect(isPlainObj(importConfig.rules)).toBeTruthy();
  });

  test('`rules/react.js` is valid config', () => {
    expect(isPlainObj(reactConfig)).toBeTruthy();
    expect(reactConfig.plugins).toContain('react');
    expect(isPlainObj(reactConfig.parserOptions)).toBeTruthy();
    expect(isPlainObj(reactConfig.rules)).toBeTruthy();
  });

  test('`react.js` is valid config', () => {
    expect(isPlainObj(reactRootConfig)).toBeTruthy();
    expect(Array.isArray(reactRootConfig.extends)).toBeTruthy();
  });

  test('`native.js` is valid config', () => {
    expect(isPlainObj(nativeRootConfig)).toBeTruthy();
    expect(Array.isArray(nativeRootConfig.extends)).toBeTruthy();
    expect(isPlainObj(nativeRootConfig.settings)).toBeTruthy();
    expect(isPlainObj(nativeRootConfig.globals)).toBeTruthy();
  });

  test('`index.js` is valid config', () => {
    expect(isPlainObj(indexRootConfig)).toBeTruthy();
    expect(Array.isArray(indexRootConfig.extends)).toBeTruthy();
  });
});
