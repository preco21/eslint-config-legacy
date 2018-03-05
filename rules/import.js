'use strict';

module.exports = {
  plugins: [
    'import',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    'import/extensions': ['.js', '.jsx'],
    'import/ignore': ['node_modules'],
  },
  rules: {
    // Static analysis
    'import/no-unresolved': ['error', {commonjs: true}],
    'import/named': 'error',
    'import/default': 'error',
    // TODO: Enable when issue has been fixed:
    // https://github.com/benmosher/eslint-plugin-import/issues/656
    // Original: 'import/namespace': ['error', {allowComputed: true}],
    'import/namespace': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    // TODO: Enable when the rule goes more stable
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    // Original: 'import/no-deprecated': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',

    // Module systems
    // TODO: Disable rule due to Unambiguous JavaScript Grammar is rejected from tc39 and moved to inactive proposals
    // https://github.com/tc39/proposals/blob/eb23a429df79d13e0d8fff89dc38a53f5085fa1b/inactive-proposals.md
    // Original: 'import/unambiguous': 'error',
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    // Style guide
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', {js: 'never', jsx: 'never'}],
    'import/order': ['error', {'newlines-between': 'never'}],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-named-default': 'error',
    'import/no-default-export': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
    'import/group-exports': 'off',
  },
};
