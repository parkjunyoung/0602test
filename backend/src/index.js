import express from 'express';
import path from 'path';
 
const app = express();
 
let port = 3000;
 

//app.use('/', express.static( path.join(__dirname, '../../frontend/build') ));

app.get('/' , (req,res)=>{
    res.send('index app'); 
});


import posts from './routes/posts';
app.use('/api/posts', posts);


/*
app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
*/

// SERVE STATIC FILES - REACT PROJECT


const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});