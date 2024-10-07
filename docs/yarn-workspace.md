## 🐈 Yarn Workspace 로 모노레포 관리하기

### 📦 `root/package.json` 및 `root/<dir>/<package>/package.json` 설정

프로젝트가 공용으로 공유할 패키지에 대한 정보, workspace 에 대한 설명이 들어있습니다.

#### 1. `workspaces` 프로퍼티 설정

`workspaces` 는 각각의 패키지 (앱 또는 서비스) 가 저장되는 디렉토리에 대한 경로를 입력합니다.

> 예) `root/packages/packageA`, `root/packages/packageB` 으로 패키지가 구성된 경우

```json
// package.json
{
    "workspaces": ["packages/packageA", "packages/packageB"]
}
```

#### 2. `scripts` 프로퍼티 설정

`root/package.json` 에 스크립트를 설정해두면 하위 패키지들의 스크립트를 디렉토리를 이동하지 않고도, 루트 경로에서 실행할 수 있습니다.

> 예) `root/packages/packageA` 으로 패키지가 구성된 경우, 다음과 같이 scripts 를 루트 경로의 package.json 에 추가합니다.
>
> 이때, `yarn workspace` 뒤에 오는 인자는 하위 개별 패키지의 package.json 의 name 프로퍼티 값과 동일해야 합니다

```json
// root/packages/packageA/package.json
{
    "name": "packageA",
    "scripts": {
        "start": "ts-node index.ts"
    }
}
```

```json
// root/package.json
{
    "name": "root",
    "scripts": {
        "package-a": "yarn workspace packageA"
    },
    "workspaces": ["packages/packageA"]
}
```

### 🔧 `tsconfig.json` 설정파일 공유하기

#### 1. `tsconfig.json` 의 `references` 속성

`references` 속성은 tsconfig 에게 개별 tsconfig 파일이 위치한 경로를 알려주는 역할을 합니다.

yarn workspace 에서 루트 경로로 설정된 tsconfig 를 개별 패키지가 확장하여 사용하기 위해 설정하는 프로퍼티입니다.

> 예) `<dir>` 하위 `<my-package>` 디렉토리에 개별 패키지가 구성된 경우

```json
// root/tsconfig.json
{
    "references": [
        {
            "path": "./<dir>/<my-package>"
        }
    ]
}
```

#### 2. `tsconfig.json` 의 `extends` 속성

개별 tsconfig 에게 다른 tsconfig 파일을 확장하여 설정을 할 수 있게하는 프로퍼티입니다.

yarn workspace 에서 개별 패키지의 tsconfig 가, 루트의 tsconfig 를 확장하여 사용하기 위해 설정하는 프로퍼티입니다.

> 예) `<dir>` 하위 `<my-package>` 디렉토리에 개별 패키지가 구성된 경우

```json
// root/<dir>/<my-package>/tsconfig.json
{
    "extends": "../../tsconfig.json"
}
```

### 🔧 `.prettierrc.cjs` 설정파일 공유하기

prettier 코드 포맷팅은 루트에서 관리하여 통일하는 경우가 많지만, tsconfig 처럼 개별 패키지에서 extend 하여 사용할 수 있습니다.

#### 1. `.prettierrc.cjs` 로 확장자 변경하기

CommonJS 모듈시스템을 사용하여, 루트 디렉토리의 prettier 설정 파일을 공유하기 위해 prettier 의 확장자를 `.prettierrc.cjs` 와 같이 변경합니다

```cjs
module.exports = {
    // prettier 코드 규칙 집합
};
```

#### 2. 루트 경로의 규칙 확장하여 사용하기

이후 개별 패키지에서 구조분해할당을 이용해 다음과 같이 확장하여 사용합니다.

```cjs
module.exports = {
    ...require("../../path-to-root-prettierrc.cjs"),
};
```
