const app = require('express')();

const {products} = require('./data')
app.get('/',(req,res)=>{
    res.send('<h1> Home Page </h1> <a href = "/api/products">Products</a>')
})
app.get('/api/products/:productId',(req,res)=>{
    const {productId} = req.params;
    const singleProducts = products.find((item)=>{return item.id === Number(productId)});
    if(!singleProducts){
        return res.status(404).send("it doesn't exist")
    }
    res.json(singleProducts)
})

app.get('/api/products/:productId/reviews/:reviewId',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query',(req,res)=>{
    const{search, limit} = req.query
    // console.log(req.query)
    let sortedProducts =[...products]

    if(search){
        sortedProducts = sortedProducts.filter(product=> product.name.startsWith(search))
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        // res.status(200).send("no products matched your search")
        return res.status(200).json({sucess: true, data:[]})
    }
    return res.status(200).json(sortedProducts)
    // res.send('hello world')
})
app.listen(5000,()=>{
    console.log("listing port")
})