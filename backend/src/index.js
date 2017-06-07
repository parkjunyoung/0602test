import express from 'express';
import path from 'path';
import logger from 'morgan';

import posts from './routes/posts';
import index from './routes/index';

import db from './models';

const app = express();
const port = 3000;

// DB authentication
db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
});

// logger
app.use(logger('dev'));

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static( path.join(__dirname, '../../frontend/build') ));

// routing
app.get('/', index.render);
app.post('/api/join', posts.join);

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});