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
        return db.sequelize.sync();
    })
    .then(() => {
        console.log('DB Sync complete.');
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
app.post('/api/account/register', account.register);

app.post('/api/admin/product/write', admin.productWrite);
app.get('/api/admin/product', admin.product);
app.get('/api/admin/getCategoryList', admin.getCategoryList );
app.delete('/api/admin/product/delete/:id', admin.productdelete );

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});