'use strict'

// prettier-ignore
module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {
    // disable original eslint rules
    'new-cap': 'off',
    'camelcase': 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'semi': 'off',
    'no-unused-expressions': 'off',
    'valid-typeof': 'off',

    // enhance eslint rules based on `base.js`
    'babel/new-cap': ['error', { capIsNew: false }],
    'babel/camelcase': ['off', { properties: 'never' }],
    'babel/no-invalid-this': 'error',
    'babel/object-curly-spacing': ['error', 'always'],
    'babel/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'babel/semi': ['error', 'never'],
    'babel/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
    'babel/valid-typeof': ['error', { requireStringLiterals: true }],
  },
}
