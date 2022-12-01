
import express  from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to Mongodb db');
}).catch((err) => {
   console.log(err.message)
})

const app = express();
const PORT  = process.env.PORT  || 5000



// For Products 
app.get('/api/products',(req,res) =>  {
    res.send(data.products)
});

// For Slider
app.get('/api/sliders',(req,res) =>  {
    res.send(data.slideritems)
});

// For category
app.get('/api/category',(req,res) =>  {
    res.send(data.category)
});

// for Product 
app.get('/api/products/slug/:slug', (req,res) =>  {
    const product = data.products.find((x)=> x.slug === req.params.slug);
    if(product){
        res.send(product)
    }else {
        res.status(404).send({message : ' Product not Found '})
    }   
});



app.listen(PORT , () => {
    console.log(`Connecting to port ${PORT} frddom here `)
})