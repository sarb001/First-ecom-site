
import mongoose from "mongoose";
// Schema or Structure 

const categorySchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        image: { type: String, required: true },
    },
    {
      timestamps: true, //add date
    }
  );
  
  const Category = mongoose.model('Category', categorySchema);
  export default Category;