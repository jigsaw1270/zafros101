'use client';

import { useState } from 'react';
import { useCart } from '../context/CardContext';
import { X } from 'lucide-react';

export default function OrderConfirmationModal({ onClose }: { onClose: () => void }) {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', address: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer: form, items: cart, total }),
      });
      if (res.ok) {
        setSuccess(true);
        clearCart();
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
        <div className="bg-base-100 p-8 rounded-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
          <button className="btn btn-primary mt-4" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-base-100 p-8 rounded-lg max-w-md w-full relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Confirm Your Order</h2>
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>৳{Number(item.price) * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="font-bold mb-4">Total: ৳{total}</div>
        <form onSubmit={handleOrder} className="space-y-2">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="input input-bordered w-full"
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            placeholder="Address"
            className="input input-bordered w-full"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Placing Order...' : 'Confirm Order'}
          </button>
        </form>
      </div>
    </div>
  );
}
