import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    title: string;
    description: string;
    price:number;
    saleCount:number;
    parent: Schema.Types.ObjectId | null;
}

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  saleCount: {
    type: Number,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
  },
 
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product;