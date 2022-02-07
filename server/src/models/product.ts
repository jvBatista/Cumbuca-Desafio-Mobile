import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  name: string;
  length: number;
  weight: number;
}

const productSchema = new Schema<IProduct>(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    units: {
      type: Number,
      required: false,
    },
    unitValue: {
      type: Number,
      required: false,
    },
  },
);

export default model<IProduct>('Product', productSchema);
