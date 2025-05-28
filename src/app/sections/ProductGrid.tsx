'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '@/components/ProductCard';

interface Product {
  _id: string;
  name: string;
  price: number | string;
  image: string;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-12 px-4 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Scents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            price={String(product.price)}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
