React hooks 공부할 때 이용한 샘플 서버입니다.

노션 출처
https://www.notion.so/7b61ace07bd94744a7cedc1bec1d1bf2

# 1. 서버를 구동시킬 폴더를 만듭니다.
mkdir todo-server
cd todo-server

# 2. 초기화 및 설치
npm init
// 위 과정 이후 엔터 7~8번 진행
npm install express --save
npm install cors

# 3. 서버 파일 만들기
현재 레파지토리의 app.js를 만든것

# 4. 해당 폴더 내 터미널 실행
node app.js

# 5. 서버 확인
http://localhost:8080/todos