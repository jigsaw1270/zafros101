'use client';

import Image from 'next/image';
import { useCart } from '@/app/context/CardContext';
import { useState, useEffect } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addToCart } = useCart();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="card bg-base-200 shadow hover:shadow-lg transition">
      <figure>
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-64"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="text-lg font-semibold">{price}</p>
        <div className="card-actions justify-end">
          <button 
            className="btn btn-primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}