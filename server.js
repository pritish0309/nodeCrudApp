const express = require('express');
const app = express();
const Product = require('./model/product.model')
const productRoute = require('./routes/product.route')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/product',productRoute )

app.get('/' , (req, res)=>{
    res.send('hello world from node')
})


//connect database
mongoose.connect("mongodb+srv://admin:Pritish%403@backenddb.pq4tlzr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log('Connected');
    app.listen(3000, ()=>{
        console.log("Server is running on 3000");
    })
}).catch(()=>{
    console.log("Failed");
})




