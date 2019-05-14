'use strict';

// prettier-ignore
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: [
    './rules/base',
    './rules/import',
    './rules/babel',
  ].map(require.resolve),
};
