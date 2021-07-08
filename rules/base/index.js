'use strict';

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    './possible-errors',
    './best-practices',
    './strict-mode',
    './variables',
    './stylistic-issues',
    './ecmascript-6',
  ].map(require.resolve),
};
