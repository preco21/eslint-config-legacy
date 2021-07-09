'use strict';

/**
 * TypeScript rules
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    // typescript rules
    // '@typescript-eslint/adjacent-overload-signatures': 'error',
    // '@typescript-eslint/array-type': 'error',
    // '@typescript-eslint/prefer-for-of': 'off', // check
    // '@typescript-eslint/no-var-requires': 'error',
    // 'no-useless-constructor': 'off',
    // '@typescript-eslint/no-useless-constructor': 'error',
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'error',
    // '@typescript-eslint/no-unnecessary-type-assertion': 'off', // check
    // '@typescript-eslint/no-unnecessary-qualifier': 'off', // check
    // '@typescript-eslint/no-type-alias': 'off', // check
    // '@typescript-eslint/no-this-alias': 'off', // check
    // '@typescript-eslint/no-require-imports': 'off',
    // '@typescript-eslint/no-parameter-properties': 'off',
    // '@typescript-eslint/no-object-literal-type-assertion': 'error',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-namespace': 'off', // check
    // '@typescript-eslint/no-misused-new': 'error',
    // '@typescript-eslint/no-inferrable-types': 'off', // check
    // '@typescript-eslint/no-for-in-array': 'off', // check -> for base
    // '@typescript-eslint/no-floating-promises': 'off', // check

    // '@typescript-eslint/ban-types': 'error',
    // '@typescript-eslint/class-name-casing': 'error',
    // '@typescript-eslint/explicit-function-return-type': 'warn',
    // '@typescript-eslint/explicit-member-accessibility': 'error',
    // '@typescript-eslint/interface-name-prefix': 'error',
    // '@typescript-eslint/member-delimiter-style': 'error',
    // '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    // '@typescript-eslint/no-empty-interface': 'error',
    // '@typescript-eslint/no-explicit-any': 'warn',

    // '@typescript-eslint/no-triple-slash-reference': 'error',

    // '@typescript-eslint/prefer-interface': 'error',
    // '@typescript-eslint/prefer-namespace-keyword': 'error',
    // '@typescript-eslint/type-annotation-spacing': 'error',

    // extension rules
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    // FIXME:
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    // FIXME:
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',
    // FIXME:
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    // FIXME:
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'all', {
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
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
    // FIXME:
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    // FIXME:
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    // FIXME:
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // FIXME:
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'quotes': 'off',
    '@typescript-eslint/quotes': 'off',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    // FIXME:
    'return-await': 'off',
    '@typescript-eslint/return-await': 'off',
    // FIXME:
    'semi': 'off',
    '@typescript-eslint/semi': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
  },
};
