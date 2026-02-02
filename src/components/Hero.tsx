import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bbq.png"
          alt="Slow smoked Texas BBQ platter"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-8">
          <span className="inline-block py-1 px-3 mb-6 border border-primary/50 text-primary text-xs tracking-[0.3em] uppercase bg-black/50 backdrop-blur-sm">
            Est. Dallas 2024
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-black tracking-tighter text-white mb-6 uppercase leading-none">
            Fire <span className="text-primary italic font-light">&</span> Smoke
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed">
            Elevated Texas BBQ. Where industrial precision meets the primal art of the pit.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-lg uppercase tracking-widest min-w-[200px]">
              View Menu
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-none px-8 py-6 text-lg uppercase tracking-widest min-w-[200px]">
              Book Table
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>
    </section>
  );
}
