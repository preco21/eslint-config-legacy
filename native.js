'use strict';

module.exports = {
  extends: [
    './react',
  ].map(require.resolve),
  settings: {
    'import/core-modules': [
      'resolveAssetSource',
    ],
  },
  globals: {
    __DEV__: false,
    Atomics: false,
    ErrorUtils: false,
    SharedArrayBuffer: false,
  },
};
