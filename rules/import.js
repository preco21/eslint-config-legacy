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
    'import/namespace': ['error', {allowComputed: true}],
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    // TODO: Enable when this rule goes a way more stable
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    // Original: 'import/no-deprecated': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',

    // Module systems
    // TODO: Disabling this rule due to Unambiguous JavaScript Grammar is rejected from tc39 and moved to inactive proposals
    // https://github.com/tc39/proposals/blob/eb23a429df79d13e0d8fff89dc38a53f5085fa1b/inactive-proposals.md
    // Original: 'import/unambiguous': 'error',
    'import/unambiguous': 'off',
    // TODO: Enable this rule when it comes to move on ESM entirely
    // Original: 'import/no-commonjs': ['error', {allowRequire: true, allowPrimitiveModules: true}],
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
