// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    try{
        res.status(200).send(fruits)
    }catch(err){
        console.error(err)
        res.status(404).send("not found")
    }
})

router.get('/:id', (req,res) => {
    try{
        index = req.params.id-1;
        res.status(200).send(fruits[index]);
    }catch(err){
        console.error(err)
        res.status(404).send("not found")
    }
})

module.exports = router;