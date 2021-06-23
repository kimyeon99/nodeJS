/*const http = require('http');

const port = 80;

// 어떤 식으로 동작할지 '선언'
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

// 실제로 서버 모듈을 동작하도록 '실행'하는 부분
server.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Server running`);
});
*/





// const http = require('http');

// const server = http.createServer((req, res) => {
//     //req.headers를 보면 클라이언트에서 서버로 보낸 헤더 값을 확인 할 수 있다. ex) 웹 브라우저의 종류, 언어 설정 등
//     // 처음에는 사용자의 ip를 알 수 있지만 나중에 다른 개체가 개입하면 알 수 없게 되므로 x-forwared-for로 실제 ip를 헤더에 포함시킨다.
//     var ip = req.headers['x-forwareded-for'] || req.connection.remoteAddress;
//     console.log("ip:" , ip);
//     console.log("url: " , req.url);
//     console.log("headers: ", req.headers);

//     res.statusCode = 200; // 서버가 클라이언트에게 현재의 상태값을 보내주는 것임 ex) 404, 200(정상), 500 등
//     // 실제로 넣고 싶은 헤더 값들을 넣는 곳. 사용자의 웹 브라우저에서 현재 페이지의 문서를 어떠한 방법으로 출력할지 결정하는 부분. ex) text(본문), html(마크업에 따라)
//     res.setHeader('Content-Type', 'text/plain'); 
//     // 서버가 클라이언트에게 보내고자 하는 데이터를 보낼 수 있다. write(여러 번 보낼 수 있음)와 end(한번 보내면 서버와 클라의 접속 종료)가 있다.
//     res.end('Hello World\n' + JSON.stringify(req.headers, null, 4));
// });

//     server.listen(80, (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log(`Server running`);
//     });




// const object_item = {a:1, b: 'c'};
// console.log(1, object_item);

// setInterval(() => {
//     console.log("now time is" + new Date());
// }, 5 * 1000);

const filesystem_var = require('fs');

// unlink는 파일을 삭제하는 메서드임.
filesystem_var.unlink('/tmp/hello', (err) => {
    if(err){
        throw err;
        return;
    }
    console.log('delete success');
});