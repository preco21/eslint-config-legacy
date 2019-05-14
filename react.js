'use strict';

// prettier-ignore
module.exports = {
  extends: [
    './index',
    './rules/react',
  ].map(require.resolve),
};
