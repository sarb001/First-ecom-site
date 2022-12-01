import express from 'express';
import data from '../data.js';
import Category from '../models/categorymodels.js';
import Product from '../models/productModel.js';

const seedRouter = express.Router();

// inserting All data into Database inSingle Query 

seedRouter.get('/', async (req,res) => {
   await Product.deleteOne({});
   const createProducts = await Product.insertMany(data.products);
   await Category.deleteOne({});
   const createCategory = await Category.insertMany(data.category);
   res.send({createProducts , createCategory });
});

export default seedRouter;