const express = require('express');
const router = express.Router();

router.use((req, res, next) =>  //In order to have all routes be behind this middleware, can use "router.use"
{
    if(req.query.isAdmin)
    {
        next();
    }

    res.send("Sorry, not an Admin");
})


router.get('/topsecret', (req, res) =>
{   
    res.send("This is top secret");

})
router.get('/deleteeverything', (req, res) =>
{   
    res.send("Okay, deleted all of it");

})

module.exports = router;