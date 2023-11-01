const express = require('express');

const app = express()
//  this call back function of app.get will invoked every time when user enter the get request
app.get('/',(req,res)=> {
    console.log("user hit the resource")
    res.status(200).send("Home Page")
})

app.get('/about',(req,res)=> {
    console.log("user hit about page")
    res.status(200).send("About Page")

})
app.all('*',(req,res)=> {
    res.status(404).send('<h1> resource no found </h1>')
})

app.listen(5000,()=>{
    console.log("server is listinning")
})