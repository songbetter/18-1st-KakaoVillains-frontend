# [카카오프렌즈샵](https://store.kakaofriends.com/kr/index) 을 모티브로 한 프로젝트: 카카오빌런즈
> 이 프로젝트는 카카오프렌즈 샵 사이트를 참조하여 학습목적으로 만들었습니다. 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
## Preview
>### 왜 카카오프렌즈샵을 선택했는가? 
위코드에 오기 전부터 콘텐츠와 커머스를 결합한 비즈니스 기업의 프론트개발자가 되는 것이 목표였다. (오늘의집, 카카오커머스 등)

그 이유는 커머스 기업에서 오퍼레이터 업무를 하면서 겪었던 경험 때문이다.

오퍼레이터 업무를 하면서 데이터를 다루는 데 비효율 적이라고 생각되는 부분이 많았다. 운영툴을 좀 더 효율적으로 만들 순 없을까 항상 생각했고, 어드민 개선 기획안도 냈지만, 다른 기능 개발에 밀려 간단한 기능 구현임에도 불구하고 배포하여 실제로 사용하기 까지 오랜 시간이 걸렸다.

어느 순간부터, 오퍼레이터의 고충을 알고 효율적인 운영에 도움을 주는 개발자가 되고 싶다고 생각했다. 데이터를 가지고 웹사이트에 실제로 보이는 부분을 구현해내는 개발자, 혹은 데이터를 적절한 위치에 보여주기 위한 운영 어드민 페이지를 만드는 개발자가 되고 싶었다.

구체적인 목표를 가지고 있었기 때문에 커머스 웹사이트를 구현하는 데 필요한 기능, 기술을 배우고 싶었고, 콘텐츠 부분은 기존에 우리가 실습했던 instagram과 비슷하기 때문에 짧은 시간에 구현하지 못했던 부분을 다시 공부해볼 수 있는 기회라고 생각했다.

