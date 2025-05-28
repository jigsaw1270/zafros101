'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/app/context/CardContext';
import CartModal from '@/app/components/CartModal';
import OrderConfirmationModal from '@/app/components/OrderConfirmationModal';

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { cart } = useCart();

  // Only show cart UI after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const cartItemsCount = mounted ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <>
      <nav className="navbar bg-base-100 px-4 shadow">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold">Zafros</Link>
        </div>
        <div className="flex-none">
          <Link href="/products" className="btn btn-ghost">All products</Link>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-ghost"
            onClick={() => setShowCart(true)}
          >
            Cart
            {cartItemsCount > 0 && (
              <span className="badge badge-sm badge-primary ml-1">{cartItemsCount}</span>
            )}
          </button>
        </div>
      </nav>

      {showCart && (
        <CartModal
          onClose={() => setShowCart(false)}
          onProceed={() => {
            setShowCart(false);
            setShowOrder(true);
          }}
        />
      )}

      {showOrder && (
        <OrderConfirmationModal onClose={() => setShowOrder(false)} />
      )}
    </>
  );
}
