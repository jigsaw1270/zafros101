"use client";

import { Home, ShoppingCart, Package, Settings } from "lucide-react";
import { useState } from "react";
import Dock from "./Dock";
import FlowingMenu from "../flowingmenu/FlowingMenu";

export default function DockClient() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const demoItems = [
    { link: "#", text: "Mojave", image: "/products/oil.jpg" },
    { link: "#", text: "Sonoma", image: "/products/oil.jpg" },
    { link: "#", text: "Monterey", image: "/products/oil.jpg" },
    { link: "#", text: "Sequoia", image: "/products/oil.jpg" }
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
          <button
            onClick={() => setMenuVisible(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 101,
              backgroundColor: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            ×
          </button>
          <FlowingMenu items={demoItems} />
        </div>
      )}
      <Dock items={dockItems} />
    </>
  );
}
