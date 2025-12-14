import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Gift, Package } from 'lucide-react';

const products = [
  {
    name: 'Gulab Jamun',
    description: 'Soft, spongy and delicious traditional gulab jamun',
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwaW5kaWFuJTIwc3dlZXR8ZW58MXx8fHwxNzYwMzc3OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: true
  },
  {
    name: 'Kaju Katli',
    description: 'Premium cashew fudge, our signature specialty',
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWp1JTIwa2F0bGklMjBjYXNoZXd8ZW58MXx8fHwxNzYwMzc3OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: true
  },
  {
    name: 'Assorted Barfi',
    description: 'Chocolate barfi, mango barfi, pista barfi and more',
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1699708263762-00ca477760bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHN3ZWV0cyUyMGRlc3NlcnR8ZW58MXx8fHwxNzYwMzc3NzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: true
  },
  {
    name: 'Shakarpara & Namkeen',
    description: 'Crispy shakarpara, mathri, sev and traditional namkeen',
    category: 'Namkeen',
    image: 'https://images.unsplash.com/photo-1723648722809-65f1e11e5060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYW1rZWVuJTIwc25hY2tzJTIwaW5kaWFufGVufDF8fHx8MTc2MDM3NzczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: false
  },
  {
    name: 'Marriage Special Snacks',
    description: 'Complete snack packages for weddings and celebrations',
    category: 'Wedding Special',
    image: 'https://images.unsplash.com/photo-1633536705882-d331e8d1858c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNuYWNrcyUyMHN0b3JlfGVufDF8fHx8MTc2MDM3NzczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: true,
    icon: Gift
  },
  {
    name: 'Ladoo Varieties',
    description: 'Besan ladoo, motichoor ladoo, boondi ladoo',
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1635952346904-95f2ccfcd029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWRvbyUyMHN3ZWV0c3xlbnwxfHx8fDE3NjAzNzQ2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: false
  },
  {
    name: 'Premium Dry Fruits Pack',
    description: 'Assorted dry fruits in beautiful gift packaging',
    category: 'Dry Fruits',
    image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnklMjBmcnVpdHMlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2MDM3NzkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: false,
    icon: Package
  },
  {
    name: 'Sweet Gift Box',
    description: 'Assorted sweets beautifully packed for gifting',
    category: 'Gift Box',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4a1e6def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldCUyMGdpZnQlMjBib3h8ZW58MXx8fHwxNzYwMzc3OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: true,
    icon: Gift
  },
  {
    name: 'Snacks Kit',
    description: 'Mixed namkeen and snacks perfect for gatherings',
    category: 'Snack Kit',
    image: 'https://images.unsplash.com/photo-1723648722809-65f1e11e5060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYW1rZWVuJTIwc25hY2tzJTIwaW5kaWFufGVufDF8fHx8MTc2MDM3NzczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: false,
    icon: Package
  },
  {
    name: 'Sweets & Snacks Mix Box',
    description: 'Perfect combination of sweets and namkeen in one box',
    category: 'Mix Box',
    image: 'https://images.unsplash.com/photo-1739132124985-6c9277e268b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMHNob3AlMjBkaXNwbGF5fGVufDF8fHx8MTc2MDM1NDg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: true,
    icon: Gift
  },
  {
    name: 'Traditional Mithai',
    description: 'Jalebi, imarti, balushahi and other traditional sweets',
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1760263217153-ef719ca2da19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBtaXRoYWl8ZW58MXx8fHwxNzYwMzUwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: false
  },
  {
    name: 'Festival Specials',
    description: 'Gajak, pinni, rewri and seasonal delicacies',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1760263217153-ef719ca2da19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBtaXRoYWl8ZW58MXx8fHwxNzYwMzUwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    special: false
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-rose-petal text-cardamom-green hover:bg-rose-petal">
            Our Products
          </Badge>
          <h2 className="text-cardamom-green mb-4">
            Delicious Sweets & Namkeen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From traditional mithai to marriage special snacks, dry fruits packs to custom gift boxes - explore our complete range of authentic products
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.special && (
                  <div className="absolute top-3 right-3 bg-jalebi-orange text-pure-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Special
                  </div>
                )}
                {product.icon && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-cardamom-green p-2 rounded-full">
                    <product.icon className="h-4 w-4" />
                  </div>
                )}
                <Badge className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-cardamom-green text-xs">
                  {product.category}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="text-cardamom-green mb-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offerings Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-khoya-cream to-white border-rose-petal">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-petal mb-4">
                <Gift className="h-6 w-6 text-cardamom-green" />
              </div>
              <h3 className="text-cardamom-green mb-2">Wedding Packages</h3>
              <p className="text-sm text-muted-foreground">
                Special bulk packages for marriages with shakarpara, mathri, and complete snack kits
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-khoya-cream to-white border-rose-petal">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-petal mb-4">
                <Package className="h-6 w-6 text-cardamom-green" />
              </div>
              <h3 className="text-cardamom-green mb-2">Custom Gift Boxes</h3>
              <p className="text-sm text-muted-foreground">
                Create your own mix of sweets, dry fruits, and namkeen in beautiful packaging
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-khoya-cream to-white border-rose-petal">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-petal mb-4">
                <Sparkles className="h-6 w-6 text-cardamom-green" />
              </div>
              <h3 className="text-cardamom-green mb-2">Seasonal Specials</h3>
              <p className="text-sm text-muted-foreground">
                Festival special sweets and snacks prepared with traditional recipes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
