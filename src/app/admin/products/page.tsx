"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "../AdminNav";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });
  const [editing, setEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState(form);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/products", { ...form, price: Number(form.price) });
    setForm({ name: "", price: "", image: "", description: "", category: "" });
    fetchProducts();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await axios.delete(`/api/products?id=${id}`);
      fetchProducts();
    }
  };

  const handleEdit = (product: any) => {
    setEditing(product._id);
    setEditForm({ ...product, price: String(product.price) });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.put(`/api/products?id=${editing}`, { ...editForm, price: Number(editForm.price) });
    setEditing(null);
    fetchProducts();
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdminNav />
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-10 bg-base-200 p-6 rounded">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input input-bordered" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="input input-bordered" />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="input input-bordered" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="input input-bordered" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="textarea textarea-bordered" />
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product: any) => (
          <div key={product._id} className="card bg-base-100 shadow p-4">
            {editing === product._id ? (
              <form onSubmit={handleEditSubmit} className="space-y-2">
                <input name="name" value={editForm.name} onChange={handleEditChange} className="input input-bordered w-full" />
                <input name="price" value={editForm.price} onChange={handleEditChange} className="input input-bordered w-full" />
                <input name="image" value={editForm.image} onChange={handleEditChange} className="input input-bordered w-full" />
                <input name="category" value={editForm.category} onChange={handleEditChange} className="input input-bordered w-full" />
                <textarea name="description" value={editForm.description} onChange={handleEditChange} className="textarea textarea-bordered w-full" />
                <div className="flex gap-2">
                  <button type="submit" className="btn btn-success btn-sm">Save</button>
                  <button type="button" className="btn btn-ghost btn-sm" onClick={() => setEditing(null)}>Cancel</button>
                </div>
              </form>
            ) : (
              <>
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="h-24 w-24 object-cover rounded" />
                  <div>
                    <div className="font-bold">{product.name}</div>
                    <div>৳{product.price}</div>
                    <div className="text-xs text-gray-500">{product.category}</div>
                  </div>
                </div>
                <div className="mt-2">{product.description}</div>
                <div className="flex gap-2 mt-2">
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(product)}>Edit</button>
                  <button className="btn btn-error btn-sm" onClick={() => handleDelete(product._id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
