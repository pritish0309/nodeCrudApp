const Product = require('./model/product.model')

//post data into db
app.post('/api/product', async (req, res)=>{
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
})

//get all data 
app.get('/api/product',async (req,res) =>{
    try {
        const productList = await Product.find({});
        res.status(200).json(productList)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
})

//find product by id
app.get('/api/product/:id',async (req,res) =>{
    try {
        const { id } = req.params;
        const productList = await Product.findById(id);
        res.status(200).json(productList)
    } catch (error) {
        res.status(500).json({message :error.message})
    }
})

//update product
app.put('/api/product/:id', async (req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({message : "Product not found"})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//delete product
app.delete('/api/product/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndDelete(id);

        if (!products) {
            res.status(404).json({message : "Product not found"})
        }

        res.status(200).json({message: "Product was deleted"})

    } catch (error) {
        res.status(500).json({message : error.message})
    }
})