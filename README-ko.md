# [![prev](https://rawgit.com/preco21/eslint-config-prev/master/media/logo.png)](https://github.com/preco21/eslint-config-prev)

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-prev.svg)](https://www.npmjs.com/package/eslint-config-prev)
[![Build Status](https://travis-ci.org/preco21/eslint-config-prev.svg?branch=master)](https://travis-ci.org/preco21/eslint-config-prev)
[![Dependency Status](https://dependencyci.com/github/preco21/eslint-config-prev/badge)](https://dependencyci.com/github/preco21/eslint-config-prev)

> ES2015+ 활용을 위한 ESLint 공유 설정

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

## 사용할 수 있는 설정들

이 공유 설정에서 제공되는 모든 설정들은 [ECMAScript 모듈][esm]과 `esnext` 기능을 기본적으로 지원합니다.

* `prev`: 일반적인 JavaScript 프로젝트를 위한 기본 설정입니다. 이 설정은 `node` 환경에서 작업하고 있는 것을 가정합니다 (예: `nodejs`, `webpack`, ...).
* `prev/react`: React 프로젝트를 위한 React와 JSX 지원을 포함하는 설정입니다.
* `prev/native`: ReactNative 프로젝트를 위한 React와 JSX 지원을 포함하는 설정입니다.

_브라우저_ 환경의 코드에서 사용하려면, `env` 필드에 `browser` 옵션을 추가해야 합니다:

```yaml
env:
  browser: true
```

## 고급

### 전역 변수

언제나 글로벌 변수 (예: 외부 라이브러리 사용)를 사용해야 한다면, ESLint가 이 변수들을 인식할 수 있도록 프로젝트 ESLint 설정에 다음과 같이 추가할 수 있습니다:

```yaml
globals:
  $: false
```

이렇게 설정내에서 `globals` 객체의 속성으로 `boolean` 값을 가지는 변수 이름을 지정할 수 있습니다. 값을 `true` 로 지정하면 코드 내에서 변수가 덮어씌어질 수 있게 되며, `false` 로 지정하면 덮어쓰기를 허용하지 않습니다.

### `script` 소스 타입 사용하기

모든 설정은 `module` 문법을 기본적으로 활성화시킵니다. 다음을 프로젝트 ESLint 설정에 추가하면 비활성화할 수 있습니다:

```yaml
parserOptions:
  sourceType: script
```

### ES2015+ 대신 ES5 사용하기

이것은 일반적으로 권장되지 않지만, 필요하다면 다음을 추가함으로써 ES5 환경으로 되돌아갈 수 있습니다. 이 코드는 환경을 ES5로 바꿉니다:

```yaml
env:
  es6: false
parserOptions:
  ecmaVersion: 5
```

**참고:** 하지만, 이 공유 설정은 ES2015+ 환경에서 사용할 것을 상정하고 만든 설정이기 때문에 ESLint가 에러나 경고를 표시할 수도 있습니다. 이러한 경우 수동으로 안전하게 해당하는 규칙을 비활성화 할 수 있습니다.

### 설정 조합하기

기본적으로, 위에서 소개한 top-level 설정들은 [ECMAScript 모듈][esm]과 `Babel`을 통한 `esnext` 기능 지원을 사용하도록 강제하고 있습니다.

이러한 기능을 무조건 사용하고 싶지 않다면, `rules` 경로에서 필요한 설정만 선택한 후 합쳐서 자신만의 규칙을 만들 수 있습니다:

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

만약 [Electron](electron.atom.io) 환경에 있다면 [`eslint-import-plugin`][eslint-import-plugin] 이 `electron` 모듈을 `path` 와 같은 `core` 모듈로 인식할 수 있도록, `core-modules`에 `electron` 모듈을 추가해야 합니다:

:

```yaml
settings:
  import/core-modules: electron
```

ESLint 설정에 대한 더 자세한 내용은 [여기]((http://eslint.org/docs/user-guide/configuring))를 참고하세요.

## 뱃지

이 ESLint 공유 설정이 마음에 드셨다면 프로젝트에 멋진 뱃지를 추가해보세요!

> [![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev)

```markdown
[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev)
```

## 라이센스

[MIT](http://preco.mit-license.org/)

[esm]: http://2ality.com/2014/09/es6-modules-final.html
[eslint-import-plugin]: https://github.com/benmosher/eslint-plugin-import
