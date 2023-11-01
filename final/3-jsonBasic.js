const app = require('express')();

const {products} = require('./data')
app.get('/',(req,res)=>{
    res.status(200).json(products)
})

app.listen(5000,()=>{
    console.log("listing port")
})