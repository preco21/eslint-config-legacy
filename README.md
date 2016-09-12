# [![prev](https://cdn.rawgit.com/preco21/eslint-config-prev/master/assets/logo.svg)](https://github.com/preco21/eslint-config-prev)

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-prev.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-prev)
[![Build Status](https://img.shields.io/travis/preco21/eslint-config-prev/master.svg?style=flat-square)](https://travis-ci.org/preco21/eslint-config-prev)
[![Dependency Status](https://dependencyci.com/github/preco21/eslint-config-prev/badge?style=flat-square)](https://dependencyci.com/github/preco21/eslint-config-prev)

> ESLint sharable config for the best feeling

**Translations:** [Korean](./README-ko.md)

## Installation

### 1. Base

```bash
$ npm install --save-dev eslint-config-prev
```

### 2. Dependencies

To use the `base` config, you need to install ESLint dependencies:

```bash
$ npm install --save-dev babel-eslint eslint-plugin-babel eslint-plugin-import
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

If you want `react` rules:

```yaml
extends: prev/react
```

If you are on browser environment, you may want to add `env` field. For example:

```yaml
extends: prev/react
env:
  browser: true
```

## Badge

> [![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)

```markdown
[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
```

## License

[MIT](http://preco.mit-license.org/)
