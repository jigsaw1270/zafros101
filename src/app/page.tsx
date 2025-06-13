import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ProductGrid from "./sections/ProductGrid";
import Benefits from "./sections/Benefits";
import Intro from "./sections/Intro";


export default function Home() {
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Intro />
        <ProductGrid/>
        <Benefits/>
      </main>
    </>
  );
}
