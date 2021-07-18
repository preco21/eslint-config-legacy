'use strict';

/**
 * `@babel/eslint-plugin` rules
 */
module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['@babel'],
  rules: {
    'new-cap': 'off',
    'babel/new-cap': 'off',
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': ['error', {
      allowTaggedTemplates: true,
    }],
    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': ['error', 'always'],
    'semi': 'off',
    'babel/semi': 'error',
  },
};
