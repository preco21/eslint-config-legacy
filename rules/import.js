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
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.jsx'],
  },
  rules: {
    // static analysis
    'import/no-unresolved': [2, {commonjs: true}],
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-restricted-paths': 0,

    // helpful warnings
    'import/export': 2,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-deprecated': 0,
    'import/no-extraneous-dependencies': 2,
    'import/no-mutable-exports': 2,

    // module systems
    'import/no-commonjs': 0,
    'import/no-amd': 2,
    'import/no-nodejs-modules': 0,

    // style guide
    'import/imports-first': 2,
    'import/no-duplicates': 0, // it's fine because `no-duplicate-imports` and `import/extensions` are enabled
    'import/no-namespace': 0,
    'import/extensions': [2, {js: 'never', jsx: 'never'}],
    'import/order': [2, {'newlines-between': 'never'}],
    'import/newline-after-import': 2,
    'import/prefer-default-export': 0,
  },
};
