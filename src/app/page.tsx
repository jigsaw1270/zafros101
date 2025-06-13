import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ProductGrid from "./sections/ProductGrid";
import Benefits from "./sections/Benefits";
import Intro from "./sections/Intro";
import Intronav from "./sections/Intronav";


export default function Home() {
  
  return (
    <>
    <div className="min-h-8 bg-stone-600"></div>
      <main className="min-h-screen">
        <Hero />
        <Intro />
        <ProductGrid/>
        <Benefits/>
      </main>
    </>
  );
}
