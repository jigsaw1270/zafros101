"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 mb-8 border-b pb-4">
      <Link href="/admin/products" className={pathname === "/admin/products" ? "font-bold underline" : ""}>Products</Link>
      <Link href="/admin/orders" className={pathname === "/admin/orders" ? "font-bold underline" : ""}>Orders</Link>
    </nav>
  );
}
