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
    // Disable original eslint rules
    'new-cap': 'off',
    'object-curly-spacing': 'off',
    'no-invalid-this': 'off',

    // Enhanced eslint rules
    'babel/new-cap': 'error',
    'babel/object-curly-spacing': 'error',
    'babel/no-invalid-this': 'error',
  },
};
