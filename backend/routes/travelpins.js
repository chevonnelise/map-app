const router = require("express").Router();
const Travelpins = require("../models/Travelpins");

// create a pin
router.post("/", async (req,res)=>{
    const newPin = new Travelpins(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    }catch(err){
        res.status(500).json(err);
    }
})

// get all pins

router.get("/", async (req,res)=>{
    try{
        const travelpins = await Travelpins.find();
        res.status(200).json(travelpins);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;