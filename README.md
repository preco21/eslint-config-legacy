# [![prev](https://rawgit.com/preco21/eslint-config-prev/master/media/logo.png)](https://github.com/preco21/eslint-config-prev)

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-prev.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-prev)
[![Build Status](https://img.shields.io/travis/preco21/eslint-config-prev/master.svg?style=flat-square)](https://travis-ci.org/preco21/eslint-config-prev)
[![Dependency Status](https://dependencyci.com/github/preco21/eslint-config-prev/badge?style=flat-square)](https://dependencyci.com/github/preco21/eslint-config-prev)

> ESLint shareable config for make use of ES2015+

**Translations:** [Korean](./README-ko.md)

## Install

```bash
$ npm install --save-dev eslint eslint-config-prev
```

## Usage

Add `extends` field to your ESLint config (if you haven't created, create one):

`.eslintrc.yml`:

```yaml
extends: prev
```

Or if you prefer `package.json`:

```json
{
  "eslintConfig": {
    "extends": "prev"
  }
}
```

## Available configs

Every config has [ECMAScript modules][esm] support and `esnext` features are enabled by default.

* `prev`: The basic config for common JavaScript projects. This config is assuming you are in `node` environment (`nodejs`, `webpack`, ...).
* `prev/react`: The config for React projects with support for React and JSX.
* `prev/native`: The config for ReactNative projects with support for React and JSX.

If you are on _browser_ environment, you may need to add `browser` option to `env` field:

```yaml
env:
  browser: true
```

* [Why not `prev/web`?](https://github.com/airbnb/javascript/issues/1002)

## Advanced usage

### Globals

If you need global variable for some reasons (refering external library), then you can add them to your config:

```yaml
globals:
  $: false
```

Which receives variable name with `Boolean` value as a property, that value controls overwriting. `true` to allow the variable to be overwritten or `false` to disallow overwriting.

### Using `script` source type

Every config enables `modules` syntax by default. Add next to config if you want to disable it:

```yaml
parserOptions:
  sourceType: 'script'
```

### Using ES5 instead of ES2015+

I don't recommend fallback to ES5, add next to config will change environment to ES5:

```yaml
env:
  es6: false
parserOptions:
  ecmaVersion: 5
```

### Config composition

Basically, every top-level config described above enforces to use [ECMAScript modules][esm] and `esnext` features via `Babel`.

If you don't want to those features, then you can pick what you needs from `rules` directory:

`.eslintrc.yml`:

```yaml
extends:
  - prev/rules/base
  - prev/rules/react
```

`package.json`:

```json
{
  "eslintConfig": {
    "extends": [
      "prev/rules/base",
      "prev/rules/react"
    ]
  }
}
```

### Electron

If you are on [Electron](electron.atom.io) environment, you may need to add `electron` module to `core-modules`:

```yaml
settings:
  import/core-modules: electron
```

You can find more details about ESLint configuration [here](http://eslint.org/docs/user-guide/configuring).

## Badge

If you loved this config, consider to add next fancy `cyan` badge to your project!

> [![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)

```markdown
[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
```

## License

[MIT](http://preco.mit-license.org/)

[esm]: http://2ality.com/2014/09/es6-modules-final.html
