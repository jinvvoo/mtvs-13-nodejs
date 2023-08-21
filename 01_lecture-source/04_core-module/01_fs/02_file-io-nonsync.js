const fs = require('fs');

const file = 'io-test.txt';
const data = `안녕하세요
노드js를 활용한 파일 입출력 테스트를 합니다.
노드js 너무 재미있어요
하하하하하하하하`;

fs.writeFile(file, data, err => console.log(err));      // 덮어쓰기 (한번만 입력)
// fs.appendFile(file, data, err => console.log(err));     // 이어쓰기 (계속 입력)

/*
fs.readFile(file, (err, data) => {
    if(err) {
        return console.log(err);
    }

    console.log(data);
});
인코딩 전*/

fs.readFile(file, 'utf8', (err, data) => {
    if(err) {
        return console.log(err);
    }

    console.log(data);
});

console.log(`현재 실행중인 파일명을 포함한 절대 경로 : ${__filename}`);
console.log(`현재 실행중인 파일의 경로 : ${__dirname}`);            //파일명을 제외한 디렉토리 위치