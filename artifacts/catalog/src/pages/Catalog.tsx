import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SuggestBubble } from "@/components/SuggestBubble";

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-foreground selection:text-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <Contact />
      </main>
      <Footer />
      <SuggestBubble />
    </div>
  );
}
