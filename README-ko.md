# [![prev](https://cdn.rawgit.com/preco21/eslint-config-prev/master/assets/logo.svg)](https://github.com/preco21/eslint-config-prev)

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-prev.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-prev)
[![Build Status](https://img.shields.io/travis/preco21/eslint-config-prev/master.svg?style=flat-square)](https://travis-ci.org/preco21/eslint-config-prev)
[![Dependency Status](https://dependencyci.com/github/preco21/eslint-config-prev/badge?style=flat-square)](https://dependencyci.com/github/preco21/eslint-config-prev)

> 기분 좋은 하루를 위한 ESLint 프리셋

## 설치하기

### 1. 프리셋

```bash
$ npm install --save-dev eslint-config-prev
```

### 2. 종속성

`base` 프리셋을 사용하려면, ESLint 종속성을 설치해야 합니다:

```bash
$ npm install --save-dev babel-eslint eslint-plugin-babel eslint-plugin-import
```

`react` 프리셋을 사용하려면, `react` ESLint 플러그인도 **함께** 설치해야 합니다:

```bash
$ npm install --save-dev eslint-plugin-react
```

## 사용법

`extends` 필드를 ESLint 설정에 추가합니다. (파일이 없다면 파일을 생성합니다):

`.eslintrc.yml`:

```yaml
extends: prev
```

`react` 규칙을 사용하려면, 다음과 같이 작성합니다:

```yaml
extends: prev/react
```

브라우저 환경이라면, 빌트인 변수 지원을 위해 `env`를 사용할 수도 있습니다:

```yaml
extends: prev
env:
  browser: true
```

[Electron](electron.atom.io) 환경이라면, `core-modules` 설정에 `electron`을
추가해야 합니다:

```yaml
extends: prev
settings:
  import/core-modules: electron
```

## 배지

> [![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)

```markdown
[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
```

## 라이센스

[MIT](http://preco.mit-license.org/)
