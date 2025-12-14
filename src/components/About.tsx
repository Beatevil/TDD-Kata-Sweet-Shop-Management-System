import { Award, Heart, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: Award,
    title: '100+ Years Legacy',
    description: 'Serving authentic sweets and snacks since 1921 with unwavering quality'
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every product is crafted with care using traditional family recipes'
  },
  {
    icon: Users,
    title: '10,000+ Happy Customers',
    description: 'Trusted by families across generations for every celebration'
  },
  {
    icon: Sparkles,
    title: 'Premium Ingredients',
    description: 'We use only the finest quality ingredients, no compromises'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-khoya-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-cardamom-green mb-4">
            About Chaudhary and Sons Sweets
          </h2>
          <p className="text-lg text-muted-foreground">
            For over a century, CHAUDHARY & SONS SWEETS has been the cornerstone of authentic Indian sweets and snacks. 
            What started as a small family business in Muzaffarnagar in 1921 has grown into a beloved institution with branches 
            across Uttar Pradesh in Muzaffarnagar, Saharanpur, and Meerut, trusted by thousands for bringing joy to every celebration and everyday moment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-petal mb-4">
                  <feature.icon className="h-8 w-8 text-cardamom-green" />
                </div>
                <h3 className="text-cardamom-green mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-cardamom-green mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Founded by Late Shri Chaudhary ji, our shop began with a simple mission: to bring the authentic 
                taste of traditional sweets to every household. Today, over four generations later, we continue 
                this legacy with the same dedication and love.
              </p>
              <p className="text-muted-foreground">
                Every sweet and snack that leaves our shop carries with it over a century of expertise, traditional 
                recipes, and the promise of quality that our customers have trusted for over 100 years.
              </p>
            </div>
            <div>
              <h3 className="text-cardamom-green mb-4">Our Promise</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-petal flex items-center justify-center mt-0.5">
                    <span className="text-cardamom-green text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Fresh products made daily with premium ingredients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-petal flex items-center justify-center mt-0.5">
                    <span className="text-cardamom-green text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Hygienic preparation in state-of-the-art facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-petal flex items-center justify-center mt-0.5">
                    <span className="text-cardamom-green text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">No artificial colors or harmful preservatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-petal flex items-center justify-center mt-0.5">
                    <span className="text-cardamom-green text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Customer satisfaction guaranteed on every purchase</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
