'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {
    // Disable original eslint rules
    'new-cap': 'off',
    'object-curly-spacing': 'off',
    'no-invalid-this': 'off',
    quotes: 'off',
    semi: 'off',
    'no-unused-expressions': 'off',

    // Enhanced eslint rules
    'babel/new-cap': 'error',
    'babel/object-curly-spacing': 'error',
    'babel/no-invalid-this': 'error',
    'babel/quotes': ['error', 'single'],
    'babel/semi': 'error',
    'babel/no-unused-expressions': 'error',
  },
};
