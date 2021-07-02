'use strict';

/**
 * possible errors
 * https://eslint.org/docs/rules/#possible-errors
 */
module.exports = {
  rules: {
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'warn',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': ['warn', { checkLoops: false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false,
      // delegates to `eslint-plugin-react`
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
      enforceForSequenceExpressions: false,
      enforceForNewInMemberExpressions: false,
      enforceForFunctionPrototypeMethods: false,
    }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'warn',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-useless-backreference': 'error',
    // TODO: enable once this issue is resolved
    // https://github.com/eslint/eslint/issues/11899
    'require-atomic-updates': 'off',
    'use-isnan': 'error',
    'valid-typeof': ['error', {
      requireStringLiterals: true,
    }],
  },
};
