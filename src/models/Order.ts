import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
  },
  items: [
    {
      id: String,
      name: String,
      price: String,
      quantity: Number,
      image: String,
    }
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
  note: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
