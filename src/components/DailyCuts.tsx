import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Cut {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

const cuts: Cut[] = [
  {
    id: "brisket",
    name: "Prime Brisket",
    description: "16-hour post oak smoked, salt & pepper rub, sliced thick.",
    image: "/images/cut-brisket.png",
    price: "$34 / lb",
  },
  {
    id: "ribs",
    name: "St. Louis Ribs",
    description: "Dry rubbed, glazed with espresso BBQ sauce, fall-off-the-bone tender.",
    image: "/images/cut-ribs.png",
    price: "$26 / half",
  },
  {
    id: "sausage",
    name: "Jalapeno Cheddar",
    description: "House-ground pork & beef blend, sharp cheddar, fresh jalapeno.",
    image: "/images/cut-sausage.png",
    price: "$18 / lb",
  },
  {
    id: "beefrib",
    name: "Dino Beef Rib",
    description: "The king of cuts. Massive, rich, and intensely smoky. Limited daily.",
    image: "/images/cut-beefrib.png",
    price: "$45 / lb",
  },
];

export default function DailyCuts() {
  const [activeCut, setActiveCut] = useState<Cut>(cuts[0]);

  return (
    <section id="cuts" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left: Text Menu */}
          <div className="w-full lg:w-1/2 z-10">
            <span className="text-primary tracking-widest text-sm uppercase font-semibold mb-4 block">
              Daily Pitmaster Selects
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
              The Cutting Board
            </h2>

            <div className="space-y-2">
              {cuts.map((cut) => (
                <div
                  key={cut.id}
                  onMouseEnter={() => setActiveCut(cut)}
                  className={`group relative p-6 border-l-2 transition-all duration-300 cursor-pointer ${
                    activeCut.id === cut.id
                      ? "border-primary bg-white/5"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`text-2xl font-serif transition-colors ${
                      activeCut.id === cut.id ? "text-primary" : "text-white group-hover:text-gray-200"
                    }`}>
                      {cut.name}
                    </h3>
                    <span className="text-lg font-mono text-muted-foreground">{cut.price}</span>
                  </div>
                  <p className="text-gray-400 font-light max-w-md">
                    {cut.description}
                  </p>
                  
                  {activeCut.id === cut.id && (
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-primary opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Preview */}
          <div className="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative">
            <div className="relative w-full h-full overflow-hidden rounded-sm border border-white/10">
              {cuts.map((cut) => (
                <img
                  key={cut.id}
                  src={cut.image}
                  alt={cut.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 transform scale-105 ${
                    activeCut.id === cut.id
                      ? "opacity-100 scale-100 grayscale-0"
                      : "opacity-0 grayscale"
                  }`}
                />
              ))}
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-white/80 font-mono text-xs uppercase tracking-widest mb-1">
                  Currently Viewing
                </p>
                <p className="text-2xl text-white font-serif">
                  {activeCut.name}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
