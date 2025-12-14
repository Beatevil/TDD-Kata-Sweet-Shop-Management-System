import { ShoppingBag, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-8 w-8 text-saffron-gold" />
            <div>
              <h1 className="text-cardamom-green">CHAUDHARY & SONS SWEETS</h1>
              <p className="text-xs text-muted-foreground">Since 1921</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm transition-colors hover:text-saffron-gold">Home</a>
            <a href="#products" className="text-sm transition-colors hover:text-saffron-gold">Products</a>
            <a href="#about" className="text-sm transition-colors hover:text-saffron-gold">About</a>
            <a href="#contact" className="text-sm transition-colors hover:text-saffron-gold">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              className="bg-saffron-gold hover:bg-saffron-gold-dark text-pure-white"
              onClick={() => window.open('tel:+91xyz', '_self')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
