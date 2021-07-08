'use strict';

module.exports = {
  extends: [
    './possible-errors',
    './best-practices',
    './strict-mode',
    './variables',
    './stylistic-issues',
    './ecmascript-6',
  ].map(require.resolve),
};
