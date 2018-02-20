'use strict';

module.exports = {
  extends: [
    ...[
      './rules/base',
      './rules/esnext',
      './rules/import',
    ].map(require.resolve),
    'prettier',
  ],
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
