# 🎓 비욘드 인사이트 (Beyond Insight)

> **인터넷 강의 플랫폼의 전형적인 페이지 흐름을 기반으로  
> SCSS 아키텍처 설계와 jQuery 인터랙션을 중심으로 구현한 퍼블리싱 프로젝트입니다.**  
> 💡 실제 서비스 구조를 가정하여 메인 → 카테고리 → 상세 → 장바구니 → 회원가입까지 전체 흐름을 구성했습니다.

---

## 📊 프로젝트 진행

### 📝 업무 및 역할
> 퍼블리싱 ***100%***

### 📆 작업 기간
> 2026.02.23 ~ 2026.03.03 (1 week)

### 🛠️ 기술 스택

#### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)

#### Library
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)
![Bootstrap Icon](https://img.shields.io/badge/Bootstrap_Icon-7952B3?style=flat-square)
![Slick](https://img.shields.io/badge/Slick_Slider-000000?style=flat-square)
![The Final Countdown](https://img.shields.io/badge/Countdown_Plugin-FF6F61?style=flat-square)

---

## 🔗 작업 결과물

- 🌐 **웹사이트 바로가기**  
  👉 [비욘드 인사이트](https://kimdo0-0515.github.io/beyond-insight/)

---

## 🧭 웹사이트 개요

### 📌 프로젝트 소개

비욘드 인사이트는 온라인 강의 플랫폼을 가정하여 제작한 퍼블리싱 프로젝트입니다.  

강의 플랫폼에서 자주 사용되는 구조인:

- 메인 페이지
- 카테고리 리스트
- 강의 상세 페이지
- 장바구니
- 회원가입 / 로그인 모달

흐름을 실제 서비스처럼 설계하여 구현하였습니다.

단순 화면 구현이 아닌,  
**SCSS 구조 설계 + jQuery 기반 인터랙션 제어 + 컴포넌트 분리 방식(include 구조)** 를 중심으로 제작했습니다.

---

### 🎯 제작 목표

- SCSS 변수 기반 디자인 시스템 설계
- 반응형 분리 구조 (PC / Tablet / Mobile)
- jQuery를 활용한 UI 상태 제어
- 실제 서비스와 유사한 페이지 이동 패턴 구현
- 재사용 가능한 header / footer include 구조 설계

---

## ✨ 주요 기능

### 1️⃣ 메인 페이지 (index.html)

- Slick Slider 기반 메인 배너 자동 슬라이드
- 카테고리 바로가기 섹션
- 강의 리스트 슬라이드 (반응형 대응)
- 스크롤 시 Header 고정 처리
- 상단 이동 버튼 (Go to Top)
- 얼리버드 할인 카운트다운 기능 (The Final Countdown)

---

### 2️⃣ 카테고리 페이지 (category-main.html)

- 세부 카테고리 버튼 active 상태 제어
- 정렬 select UI 구성
- 할인 필터 버튼 UI
- 카드형 강의 리스트 구성

---

### 3️⃣ 강의 상세 페이지 (class-detail.html)

- 상세 상단 커버 영역
- 스크롤 네비게이션 (부드러운 이동)
- 커리큘럼 아코디언 UI
- 전체 펼치기 / 접기 기능
- 수강 후기 별점 UI 구성
- FAQ 아코디언 기능
- 공유 모달 UI

---

### 4️⃣ 장바구니 페이지 (take-course.html)

- 전체 선택 체크박스 기능
- 개별 삭제 / 전체 삭제 기능
- 장바구니 비었을 때 예외 UI 처리
- 결제 금액 요약 UI 구성
- 장바구니 담기 확인 알림 UI

---

### 5️⃣ 회원가입 페이지 (member-register.html)

- 비밀번호 보기 / 숨기기 toggle
- 로그인 모달과 동일한 구조 재사용
- 약관 동의 UI 구성

---

## 🧠 인터랙션 설계 포인트

### 1️⃣ Header / Footer include 구조

- `header.html`, `footer.html` 분리
- jQuery `.load()`로 공통 컴포넌트 삽입
- 로그인 모달을 header 내부에 구성하여 모든 페이지에서 공통 사용

→ 유지보수성과 재사용성을 고려한 구조 설계

---

### 2️⃣ 반응형 대응 전략

- SCSS 파일을 역할별로 분리
  - `style.scss` (기본 스타일)
  - `responsive-tab.scss`
  - `responsive-mo.scss`
- JS에서도 window width 기준으로 동작 분기 처리

---

### 3️⃣ UI 상태 제어

- active 클래스 기반 상태 관리
- slideToggle / fadeIn / fadeOut 활용
- body에 active 클래스 부여하여 모달 오픈 시 스크롤 제어

---

### 4️⃣ 플러그인 제어

- Slick Slider 반응형 옵션 구성
- Countdown 플러그인으로 실시간 시간 계산
- 슬라이더 breakpoint 설정으로 해상도 대응

---

## 📁 프로젝트 폴더 구조

```text
project-root/
├─ index.html
├─ category-main.html
├─ class-detail.html
├─ take-course.html
├─ member-register.html
│
├─ include/
│  ├─ header.html
│  └─ footer.html
│
├─ scss/
│  ├─ font.scss
│  ├─ variables.scss
│  ├─ reset.scss
│  ├─ style.scss
│  ├─ responsive-tab.scss
│  └─ responsive-mo.scss
│
├─ css/
│  ├─ font.css
│  ├─ variables.css
│  ├─ reset.css
│  ├─ style.css
│  ├─ responsive-tab.css
│  └─ responsive-mo.css
│
├─ script/
│  ├─ slick/
│  ├─ the-final-countdown/
│  └─ custom.js
│
└─ img/
```

---

## 📦 사용 라이브러리

- **jQuery**
  - DOM 제어 및 이벤트 핸들링
  - 모달, 아코디언, 체크박스 상태 관리
  - `.load()`를 활용한 header / footer include 처리

- **Bootstrap Icon**
  - 별점, 장바구니, 알림, 하트 아이콘 등 UI 아이콘 구성

- **Slick Slider**
  - 메인 배너 슬라이드
  - 강의 카드 슬라이드
  - 반응형 breakpoint 기반 슬라이드 개수 제어

- **The Final Countdown**
  - 얼리버드 할인 종료 시간 카운트다운 구현
  - 실시간 날짜 계산 및 포맷 출력

---

## 🚀 프로젝트를 통해 학습한 내용

### 1️⃣ SCSS 구조 설계

- `variables.scss`를 활용한 디자인 토큰 관리
- reset / font / layout / responsive 파일 분리
- 유지보수를 고려한 구조적 스타일링 설계
- 반응형 전용 파일 분리 전략

---

### 2️⃣ 공통 컴포넌트 분리 전략

- header / footer 분리 후 jQuery `.load()`로 삽입
- 모달을 공통 영역에 배치하여 전 페이지에서 재사용
- 구조 재사용을 고려한 HTML 설계 경험

---

### 3️⃣ jQuery 기반 UI 상태 제어

- active 클래스 기반 인터랙션 제어
- slideToggle / fadeIn / fadeOut 활용
- 체크박스 전체 선택 / 개별 선택 동기화 로직 구현
- 장바구니 삭제 시 예외 처리 UI 구성

---

### 4️⃣ 플러그인 제어 및 반응형 대응

- Slick Slider breakpoint 옵션 설계
- 해상도별 슬라이드 개수 제어
- resize 이벤트를 활용한 동작 분기 처리
- Countdown 플러그인 날짜 제어 방식 이해

---

### 5️⃣ 실제 서비스 흐름 설계 경험

- 메인 → 카테고리 → 상세 → 장바구니 → 회원가입
- 전형적인 온라인 강의 플랫폼 구조 구현
- 사용자 흐름 기반 UI 구성 경험

---

## 🙌 마무리

비욘드 인사이트 프로젝트는 단순 화면 구현을 넘어  
**온라인 강의 플랫폼의 실제 서비스 흐름을 가정하여 설계한 퍼블리싱 프로젝트**입니다.

SCSS 구조 설계, 공통 컴포넌트 분리, jQuery 기반 인터랙션 구현을 통해  
UI 구성 능력뿐 아니라 **구조 설계와 상태 관리에 대한 이해를 함께 확장할 수 있었습니다.**

향후에는 Vanilla JS 또는 React 기반으로 동일 구조를 재구성하여  
컴포넌트 단위 아키텍처로 확장하는 것을 목표로 합니다.
