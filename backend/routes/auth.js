const router = require("express").Router();
const passport = require('passport');

router.get('/login/success',(req,res)=>{
    if(req.user) res.status(200).send({status:true, message:"Successfully Logged In", user:req.user});
    else res.status(403).send({status:false, message:"Unauthorized Access !!! "})
})

router.get('/login/failed', (req,res)=>{
    res.status(401).send({status:false, message:"Login Failure!!!"})
})

router.get("/google", passport.authenticate('google',["profile","email"]));

router.get('/google/callback',
    passport.authenticate("google",{
        successRedirect : process.env.CLIENT_URL,
        failureRedirect:'/login/failed'
    })
)


router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL);
})

module.exports = router;