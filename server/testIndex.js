const express = require('express');
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => res.send('hello world bonn1'));
app.listen(PORT, HOST, () => console.log('server running bonn1'));