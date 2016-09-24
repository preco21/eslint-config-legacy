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
    'generator-star-spacing': 'off',
    'new-cap': 'off',
    'array-bracket-spacing': 'off',
    'object-curly-spacing': 'off',
    'object-shorthand': 'off',
    'arrow-parens': 'off',

    // enhanced eslint rules
    'babel/generator-star-spacing': 'error',
    'babel/new-cap': 'error',
    'babel/array-bracket-spacing': 'error',
    'babel/object-curly-spacing': 'error',
    'babel/object-shorthand': 'error',
    'babel/arrow-parens': 'error',

    // babel rules
    'babel/no-await-in-loop': 'error',
    'babel/flow-object-type': 'off',
    'babel/func-params-comma-dangle': ['error', 'always-multiline'],
  },
};
