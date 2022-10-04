const router = require('express').Router();
const { User } = require('../../models')


router.post('/', async(req,res)=>{
    try{
        const newUser = await User.create(req.body)
        req.session.save(()=>{
            req.session.userId = newUser.id;
            req.session.isLoggedIn = true
            res.json(err)
        })
    }catch(err){
        res.status(500).json(err)
    }
})








module.exports = router;
