'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    // disable original eslint rules
    'new-cap': 'off',
    'object-curly-spacing': 'off',
    'no-invalid-this': 'off',

    // enhanced eslint rules
    'babel/new-cap': 'error',
    'babel/object-curly-spacing': 'error',
    'babel/no-invalid-this': 'error',

    // babel rules
    'babel/no-await-in-loop': 'error',
  },
};
