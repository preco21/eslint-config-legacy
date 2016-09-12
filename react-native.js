'use strict';

module.exports = {
  extends: [
    './react',
  ].map(require.resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },
};
