import { Button } from './ui/button';
import { ArrowRight, Award, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-khoya-cream to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-petal px-4 py-2 text-sm text-cardamom-green">
                <Award className="h-4 w-4" />
                Premium Quality Since 1921
              </span>
            </div>
            
            <h2 className="text-cardamom-green">
              Traditional Sweets & Snacks
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Experience the authentic taste of traditional Indian sweets like gulab jamun, kaju katli, and specialty namkeen including shakarpara and mathri. We also offer marriage special snacks, gift boxes, and custom packaging. Made fresh daily with the finest ingredients.
            </p>

            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-saffron-gold" />
                <span className="text-sm">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-saffron-gold" />
                <span className="text-sm">100+ Years Legacy</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-saffron-gold" />
                <span className="text-sm">100% Pure</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-saffron-gold hover:bg-saffron-gold-dark text-pure-white"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Visit Store
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760263217153-ef719ca2da19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBtaXRoYWl8ZW58MXx8fHwxNzYwMzUwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditional Indian Sweets"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-rose-petal rounded-full p-3">
                  <ShoppingBag className="h-6 w-6 text-cardamom-green" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                  <p className="text-cardamom-green">10,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ShoppingBag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);
