# [![prev](https://rawgit.com/preco21/eslint-config-prev/master/media/logo.png)](https://github.com/preco21/eslint-config-prev)

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-prev.svg)](https://www.npmjs.com/package/eslint-config-prev)
[![Build Status](https://travis-ci.org/preco21/eslint-config-prev.svg?branch=master)](https://travis-ci.org/preco21/eslint-config-prev)
[![Dependency Status](https://dependencyci.com/github/preco21/eslint-config-prev/badge)](https://dependencyci.com/github/preco21/eslint-config-prev)

> ES2015+ 활용을 위한 ESLint 구성

## 설치하기

```bash
$ npm install --save-dev eslint eslint-config-prev
```

## 사용법

`extends` 필드를 ESLint 설정에 추가합니다. (파일이 없다면 파일을 하나 생성합니다):

`.eslintrc.yml`:

```yaml
extends: prev
```

`package.json`을 선호한다면:

```json
{
  "eslintConfig": {
    "extends": "prev"
  }
}
```

## 사용할 수 있는 구성들

모든 구성은 [ECMAScript 모듈][esm] 지원과 `esnext` 기능을 기본적으로 지원합니다.

* `prev`: 일반적인 JavaScript 프로젝트를 위한 기본 구성입니다. 이 구성은 `node` 환경에서 작업하고 있는 것을 가정합니다 (`nodejs`, `webpack`, ...).
* `prev/react`: React 프로젝트를 위한 React와 JSX 지원을 포함하는 구성입니다.
* `prev/native`: ReactNative 프로젝트를 위한 React와 JSX 지원을 포함하는 구성입니다.

_브라우저_ 환경의 코드에서 사용하려면, `env` 필드에 `browser` 옵션을 추가해야 합니다:

```yaml
env:
  browser: true
```

## 고급 사용법

### 글로벌

글로벌 변수 (외부 라이브러리 사용등)가 필요하다면, 다음 형태로 구성에 추가할 수 있습니다:

```yaml
globals:
  $: false
```

속성으로 `Boolean` 값을 가지는 변수 이름을 받고, 이 값은 덮어쓰기를 방지합니다. `true`로 지정하면 변수 덮어쓰기를 허용하고, `false`로 지정하여 덮어쓰기를 허용하지 않습니다.

### `script` 소스 타입 사용하기

모든 구성은 `module` 문법을 기본적으로 활성화시킵니다. 다음을 구성에 추가하면 비활성화할 수 있습니다:

```yaml
parserOptions:
  sourceType: script
```

### ES2015+ 대신 ES5 사용하기

ES5로 되돌아가는 것은 권장하지 않지만, 다음을 구성에 추가하면 ES5 환경으로 변경할 수 있습니다:

```yaml
env:
  es6: false
parserOptions:
  ecmaVersion: 5
```

### 구성 조합하기

기본적으로, 위에서 소개한 최상단 구성들은 [ECMAScript 모듈][esm]과 `Babel`을 통한 `esnext` 기능 지원을 강제하고 있습니다.

이러한 기능이 필요하지 않다면, `rules` 경로에서 필요한 구성만 선택해서 사용할 수 있습니다:

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

[Electron](electron.atom.io) 환경에 있다면, `core-modules`에 `electron` 모듈을 추가해야 합니다:

```yaml
settings:
  import/core-modules: electron
```

ESLint 구성에 대한 더 자세한 내용은 [여기]((http://eslint.org/docs/user-guide/configuring))를 참고하세요.

## 뱃지

이 구성이 마음에 드셨다면 프로젝트에 멋진 시안색 뱃지를 추가해보세요!

> [![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev)

```markdown
[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev)
```

## 라이센스

[MIT](http://preco.mit-license.org/)

[esm]: http://2ality.com/2014/09/es6-modules-final.html
