'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel',
  ],
  rules: {
    // disable original eslint rules
    'generator-star-spacing': 0,
    'new-cap': 0,
    'array-bracket-spacing': 0,
    'object-curly-spacing': 0,
    'object-shorthand': 0,
    'arrow-parens': 0,

    // babel rules
    'babel/generator-star-spacing': 2,
    'babel/new-cap': 2,
    'babel/array-bracket-spacing': 2,
    'babel/object-curly-spacing': 2,
    'babel/object-shorthand': 2,
    'babel/arrow-parens': 2,
    'babel/no-await-in-loop': 2,
    'babel/flow-object-type': 0,
    'babel/func-params-comma-dangle': [2, 'always-multiline'],
  },
};
