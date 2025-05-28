'use client';


import { X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CardContext';

export default function CartModal({ onClose, onProceed }: { onClose: () => void; onProceed: () => void }) {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-base-100 w-full max-w-3xl h-full md:h-[90vh] rounded-lg overflow-y-auto p-6 relative">
        <button
          className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-base-content/70">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Qty: {item.quantity}</p>
                  <p>{item.price}</p>
                </div>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6 flex justify-between">
              <button className="btn btn-outline" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-primary" onClick={onProceed}>
                Proceed to Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
