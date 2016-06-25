'use strict';

module.exports = {
  plugins: [
    'import', // jsx도 resolver 없이 작동하는지 확인
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
  },
  rules: {
    'import/no-unresolved': [2, {commonjs: true}],
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/export': 2,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-deprecated': 0,
    'import/no-extraneous-dependencies': 2,
    'import/no-mutable-exports': 2,
    'import/no-commonjs': 0,
    'import/no-amd': 2,
    'import/no-nodejs-modules': 0,
    'import/imports-first': 2,
    // issue: https://github.com/benmosher/eslint-plugin-import/issues/242
    // 'import/no-duplicates': 1,
    'import/no-namespace': 0,
    'import/extensions': 2,
    'import/order': [2, {'newlines-between': 'never'}],
    'import/newline-after-import': 0,
    'import/prefer-default-export': 0,
  },
};
