'use strict';

// prettier-ignore
module.exports = {
  plugins: ['eslint-comments'],
  rules: {
    // best practices
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-aggregating-enable': 'off',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    // stylistic issues
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': 'off',
  },
};
