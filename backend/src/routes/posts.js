import { Router }  from 'express';
const router = Router();

router.get('/', (req,res)=>{
    res.json({
        message : "success",
        title : "my title"
    });
});

router.get('/detail', (req,res)=>{
    res.send('detail app');
});

export default router;
