
import mongoose, { Document, Schema } from 'mongoose';

export interface ISubCategory extends Document {
  name: string;
  description: string;
  parent: Schema.Types.ObjectId | null;
}

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
 
});

const SubCategory = mongoose.models.SubCategory || mongoose.model<ISubCategory>('SubCategory', subCategorySchema);

export default SubCategory;
