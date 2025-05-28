'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function OrderConfirmationModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order Confirmed:', formData);
    // TODO: send to backend later
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-base-100 w-full max-w-xl p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Confirm Your Order</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="input input-bordered w-full"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            required
            className="textarea textarea-bordered w-full"
            value={formData.address}
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Additional Notes (optional)"
            className="textarea textarea-bordered w-full"
            value={formData.notes}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-primary w-full">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
