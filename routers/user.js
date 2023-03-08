// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]
const express = require('express');
const router = express.Router()
const {body, validationResult} = require('express-validator')


router.get('/', (req,res) => {
    try{
        res.status(200).send(users)
    }catch(err){
        console.error(err)
        res.status(404).send("not found")
    }
})

router.get('/:id', (req,res) => {
    try{
        let index = req.params.id-1;
        res.status(200).send(users[index]);
    }catch(err){
        console.error(err)
        res.status(404).send("not found")
    }
})

router.post(
    '/',
    body('name').not().isEmpty().trim(),
    (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() });
        } else {
            try{
                let newUser = req.body
                if(typeof newUser === "object"){
                 users.push(newUser)
                    res.status(200).send(users)
                }else{
                    res.status(404).send("you must supply an object!")
                }
            }catch(err){console.error(err)
                res.status(404).send("not found")
            }
        }
})

router.put('/:id',(req,res) =>{
    try{
        let index = req.params.id-1;
        let update = req.body;
        let user = users[index]
        if(user && update){
            for(const key in update){
                user[key] = update[key]
                console.log(`user.key is ${user[key]} and update.key is ${update[key]}`)
            }
            res.status(200).send("item updated")
        }else{
            res.status(404).send("not found")   
        }
    }catch(err){
        console.error(err)
        res.status(404).send("not found")
    }
})
router.delete('/:id',(req,res) =>{
    try{let index = req.params.id - 1;
     let item = users[index];
     if(item){
       users.splice(index,1)
       res.status(200).send("item deleted!") 
     }else{
         res.status(404).send("not found")  
     }
 }catch (err) {
     console.error(err)
     res.status(404).send("not found")
 }
     
 })

module.exports = router;