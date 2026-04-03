# P07-STUDY 🚀

캡스톤 디자인 P07팀의 기술 스택 학습 및 공유를 위한 저장소입니다.

## 📂 폴더 구조

본 저장소는 팀원별 개인 학습 공간을 디렉터리로 구분하여 관리합니다.

- `p07-study-kwon`: 현석
- `p07-study-eumee`: 유미
- `p07-study-lee`: 세준
- `p07-study-yang`: 윤서

## 🛠 주요 기술 스택

- **Backend:** NestJS
- **Frontend:** Next.js, React
- **Language:** TypeScript

## 🤝 협업 규칙 (Git Flow)

1. **Main Branch:** `dev` (모든 개발 작업의 기준)
2. **작업 방식:**
   - 로컬의 본인 폴더에서 작업 후 `add` -> `commit`
   - 본인 이름의 피처 브랜치(예: `feature/kwon-study`) 생성 후 `push`
   - GitHub에서 `dev` 브랜치로 **Pull Request(PR)** 생성
   - 팀원 리뷰 후 `Merge`

## 🚀 PR(Pull Request) 요청 실전 단계

### [Step 1] 터미널 작업 (CLI)

`P07-STUDY` 최상위 폴더에서 아래 명령어를 순서대로 입력하세요.

1. 현재 브랜치를 dev로 설정 (이미 되어있다면 생략 가능)
   `git checkout dev`
2. 새로운 작업용 브랜치 생성 (협업의 기본!)
   `git checkout -b feature/본인이름-작업내용`
3. 모든 변경사항을 장바구니에 담기
   `git add .`
4. 커밋 메시지 작성
   `git commit -m "Feat: 작업 내용 설명"`
5. 내 작업 브랜치를 GitHub에 업로드
   `git push origin feature/본인이름-작업내용`

### [Step 2] GitHub 웹사이트 작업 (UI)

1. GitHub 저장소 접속 후 **"Compare & pull request"** 클릭
2. **base: dev** ← **compare: feature/본인이름-작업내용** 설정 확인
3. 제목과 내용을 작성하고 **Create pull request** 클릭

## ✅ 초기 설정 완료 후 체크리스트

위의 내용을 확인했다면 아래 순서로 첫 PR을 날려보세요.

1. `git checkout -b feature/initial-setup`
2. `git add .`
3. `git commit -m "Docs: 통합 README 작성 및 가이드 추가"`
4. `git push origin feature/initial-setup`
5. GitHub에서 PR 생성 후 Merge 하기

## 💡 꼭 기억하세요!

- **PR을 쓰는 이유:** `dev` 브랜치를 안전하게 보호하고 팀원들과 코드를 공유하기 위함입니다.
- **Merge(병합):** 팀원 리뷰 후 `Merge pull request`를 누르면 `dev`에 반영됩니다.
- **최신 상태 유지:** 작업 시작 전 항상 `git pull origin dev`를 하세요.
- **Submodule 주의:** 개인 폴더 내부에 `.git` 폴더가 들어가지 않도록 하세요.
