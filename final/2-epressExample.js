const express = require('express')
const path  = require('path')
const app = express ();

app.use(express.static('./public'))

// we have dumped the html file to the public file and it still work and this method is called SSR. 
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*',(req,res)=>{
    res.status(404).send('resouce not found')
})
app.listen(5000,()=>{ 
    console.log("app is listining")
})
 