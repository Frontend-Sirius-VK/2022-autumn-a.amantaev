'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const db = require('./queries')

app.use(morgan('dev'));
app.use(express.static('.'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/login', (req, res) => {
    // TODO
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await db.getPosts();
        res.json(posts);
    } catch (e) {
        res.json([]);
    }
});

app.get('/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await db.getPostById(id);
        res.json(result);
    } catch (e) {
        res.json(null);
    }
})

app.post('/posts', async (req, res) => {
    try {
        const {title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments} = req.body;
        const id = await db.createPost(title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments);
        res.json({id});
    } catch (e) {
        res.json(null);
    }
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await db.deletePost(id);
        res.json(result);
    } catch (e) {
        res.json(null);
    }
})

app.patch('/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments} = req.body;
        const result = await db.updatePost(title, subtitle, text, author, imageUrl, videoUrl, date, likes, dislikes, comments, id);
        res.json(result);
    } catch (e) {
        res.json(null);
    }
})

const description = 'VK Team — это миллион возможностей проявить себя. Мы делаем современные и быстрые интернет-сервисы, доступные каждому. На этом канале делимся опытом экосистемы VK, рассказываем о технологиях, наших образовательных проектах и жизни команды.\n' +
    '\n' +
    'Смотрите лекции экспертов, митапы, шоу, онлайн-курсы и подкасты: VK Tech Talks, «Oh, my code!», «Будущее, которое мы заслужили» и «Скринкасты». Подписывайтесь, чтобы быть в курсе!'
app.get('/description', async (req, res) => {
    try {
        res.json(description);
    } catch (e) {
        res.json([]);
    }
});

const statistics = ['Дата регистрации: 11 мар. 2012 г.', '15 357 808 просмотров']
app.get('/statistics', async (req, res) => {
    try {
        // const posts = await db.getPosts();
        res.json(statistics);
    } catch (e) {
        res.json([]);
    }
});

app.listen(PORT, function () {
    console.log(`Server listening PORT ${PORT}`);
});
