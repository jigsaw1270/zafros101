"use client";

import { Home, ShoppingCart, Package, Settings } from "lucide-react";
import { useState } from "react";
import Dock from "./Dock";
import FlowingMenu from "../flowingmenu/FlowingMenu";

export default function DockClient() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const demoItems = [
    { link: "#", text: "Mojave", image: "/public/products/oil.jpg" },
    { link: "#", text: "Sonoma", image: "/public/products/oil.jpg" },
    { link: "#", text: "Monterey", image: "/public/products/oil.jpg" },
    { link: "#", text: "Sequoia", image: "/public/products/oil.jpg" },
  ];

  const dockItems = [
    {
      icon: <Home />,
      label: "Home",
      onClick: () => setMenuVisible((prev) => !prev),
    },
    { icon: <ShoppingCart />, label: "Cart", onClick: () => console.log("Cart clicked") },
    { icon: <Package />, label: "Products", onClick: () => console.log("Products clicked") },
    { icon: <Settings />, label: "Admin", onClick: () => console.log("Admin clicked") },
  ];

  return (
    <>
      {isMenuVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 100,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            animation: "dropEffect 0.5s ease-in-out",
          }}
        >
          <FlowingMenu items={demoItems} />
        </div>
      )}
      <Dock items={dockItems} />
    </>
  );
}
