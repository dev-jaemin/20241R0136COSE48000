# 먹깨비

### 개발환경 세팅
이 레포는 `bun` + `vite` + `react`(not next.js) + `stackflow` 로 구성되었습니다.

따라서 패키지 매니저 및 런타임으로 `bun` 사용하시는 것을 권장합니다.

컴퓨터에 깔려있지 않다면 공식 홈페이지에서 설치! https://bun.sh/

패키지 설치
```
bun install
```
실행(프론트 5173, 백엔드 5174 포트로 실행되는데, 가끔씩 포트 번호가 바뀌기도 하니 잘 보고 하기)
```
bun dev
```
전체 앱 빌드
```
bun run build
```

### 프로젝트 구조
- apps 폴더 밑에 앱 생성
- packages 에는 각 앱에서 사용할 공통 컴포넌트 혹은 util 함수, 타입 저장
- `TODO` : 각 리액트 페이지 및 컴포넌트가 프레임워크에 종속되지 않도록 마이크로서비스 단위로 packages 폴더로 이동시켜야 함.

### 브랜치 전략
- main에서 피쳐 브랜치 생성
- 작업 후 pr
- 완료시 main으로 머지
