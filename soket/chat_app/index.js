const { json } = require('express');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/boot.html');
});

// 최초 입장
// 서버 알림   // 닉네임 받기(소캣아이디 = 닉네임 맞춰주기)
// {소캣 아이디 : 닉네임, 소켓아이디: 닉네임 } 키 벨류로 한명씩 하나씩 추가
const list = {};
io.on('connect', (socket) => {
  console.log('Server Socket connected');

  // 통신하는 고유 소캣 아이디 클라이언트에게 보내기
  socket.on('info', socket.id);
  console.log('쉬수시ㅜ시ㅜ시ㅜ시ㅜ시ㅜ시', socket.id);
  // io.emit('notice', socket.id + '님이 입장하셨습니다.');
  socket.on('username', (name) => {
    list[socket.id] = name;

    io.emit('list', list);

    io.emit('notice', name + '님이 입장하셨습니다.');
  });

  //send 이벤트 json 형태
  socket.on('send', (json) => {
    // json = { msg : ~~, to : ~~~ }
    json['form'] = socket.id;
    // json {msg : ~~~, from : ~~~, to : ~~~}
    json['username'] = list[socket.id];
    // json {msg : ~~~, from : ~~~, username: ~~~ ,  to : ~~~}
    json['is_dm'] = false; //디엠일때만 true
    if (json.to === '전체') io.emit('newMSG', json);
    else {
      const socketID = Object.keys(list).find((key) => list[key] == json.to); // 객체의 키값만 가져옴 /json.to보내는 이 닉
      // 디엠 여부
      json['is_dm'] = true;
      io.to(socketID).emit('newMSG', json);
      // 자기 자신한테도 메세지 보내줘야한다 (디엠시)
      socket.emit('newMSG', json);
      // 디엠인지 아닌지 스타일 바꾸게 하자
    }
  });

  // 리스트 객체에서 닉네임 가져오기
  socket.on('disconnect', () => {
    console.log('Server Socket disconnected');
    io.emit('notice', list[socket.id] + '님이 퇴장 하셨습니다.');
    // 소캣 리스트 지우는 법
    console.log('delete : ', socket.id);
    delete list[socket.id];
    // 그것을 다시 클라이언트에게
    io.emit('list', list);
  });
});

http.listen(8000, () => {
  console.log('Sever port : ', 8000);
});
