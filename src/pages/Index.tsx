import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DailyCuts from "@/components/DailyCuts";
import Heritage from "@/components/Heritage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main>
        <Hero />
        <DailyCuts />
        <Heritage />
      </main>
      <Footer />
    </div>
  );
};

export default Index;