## Overview
>초기 세팅(CRA)부터 시작해서 백엔드와 통신하여 데이터를 받아보고, AWS를 통하여 배포까지 해 본 첫 프로젝트.
피드이미지는 카카오프렌즈샵을 참고했으며, 캐릭터 및 상품 이미지는 직접 제작하였다.
### GitHub Repository
* [1st-KakaoVillains-frontend](https://github.com/wecode-bootcamp-korea/18-1st-KakaoVillains-frontend)
* [1st-KakaoVillains-backend](https://github.com/wecode-bootcamp-korea/18-1st-KakaoVillains-backend)
### 작업기간
2021/3/15 ~ 2021/3/26
### 기술스택
HTML/CSS, JavaScript(ES6+), React, SASS, Git

### 카카오빌런즈 팀원
프론트엔드 4명 (강준우, 배성훈, ⭐송나은⭐, 양지은)
백엔드 2명 (이왕록, 허정원)

### 주요 구현 기능
* Token을 활용한 로그인, 회원가입 기능
* 모달창 on/off 기능 ⭐
* infinite-scroll-component 무한스크롤 기능
* slick-slider 이미지 슬라이드 기능
* path parameter / query parameter 와 react router를 이용한 페이지네이션 기능 ⭐
* 컴포넌트 재사용 및 조건부 렌더링 기능 ⭐

## 결과
### 로그인 & 회원가입
![](https://images.velog.io/images/songbetter/post/417bc820-dda6-4b23-bfbf-4b275b41ef99/ezgif.com-gif-maker.gif)
* Token을 활용한 로그인, 회원가입 기능 구현
* 아이디, 비밀번호 8자 이상일 때 버튼 활성화기능 구현
* 회원가입 시 필수 사항을 입력하지 않았을 경우, 존재하는 이메일일 경우 회원가입 불가능
* 백엔드 POST 방식으로 계정을 확인하고 메인페이지로 연결되는 동시에 access token이 local storage에 저장.

### 메인
![](https://images.velog.io/images/songbetter/post/f65e3e32-51a4-4557-9e28-a2935b79e68e/ezgif.com-gif-maker%20(2).gif)
* 좋아요 클릭 시 계정정보 확인 후 로그인/비로그인 모달 창 구현
* infinite-scroll-component로 무한스크롤 기능 구현. 데이터 4개씩 fetch

![](https://images.velog.io/images/songbetter/post/a43940b5-9a32-4438-9613-1c4f84bb5b00/ezgif.com-gif-maker%20(3).gif)
* slick slider로 이미지 슬라이드 기능 구현
* Path parameter를 이용하여 각 피드 별 각 상품리스트로 이동기능 구현
* 상품 유무에 따라 조건부 렌더링으로 피드 구현

### 피드
![](https://images.velog.io/images/songbetter/post/4692111c-d17b-417a-8f4d-e0bbc3dcc60e/ezgif.com-gif-maker%20(4).gif)
* 기존에 입력되어 있는 댓글 데이터 fetch
* 댓글 입력 시 버튼 활성화 기능 구현
* 댓글창에 댓글 입력 시 댓글 추가 기능 구현
* 댓글 좋아요 및 카운트 기능 구현
* 댓글 삭제 기능 구현
* 입력한 댓글 DB에 POST 후 리스트 업데이트 기능 구현

### 카테고리 (Character, Subject) ⭐
![](https://images.velog.io/images/songbetter/post/2a9ede2e-302d-4ead-a3fa-6ea51a6bb713/ezgif.com-gif-maker%20(7).gif)
![](https://images.velog.io/images/songbetter/post/29fd7cb5-0d35-461a-92c3-3f2776f61e29/ezgif.com-gif-maker%20(5).gif)
* query parameter를 사용하여 sorting된 데이터 fetch
* 카테고리 분류 기능 및 신상품순, 높은가격순, 낮은가격순 ordering 기능 구현
* 상품클릭 시 path parameter와 react router를 사용하여 상품 페이지로 이동 기능 구현
* 동일한 컴포넌트의 라우터 경로를 다르게 해서 location의 pathname에 따라 character / subject 페이지로 조건부 랜더링
### 검색 ⭐
![](https://images.velog.io/images/songbetter/post/c8c07ded-7719-4ee0-9e79-98fac9df2efb/ezgif.com-gif-maker%20(6).gif)
* 네브바 [모달창On](https://velog.io/@songbetter/KakaoVillains-Nav-Toggle-Title) 조건부 랜더링으로 구현

> 실제 카카오프렌즈샵에서는 검색모달창 위로 구매하기 버튼이 노출되는데, 검색창의 z-index값을 1000001로 주어 어떤 경로에서 검색창을 열어도 최상단에 오도록 했다

* 키워드 검색 filter 기능 구현
검색어 입력할 때마다 query string을 만들어 query parameter로 sorting된 데이터를 fetch. 
* 상품리스트 클릭 시 path parameter와 react router를 사용하여 상품 페이지로 이동 기능 구현

>실제 카카오프렌즈샵에서는 상품명 클릭 시 검색결과로 이동되는데, 상품하나만 나오는 게 비효율적이라고 생각하여 해당상품으로 바로 이동되도록 설정했다.

* 검색어 입력 후 엔터를 눌렀을 때, 검색결과 페이지로 이동되어 keyword에 맞는 데이터를 fetch.

![](https://images.velog.io/images/songbetter/post/7c3bec55-a1b4-4828-bccd-d8686da99a76/ezgif.com-gif-maker%20(8).gif)
* 카테고리 이미지/문구 클릭 시 path parameter와 react router를 사용하여 카테고리 페이지로 이동 기능 구현

### 상품 상세페이지
![](https://images.velog.io/images/songbetter/post/60292b1a-a036-4e12-8a81-d3f5a34170da/ezgif.com-gif-maker%20(9).gif)
* slick slider로 이미지 슬라이드 기능 구현
* int값으로 데이터를 받아 별점기능 구현
* product/:id 동적 라우팅으로 상품 별 페이지네이션 기능 구현
* 상품 옵션 선택 및 구매버튼 활성화 기능 구현
* 리뷰리스트 좋아요 버튼 활성화 기능 구현
* 공유 버튼 클릭 시 모달창 구현
