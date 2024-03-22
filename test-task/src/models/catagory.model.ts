
import mongoose, { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description: string;
}

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
 
});

const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', categorySchema);

export default Category;
