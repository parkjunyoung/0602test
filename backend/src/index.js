import express from 'express';
import path from 'path';

const app = express();

let port = 3000;

var Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'ho1234c', 'whdghsla1!', {
    host: 'jongho.database.windows.net',
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use('/', express.static(path.join(__dirname, '../../frontend/build')));

app.get('/', (req, res) => {
    res.send('index app');
});

import posts from './routes/posts';
app.use('/posts', posts);

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// SERVE STATIC FILES - REACT PROJECT

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});