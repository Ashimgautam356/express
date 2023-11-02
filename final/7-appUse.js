const app = require('express')();
const logger = require('./logger')

app.use('/api',logger)
app.get('/',(req,res)=>{
    res.send("home")
})

app.get('/about',(req,res)=>{
    res.send("About")
})
app.get('/api/prouducts',(req,res)=>{
    res.send("Products")
})
app.get('/api/items',(req,res)=>{
    res.send("Items")
})
app.listen(5000,()=>{
    console.log("listing port")
}) 