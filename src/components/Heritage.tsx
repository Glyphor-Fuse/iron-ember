import { Button } from "@/components/ui/button";

export default function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="relative z-10 aspect-[4/5] w-full max-w-md mx-auto md:ml-0 border border-white/10">
              <img 
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ABYTuqk3l6jQwNFHMl5zLDus/user-28g2Vr2tFHWmicI728ehPG3p/img-VMXs9wyd09tz1f1kjUeLnxCZ.png?st=2026-02-02T21%3A30%3A47Z&se=2026-02-02T23%3A30%3A47Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=e12db1aa-1007-44fd-8388-3a70fd6a4956&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-02-02T22%3A30%3A47Z&ske=2026-02-03T22%3A30%3A47Z&sks=b&skv=2024-08-04&sig=ePRJ1whCZwOSib9aAZNoFG9I/H/LtndbW6eIeRP%2BxxM%3D" 
                alt="Pitmaster checking the fire" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 z-0 hidden md:block" />
            <div className="absolute -top-8 -left-8 w-64 h-64 border border-white/5 z-0 hidden md:block" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary text-sm tracking-[0.3em] uppercase font-bold">The Craft</h2>
              <h3 className="text-4xl md:text-6xl font-serif leading-tight">
                Respect the <br/>
                <span className="text-gray-500 italic">Process</span>.
              </h3>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              We don't rush. We don't hide. At Iron & Ember, we believe barbecue is an architectural pursuit—building flavor layer by layer with nothing but post oak, time, and honest conviction.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Located in the industrial heart of Dallas, our pits burn 24 hours a day. We honor the traditions of Central Texas while carving out a new space for modern hospitality.
            </p>

            <div className="pt-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 uppercase tracking-widest">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
