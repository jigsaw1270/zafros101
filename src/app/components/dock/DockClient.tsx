"use client";

import { Home, ShoppingCart, Package, Settings } from "lucide-react";
import Dock from "./Dock";

export default function DockClient() {
  const dockItems = [
    { icon: <Home />, label: "Home", onClick: () => console.log("Home clicked") },
    { icon: <ShoppingCart />, label: "Cart", onClick: () => console.log("Cart clicked") },
    { icon: <Package />, label: "Products", onClick: () => console.log("Products clicked") },
    { icon: <Settings />, label: "Admin", onClick: () => console.log("Admin clicked") },
  ];

  return <Dock items={dockItems} />;
}
