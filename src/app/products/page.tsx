import ProductGrid from "@/app/sections/ProductGrid";
import Navbar from "@/components/Navbar";

export default function AllProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center mb-12">All Products</h1>
          <ProductGrid />
        </div>
      </main>
    </>
  );
}