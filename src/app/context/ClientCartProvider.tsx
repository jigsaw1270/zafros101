'use client';

import { CartProvider } from './CardContext';

export default function ClientCartProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return <CartProvider>{children}</CartProvider>;
}
