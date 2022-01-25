const express = require('express');
const app = express();
const indexRouter = require('./routes');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const port = 3001;



app.use(express.json())
app.use(express.urlencoded({ extended: false }));       // post 요청 바디 추출
app.use(cookieParser());                                // 쿠키 추출

app.use(cors({
    origin: ['https://localhost:3000'],                 // 수정 3001
    // origin : true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
  }));

app.use('/', indexRouter);
// app.get('/', (req, res) => {
//   res.send("Hello world")
// })

app.listen(port, () => {
    console.log(`서버가 ${port}번에서 작동중입니다.`);
  });
  