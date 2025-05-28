import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true, default: '/products/oil.jpg' },
  description: { type: String, default: '' },
  category: { type: String, default: 'uncategorized' },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
