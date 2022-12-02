'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const db = require('./queries')

app.use(morgan('dev'));
app.use(express.static('.'));

const PORT = 3000;
const TEXT = 'Hello World'

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/login', (req, res) => {
    // TODO
});

app.get('/posts', async (req, res) => {
    const posts = await db.getPosts();
    res.json(posts);
});

app.get('/hello_world', (req, res) => {
    res.json(TEXT);
});

app.listen(PORT, function () {
    console.log(`Server listening PORT ${PORT}`);
});
