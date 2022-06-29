const router = require('express').Router();

router.get('/all', (req, res) =>
{
    res.send('shop test is successful')
});

router.post('shopposttest', (req, res)=>{
    const shopname = req.body.shopname;
    console.log(shopname);
}); 

module.exports = router;