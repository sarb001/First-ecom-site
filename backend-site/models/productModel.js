
import mongoose from "mongoose";

//Create table into DB
const productSchema = new mongoose.Schema(
    {
      name : { type : String , required : true , unique : true},
      slug: { type: String, required: true, unique: true },
      image: { type: String, required: true },
      images: {String},
      brand : {type  : String ,required : true},
      category: { type: String, required: true },
      description : { type: String, required: true },
      price : { type: Number, required: true },
      countInStock: { type: Number, required: true },
      rating : { type : Number , required : true},
      numofReviews : { type : Number , required : true},
      reviews : {reviewSchema},
    },
    {
      timestamps: true, //add date
    }
  );
  
  const Product = mongoose.model('Product', productSchema);
  export default Product;