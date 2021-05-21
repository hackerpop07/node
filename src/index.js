const express = require('express');
const app = express();
const port = 3000;
var morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello Worlsd!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});