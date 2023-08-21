 
 const fs = require('fs');

 /*
// 두개의 순서 보장되지 않음 , 비동기라서, 따라서 에러가 생기는 경우가 존재
 fs.mkdir('test-dir', (err) => console.log(err)); // make directory 폴더 만들기
 fs.rmdir('test-dir', (err) => console.log(err)); // remove 폴더 지우기
*/


fs.mkdirSync('test-sync-dir');
fs.rmdirSync('test-sync-dir');