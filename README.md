
# 🖥️SDJOOM🖥️
[![npm version](https://img.shields.io/badge/npm-v6.14.17-blue)](https://www.npmjs.com/package/npm)
>[노마드 코더 강의](https://nomadcoders.co/noom/lobby)를 보고 만든 소스를 수정 및 추가 개발 하여 제작
<br> 
* 현재 구현 기능
 - 기본적인 방생성 및 입장, p2p 화상 채팅 
 -
 -
 -
 <br>

## ⚙️ 개발 환경 설정
프로젝트 배포 및 실행

```
git clone https://github.com/sdjang6253/SDJOOM.git
cd SDJOOM

npm install
npm run dev 

/*만약 babel-node: command not found 라는 이슈가 뜬다면, */
npm install --save-dev @babel/node
```
<br>

## ⚒️ 개발 스택

**인프라**

- AWS EC2 (Amazon Linux 2)
- Nginx (v.1.22.1)
- Zenkins (예정)
- STUN 서버 (초기 단계는 구글 서버 사용 , 직접 개발 할 예정)
- Socket 서버 (초기 단계는 express 서버에 통합되어 운행, 나중에 signal 서버로 분리)

**FrontEnd**

- PUG
- MVP.css
- Web RTC
- Vue.js (예정.. 이긴한데 후순위)

**BackEnd**

-express
-Socket.io
-JWT (예정)


## 🌏 기능 소개
1. 로그인 및 화상방 선택 입장 
2. 화상방에서 화상 채팅 및 메세지 송수신 가능
- 아래로는 미구현
3. Canvas 공유 추가
4. P2P 가 아닌 SFU 기능 추가 
5. 화면 공유 추가 (현재 보고있는 화면 송수신)
6. 화면 녹화 플러그인 추가

## 📆 프로젝트 작업 스케줄 (2023.02.06~)
========== 1주차 ==========
* 2023.02.06 
    * NomadCoders-Practice(https://github.com/sdjang6253/NomadCoders-Practice.git) 레포지토리에서 소스 이전
    * 계획 작성 및 Readme.md 작성


