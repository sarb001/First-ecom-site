
import express  from 'express';
import data from './data.js';

const app = express();
const PORT  = process.env.PORT  || 5000


app.get('/api/products',(req,res) =>  {
    res.send(data.products)
});

app.listen(PORT , () => {
    console.log(`Connecting to port ${PORT} from here `)
})