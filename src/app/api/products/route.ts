import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import Product from '@/app/models/Product';

export async function GET() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newProduct = await Product.create(body);
  return NextResponse.json(newProduct);
}
