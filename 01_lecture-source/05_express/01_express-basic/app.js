
// const expree = require('express');
// const app = expree();

// app.get('/', (req, res) => {                 // get은 get방식만 받는다.
//     res.send('Hello World!');
// });

// app.listen(3000, () => {
//     console.log('Example app listening on port 3000!');
// });


/*
require('express')().use((req, res) => {        // use는 get post 다 받는다.
    res.send('Hello World!');
}).listen(3000, () => console.log('Example app listening on port 3000!'));
* */

require('express')().get((req, res) => {
    res.send('Hello World!');
}).listen(3000, () => console.log('Example app listening on port 3000!'));

