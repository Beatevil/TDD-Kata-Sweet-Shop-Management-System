import { ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-saffron-gold" />
              <div>
                <p className="text-white">CHAUDHARY & SONS SWEETS</p>
                <p className="text-xs text-gray-400">Since 1921</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted destination for authentic Indian mithai and traditional namkeen for over 100 years.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-saffron-gold transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-saffron-gold transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-saffron-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-saffron-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-saffron-gold transition-colors">Sweets & Mithai</a></li>
              <li><a href="#products" className="hover:text-saffron-gold transition-colors">Shakarpara & Namkeen</a></li>
              <li><a href="#products" className="hover:text-saffron-gold transition-colors">Wedding Packages</a></li>
              <li><a href="#products" className="hover:text-saffron-gold transition-colors">Gift Boxes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-saffron-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-saffron-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-saffron-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Follow us for daily updates, special offers, and mouth-watering posts!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-400">
            © 2025 CHAUDHARY & SONS SWEETS. All rights reserved. | Made with ❤️ for our customers
          </p>
        </div>
      </div>
    </footer>
  );
}
