"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/products", {
        ...form,
        price: Number(form.price),
      });
      setForm({
        name: "",
        price: "",
        image: "",
        description: "",
        category: "",
      });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
      // You could also add user feedback here with a toast or alert
      alert("Failed to add product. Please check the console for details.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Manage Products</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 mb-10 bg-base-200 p-6 rounded"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="input input-bordered"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered"
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file); // temporary preview
              setForm({ ...form, image: imageUrl });
              // You'll need to upload this to a real image hosting service like Cloudinary later
            }
          }}
          className="file-input file-input-bordered w-full"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="input input-bordered"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea textarea-bordered"
        />
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product: any) => (
          <div key={product._id} className="card bg-base-100 shadow">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-semibold">৳{product.price}</span>
                <span className="badge badge-outline">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
