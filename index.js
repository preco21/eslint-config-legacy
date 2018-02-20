'use strict';

module.exports = {
  extends: [
    './rules/base',
    './rules/esnext',
    './rules/import',
  ].map(require.resolve),
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        arrowParens: 'always',
      },
    ],
  },
};
