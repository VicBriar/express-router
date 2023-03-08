const express = require("express")
const app = express()
const port = 3000
const userRouter = require('./routers/user')
const fruitRouter = require('./routers/fruit')


app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))

// Express Routes
app.use("/users",userRouter)
app.use("/fruits",fruitRouter)



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
