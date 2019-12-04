# [![@preco21/eslint-config](https://rawgit.com/preco21/eslint-config/master/media/logo.png)](https://github.com/preco21/eslint-config)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![NPM Version](https://img.shields.io/npm/v/@preco21/eslint-config.svg)](https://www.npmjs.com/package/@preco21/eslint-config)
[![Build Status](https://travis-ci.org/preco21/eslint-config.svg?branch=master)](https://travis-ci.org/preco21/eslint-config)

> ESLint shareable config for `@preco21`

Extends [JavaScript Standard Style](https://standardjs.com/) to his personal preferences.

## Install

```bash
$ npm install --save-dev eslint @preco21/eslint-config
```

## Usage

Add `extends` field to your ESLint config (if you haven't created, create one):

`.eslintrc.yml`:

```yaml
extends: @preco21/eslint-config
```

Or if you prefer `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@preco21/eslint-config"
  }
}
```

## Available configs

Every config provided by this sharable config have [ECMAScript modules][esm] support and `esnext` features by default.

- `@preco21/eslint-config`: The basic config for common JavaScript projects. This config is assuming you are in `node` environment (e.g. `nodejs`, `webpack`, ...).
- `@preco21/eslint-config/react`: The config for React projects with support for React and JSX.
- `@preco21/eslint-config/native`: The config for ReactNative projects with support for React and JSX.

If you are on _browser_ environment, you may need to add `browser` option to `env` field:

```yaml
env:
  browser: true
```

- [Why there's no such `@preco21/eslint-config/web` instead?](https://github.com/airbnb/javascript/issues/1002)

## Advanced usage

### Globals

Whenever you need to use global variables for some case (e.g. refering external library), you can add them to your config to let ESLint recognize that variables are populated in `global`:

```yaml
globals:
  $: false
```

You can specify the variable name with `boolean` value as a property of `globals` object in the config. Specifying `true` will allow the variable to be overwritten in the code or `false` to disallow overwriting.

### Using `script` source type

Every config enables `modules` syntax by default. Add next to config if you want to disable it:

```yaml
parserOptions:
  sourceType: script
```

### Using ES5 instead of ES2015+

This is not generally recommended, you can fallback to ES5 by adding next to your config if you need. This will change environment to ES5:

```yaml
env:
  es6: false
parserOptions:
  ecmaVersion: 5
```

**Note:** However, ESLint might still show you error or warning since this sharable config is created in mind that you are in ES2015+ environment. In this case, you can safely disable the rule manually.

### Composing configs

By default, the top-level configs described above enforce you to use [ECMAScript modules][esm] and `esnext` features via `Babel`.

If you don't want to be enforced by this rule to use them, you can choose what you just need and compose your own rules from `rules` directory:

`.eslintrc.yml`:

```yaml
extends:
  - @preco21/eslint-config/rules/base
  - @preco21/eslint-config/rules/react
```

`package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@preco21/eslint-config/rules/base", "@preco21/eslint-config/rules/react"]
  }
}
```

### Electron

If you are on [Electron](https://electronjs.org/) environment, you may need to add `electron` module to `core-modules`. So that [`eslint-import-plugin`][eslint-import-plugin] can consider the `electron` module as a `core` module like `path`:

```yaml
settings:
  import/core-modules: electron
```

You can find more details about ESLint configuration [here](http://eslint.org/docs/user-guide/configuring).

## License

[MIT](http://preco.mit-license.org/)

[esm]: http://2ality.com/2014/09/es6-modules-final.html
[eslint-import-plugin]: https://github.com/benmosher/eslint-plugin-import
