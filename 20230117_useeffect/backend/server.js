const express = require('express');

// 백앤드 서버와 같은 포트를 쓸수없어서 cors를 피하기위해 모듈 부르기
const cors = require('cors');

const PORT = 4000;
const app = express();

//미들웨어로 cors 어떤 주소에서 요청을 보내도 에러가 뜨지 않는다.
app.use(cors());


app.get('/', (req, res) => {
  const pororoObjArr = [
    {
    name: "뽀로로",
    age: "5",
    nickName: "사고뭉치",
    },
    {
    name: "루피",
    age: "4",
    nickName: "공주님",
    },
    {
    name: "크롱이",
    age: "5",
    nickName: "장난꾸러기",
    },
    ];

    res.status(200).send(JSON.stringify(pororoObjArr));
});

app.listen(PORT, () => {
  console.log(`백엔드 서버가 ${PORT}번에서 작동 중`)
})