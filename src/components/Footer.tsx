import { MapPin, Clock, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="text-3xl font-serif font-bold tracking-tighter uppercase">
              Iron <span className="text-primary">&</span> Ember
            </a>
            <p className="text-gray-400 max-w-xs font-light">
              Wood-fired meats and elevated sides served in an industrial-modern setting. 
              Sold out daily.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Find Us</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <MapPin className="text-primary shrink-0" size={20} />
                <p className="text-gray-300">
                  2840 Industrial Blvd,<br />
                  Dallas, TX 75207
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-primary shrink-0" size={20} />
                <p className="text-gray-300">(214) 555-0198</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Pit Hours</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Clock className="text-primary shrink-0" size={20} />
                <div className="space-y-1">
                  <p className="text-gray-300"><span className="text-white font-semibold">Tue - Thu:</span> 11am - Sold Out</p>
                  <p className="text-gray-300"><span className="text-white font-semibold">Fri - Sat:</span> 11am - 10pm</p>
                  <p className="text-gray-300"><span className="text-white font-semibold">Sun:</span> 11am - Sold Out</p>
                  <p className="text-gray-500 italic mt-2">Closed Mondays</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
          <p>© 2024 Iron & Ember BBQ. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
