const express = require('express')
const app = express()
const {products , people} = require('./data')

app.get('/',(req,res)=>{
res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newprod = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(products)
})

// hard coding every route 

// app.get('/api/products/1',(req,res)=>{
//     const singleprod = products.find((product)=>product.id === 1)
//     res.json(singleprod)
// })

//route parameters

app.get('/api/products/:ID/q',(req,res)=>{
        // console.log(req.params.ID)
        // console.log(1===req.params.ID)
        const singleprod = products.find((product)=>product.id == req.params.ID)
        if(!singleprod)
        {
            return res.status(404).send('product doesnt exist')
        }
        res.json(singleprod)
})

//complex routing

// handle queries within the req url

app.get('/api/v1/query',(req,res)=>{
//console.log(req.query)
const {search , limit} = req.query
let sortedprod = [...products]

if(search){
    sortedprod = sortedprod.filter((product)=>{
        return product.name.startsWith(search)
    })
}

if(limit){
    sortedprod = sortedprod.slice(0,Number(limit))
}

if(sortedprod.length < 1){
    res.status(200).send('no match found')
}

res.status(200).json(sortedprod)
})

app.listen(5000,()=>{
    console.log('listening at port 5000 ...')
})