import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const order = await Order.create(body);
    return NextResponse.json(order);
  } catch (error) {
    console.error('POST /api/orders error:', error);
    return NextResponse.json({ error: 'Failed to create order', details: String(error) }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const orders = await Order.find().sort({ createdAt: -1 });
    return NextResponse.json(orders);
  } catch (error) {
    console.error('GET /api/orders error:', error);
    return NextResponse.json({ error: 'Failed to fetch orders', details: String(error) }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing order id" }, { status: 400 });
    const body = await req.json();
    const updated = await Order.findByIdAndUpdate(id, body, { new: true });
    if (!updated) return NextResponse.json({ error: "Order not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/orders error:", error);
    return NextResponse.json({ error: "Failed to update order", details: String(error) }, { status: 500 });
  }
}
