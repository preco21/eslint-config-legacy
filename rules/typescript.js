'use strict'

// prettier-ignore
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // typescript rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/prefer-for-of': 'off', // check
    '@typescript-eslint/no-var-requires': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // check
    '@typescript-eslint/no-unnecessary-qualifier': 'off', // check
    '@typescript-eslint/no-type-alias': 'off', // check
    '@typescript-eslint/no-this-alias': 'off', // check
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // check
    '@typescript-eslint/no-misused-new': 'error',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-inferrable-types': 'off', // check
    '@typescript-eslint/no-for-in-array': 'off', // check -> for base
    '@typescript-eslint/no-floating-promises': 'off', // check

    '@typescript-eslint/ban-types': 'error',
    'camelcase': 'off',
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    'indent': 'off',
    '@typescript-eslint/indent': 'error',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',

    '@typescript-eslint/no-triple-slash-reference': 'error',

    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
  },
}
