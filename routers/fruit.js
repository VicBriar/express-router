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
const {body, validationResult} = require('express-validator')

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

router.post(
    '/',
    body("color").not().isEmpty().trim().withMessage("fruits must have a color!"),
    (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors: errors.array()})
        } else {
            try{
                let newFruit = req.body
                if(typeof newFruit === "object"){
                    fruits.push(newFruit)
                    res.status(200).send(fruits)
                }else{
                    res.status(404).send("you must supply an object!")
                }
                
            }catch(err){console.error(err)
                res.status(404).send("not found")}
        }
        
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

router.delete('/:id',(req,res) =>{
   try{let index = req.params.id - 1;
    let item = fruits[index];
    if(item){
      fruits.splice(index,1)
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