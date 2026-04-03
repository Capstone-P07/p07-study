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
   - 본인 이름의 피처 브랜치(예: `feature/kwon`) 생성 후 `push`
   - GitHub에서 `dev` 브랜치로 **Pull Request(PR)** 생성
   - 팀원 리뷰 후 `Merge`

## 🚀 저장소 초기 세팅 및 PR 요청 실전 단계

### [Step 0] 처음 시작할 때 (저장소 클론)

팀원들이 이 프로젝트를 로컬 컴퓨터에 처음 세팅할 때 **딱 한 번만** 실행하는 명령어입니다.
(`git clone`을 하면 `git remote` 연결이 자동으로 완료되므로 따로 설정할 필요가 없습니다.)

```bash
# 1. 원격 저장소를 내 컴퓨터로 내려받기
git clone https://github.com/Capstone-P07/p07-study.git

# 2. 내려받은 폴더로 이동하기
cd p07-study
```

### [Step 1] 터미널 작업 (CLI)

새로운 작업을 시작하고 코드를 업로드할 때 매번 반복하는 과정입니다.

```bash
# 1. 원격 저장소의 최신 내용 가져오기 (작업 시작 전 필수!)
git checkout dev
git pull origin dev

# 2. 새로운 작업용 브랜치 생성 (작업 단위별로 새로 생성) -> 강의 듣고 실습(타이핑) 진행
git checkout -b feature/본인이름

# 3. 모든 변경사항을 장바구니에 담기
git add .

# 4. 커밋 메시지 작성
git commit -m "nest: lec08 실습"

# 5. 내 작업 브랜치를 GitHub에 업로드
git push origin feature/본인이름
```

### [Step 2] GitHub 웹사이트 작업 (UI)

1. GitHub 저장소 접속 후 **"Compare & pull request"** 클릭
2. **base: dev** ← **compare: feature/본인이름** 설정 확인
3. 제목과 내용을 작성하고 **Create pull request** 클릭

## ✅ 초기 설정 완료 후 체크리스트

위의 내용을 확인했다면 아래 순서로 첫 PR을 날려보세요.

```bash
1. `git checkout -b feature/initial-setup`
2. `git add .`
3. `git commit -m "nest: lec08 실습"
4. `git push origin feature/initial-setup`
5. GitHub에서 PR 생성 후 Merge 하기
```

## 💡 꼭 기억하세요!

- **PR을 쓰는 이유:** `dev` 브랜치를 안전하게 보호하고 팀원들과 코드를 공유하기 위함입니다.
- **Merge(병합):** 팀원 리뷰 후 `Merge pull request`를 누르면 `dev`에 반영됩니다.
- **최신 상태 유지:** 작업 시작 전 항상 `git pull origin dev`를 하세요.
- **Submodule 주의:** 개인 폴더 내부에 `.git` 폴더가 들어가지 않도록 하세요.

```

```
