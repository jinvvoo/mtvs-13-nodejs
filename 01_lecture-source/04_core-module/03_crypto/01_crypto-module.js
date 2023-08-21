const crypto = require('crypto');   //암호와 관련된 모듈

const sha256 = crypto.createHash('sha256'); // 알고리즘 하기위한 이름 중 하나
sha256.update('raw string22222');       // digest

const hash = sha256.digest('hex');

console.log(hash);