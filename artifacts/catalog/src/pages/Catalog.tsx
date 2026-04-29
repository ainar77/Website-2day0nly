import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductRequest } from "@/components/ProductRequest";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-foreground selection:text-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <ProductRequest />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
