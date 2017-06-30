import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';

import account from './routes/account';
import index from './routes/index';
import admin from './routes/admin';
import passportConfig from './config/passport'

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

// serve static file
app.use('/', express.static( path.join(__dirname, '../../frontend/build') ));
app.use('/uploads', express.static( path.join(__dirname, '../uploads')) );

// session
app.use(session({ secret: 'jongho', resave: false, saveUninitialized: false, cookie: { secure: false } }));

// passport
passportConfig(app);

// routing
// app.get('/', index.render);
app.post('/api/account/register', account.register);
app.post('/api/account/login', account.login);
app.post('/api/account/logout', account.logout);

app.post('/api/admin/product/write', admin.productWrite);
app.get('/api/admin/product', admin.product);
app.get('/api/admin/getCategoryList', admin.getCategoryList );
app.delete('/api/admin/product/delete/:id', admin.productdelete );

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});