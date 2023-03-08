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
        let index = req.params.id-1;
        res.status(200).send(fruits[index]);
    }catch(err){
        console.error(err)
        res.status(404).send("not found")
    }
})

router.post('/',(req,res) => {
    try{
        let newFruit = req.body
        if(typeof newFruit === "object"){
            fruits.push(newFruit)
            res.status(200).send("new fruit added!")
        }else{
            res.status(404).send("you must supply an object!")
        }
        
    }catch(err){console.error(err)
        res.status(404).send("not found")}
})

router.put('/:id',(req,res) =>{
    try{
        let index = req.params.id-1;
        let update = req.body;
        let fruit = fruits[index]
        if(fruit && update){
            for(const key in update){
                fruit[key] = update[key]
                console.log(`user.key is ${fruit[key]} and update.key is ${update[key]}`)
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

module.exports = router;