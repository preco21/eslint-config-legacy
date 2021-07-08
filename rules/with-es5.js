'use strict';

/**
 * with ECMAScript 5
 */
module.exports = {
  env: {
    es6: false,
  },
  parserOptions: {
    ecmaVersion: 5,
  },
  rules: {
    // disable all conflicting rules
    'no-var': 'off',
    'prefer-numeric-literals': 'off',
    // enable strict mode
    'strict': 'error',
  },
};
