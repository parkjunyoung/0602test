import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import account from './routes/account';
import index from './routes/index';
import admin from './routes/admin';

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static( path.join(__dirname, '../../frontend/build') ));

//upload path add
app.use('/uploads', express.static( path.join(__dirname, '../uploads')) );

// routing
app.get('/', index.render);
<<<<<<< HEAD
app.post('/api/join', posts.join);
app.post('/api/admin/product/write', admin.productWrite);
app.get('/api/admin/product', admin.product);
=======
app.post('/api/account/register', account.register);
app.get('/api/admin/product/write', admin.productWrite);
>>>>>>> 4df4fa672b1e426b864134990f7f5da25dc1bb21
app.get('/api/admin/getCategoryList', admin.getCategoryList );

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});