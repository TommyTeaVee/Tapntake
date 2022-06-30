const router = require('express').Router();
const shop = require('../models/shop')



//Create a Shop
router.post('/one', async (req, res)=>{
    const newShop = new shop({
    shopname : req.body.shopname,
    email : req.body.email,
    image : req.body.image,
    description : req.body.description
    
    })
    try{
        const newshop = await newShop.save();
        res.status(200).json(newshop);
    }
    catch(err){
        res.status.json(err)
    }
});

//Delete all Shop
router.delete("/", async (req, res)=>{
    try{
        const shops = await shop.deleteMany()
        res.status(200).json("All shops have been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
    // const shops = await shop.find()
    // console.log('Hello world')
    // res.send(shops)
})
//Update a shop
router.put("/:id", async (req, res)=>{
    if(!req.body){
        return res.status(404).send({
            message: " Data to update cannot be empty!"
        });
       }
       try{
        const updatedshop = await shop.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
        },
        {
            new: true
        }
        );
        res.status(200).json(updatedshop)
       }
       catch(err){
        res.status(500).json(err)
       }
});

//Find one shop
router.get("/:id", async (req, res)=>{
    try{
        const shopId = await shop.findById(req.params.id)
        res.status(200).json(shopId)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Find all shops
router.get("/", async (req, res)=>{
    try{
        const shops = await shop.find()
        res.status(200).json(shops)
    }
    catch(err){
        res.status(500).json(err)
    }
    
})


//Delete one
router.delete("/:id", async (req, res)=>{
    try{
        await shop.findByIdAndDelete(req.params.id)
        res.status(200).json("Shop has been delete")
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;