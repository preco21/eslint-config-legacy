# [![prev](https://cdn.rawgit.com/preco21/eslint-config-prev/master/assets/logo.svg)](https://github.com/preco21/eslint-config-prev)

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-prev.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-prev)
[![Build Status](https://img.shields.io/travis/preco21/eslint-config-prev/master.svg?style=flat-square)](https://travis-ci.org/preco21/eslint-config-prev)
[![Development Dependency Status](https://img.shields.io/david/dev/preco21/eslint-config-prev.svg?style=flat-square)](https://david-dm.org/preco21/eslint-config-prev#info=devDependencies)
[![Peer Dependency Status](https://img.shields.io/david/peer/preco21/eslint-config-prev.svg?style=flat-square)](https://david-dm.org/preco21/eslint-config-prev#info=peerDependencies)

> ESLint sharable config for the best feeling

## Installation

### 1. Base

```bash
$ npm install eslint-config-prev --save-dev
```

### 2. Dependencies

To use the `base` config, you have to install ESLint dependencies:

```bash
$ npm install babel-eslint eslint-plugin-babel eslint-plugin-import --save-dev
```

## Usage

Add `extends` field to your ESLint config:

`.eslintrc.yml`:

```yaml
extends: prev
```

If you are on browser environment, you may want to add `env` field. For example:

```yaml
extends: prev
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
