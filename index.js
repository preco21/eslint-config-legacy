'use strict';

module.exports = {
  extends: [
    './rules/base',
    './rules/esnext',
    './rules/import',
  ].map(require.resolve),
};
