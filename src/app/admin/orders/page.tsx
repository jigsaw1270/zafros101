"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "../AdminNav";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [noteInputs, setNoteInputs] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await axios.get("/api/orders");
    setOrders(res.data);
  };

  const handleMarkDone = async (orderId: string, note: string) => {
    await axios.put(`/api/orders?id=${orderId}`, { done: true, note });
    fetchOrders();
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdminNav />
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <div className="space-y-4">
        {orders.length === 0 && <div>No orders yet.</div>}
        {orders.map((order: any) => (
          <div key={order._id} className="card bg-base-100 shadow p-4">
            <div className="mb-2 font-semibold">
              {order.customer.name} ({order.customer.email})
            </div>
            <div className="mb-2">Address: {order.customer.address}</div>
            <div className="mb-2">
              Total:{" "}
              <span className="font-bold">৳{order.total}</span>
            </div>
            <ul className="mb-2">
              {order.items.map((item: any) => (
                <li key={item.id}>
                  {item.name} x {item.quantity} (৳{item.price})
                </li>
              ))}
            </ul>
            {!order.done && (
              <div className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Add note..."
                  className="input input-bordered input-sm flex-1"
                  value={noteInputs[order._id] || order.note || ""}
                  onChange={e => setNoteInputs({ ...noteInputs, [order._id]: e.target.value })}
                />
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleMarkDone(order._id, noteInputs[order._id] || "")}
                >
                  Mark Done
                </button>
              </div>
            )}
            {order.done && <div className="badge badge-success">Completed</div>}
            {order.note && (
              <div className="mb-2 text-sm text-blue-700">Note: {order.note}</div>
            )}
            <div className="text-xs text-gray-500">
              {new Date(order.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
