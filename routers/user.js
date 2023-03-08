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

router.post('/',(req,res) => {
    try{
        let newUser = req.body
        if(typeof newUser === "object"){
            users.push(newUser)
            res.status(200).send("new fruit added!")
        }else{
            res.status(404).send("you must supply an object!")
        }
        
    }catch(err){console.error(err)
        res.status(404).send("not found")}
})

module.exports = router;