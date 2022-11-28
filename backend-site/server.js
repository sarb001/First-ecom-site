
import express  from 'express';
import data from './data.js';

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

app.listen(PORT , () => {
    console.log(`Connecting to port ${PORT} frddom here `)
})