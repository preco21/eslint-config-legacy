'use strict';

module.exports = {
  plugins: [
    'import',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    'import/extensions': ['.js', '.jsx'],
  },
  rules: {
    // static analysis
    'import/no-unresolved': ['error', {commonjs: true}],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'off',

    // helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',

    // module systems
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    // style guide
    'import/imports-first': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', {js: 'never', jsx: 'never'}],
    'import/order': ['error', {'newlines-between': 'never'}],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
  },
};
