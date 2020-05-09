var express = require("express");
var http = require("http");

// 익스프레스 객체 생성
var app = express();

// port 운영체제가 특정 프로그램으로 연결해주는 통로
// 기본 포트를 app 객체에 속성으로 사용하겠다.
app.set("port", process.env.PORT || 3000);

app.use(function (req, res, next) {
  console.log("첫번째 미들웨어 실행");
  res.redirect("https://www.google.com");
});

http.createServer(app).listen(app.get("port"), function () {
  console.log(`server is running on port ${app.get("port")}`);
});
