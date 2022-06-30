const router = require('express').Router();

router.get('/all', (req, res) =>
{
    res.send('shop test is successful')
});

router.post('/shops', (req, res)=>{
    const shopname = req.body.shopname;
    res.send(shopname);
}); 

module.exports = router;