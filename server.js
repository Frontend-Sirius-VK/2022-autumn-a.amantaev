'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

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

app.get('/hello_world', (req, res) => {
	res.json(TEXT);
});

app.listen(PORT, function () {
	console.log(`Server listening PORT ${PORT}`);
});
