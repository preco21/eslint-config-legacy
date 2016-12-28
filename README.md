# [![prev](https://cdn.rawgit.com/preco21/eslint-config-prev/master/media/logo.svg)](https://github.com/preco21/eslint-config-prev)

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-prev.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-prev)
[![Build Status](https://img.shields.io/travis/preco21/eslint-config-prev/master.svg?style=flat-square)](https://travis-ci.org/preco21/eslint-config-prev)
[![Dependency Status](https://dependencyci.com/github/preco21/eslint-config-prev/badge?style=flat-square)](https://dependencyci.com/github/preco21/eslint-config-prev)

> ESLint shareable config focused to utilize ES2015+

**Translations:** [Korean](./README-ko.md)

## Install

```bash
$ npm install --save-dev eslint-config-prev babel-eslint eslint-plugin-import eslint-plugin-babel
```

For the `react` config, you **also** need to install `react` ESLint plugin:

```bash
$ npm install --save-dev eslint-plugin-react
```

## Usage

Add `extends` field to your ESLint config:

`.eslintrc.yml`:

```yaml
extends: prev
```

If you want to use `react` rules:

```yaml
extends: prev/react
```

**Note:** If you are using `react-native`, you could use `prev/react-native` instead of `prev/react`.

If you are on browser environment, you may need to add `env` field:

```yaml
extends: prev
env:
  browser: true
```

If you are on [Electron](electron.atom.io) environment, you may need to add `electron` to `core-modules`:

```yaml
extends: prev
settings:
  import/core-modules: electron
```

You can find details about ESLint configuration [here](http://eslint.org/docs/user-guide/configuring).

## Badge

> [![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)

```markdown
[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
```

## License

[MIT](http://preco.mit-license.org/)
