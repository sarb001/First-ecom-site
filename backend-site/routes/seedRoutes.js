import express from 'express';
import data from '../data.js';
import Category from '../models/categorymodels.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

// inserting All data into Database inSingle Query 

seedRouter.get('/', async (req,res) => {
   await Product.deleteOne({});
   const createProducts = await Product.insertMany(data.products);   // products present inside data

   await Category.deleteOne({});
   const createCategory = await Category.insertMany(data.category);

   await User.deleteOne({});
   const createUser = await User.insertMany(data.users);       // users inside data


   res.send({createProducts , createCategory  , createUser});
});

export default seedRouter;