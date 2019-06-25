'use strict'

// prettier-ignore
module.exports = {
  plugins: ['node'],
  rules: {
    // possible errors
    // note: some of rules have been disabled because of duplicated behaviors covered by `eslint-plugin-import`.
    'node/no-extraneous-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',

    // best practices
    'node/no-deprecated-api': 'error',

    // stylistic issues
    'node/exports-style': 'off',
    'node/file-extension-in-import': 'off',
    'node/prefer-global/buffer': 'off',
    'node/prefer-global/console': 'off',
    'node/prefer-global/process': 'off',
    'node/prefer-global/url-search-params': 'off',
    'node/prefer-global/url': 'off',
    'node/prefer-promises/dns': 'off',
    'node/prefer-promises/fs': 'off',
  },
}
