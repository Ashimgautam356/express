const express = require('express')
const app = express();

let {people }= require('./data')
//static assets
app.use(express.static('./methods-public'))
//parse form data 
app.use(express.urlencoded({extended:false}))
app.post('/login',(req, res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }    
     res.status(401).send('please provide credentials')
})


app.listen(5000,()=>{
    console.log("listing port")
}) 