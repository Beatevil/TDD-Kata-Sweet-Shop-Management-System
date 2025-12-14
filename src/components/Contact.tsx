import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const branches = [
  {
    city: 'Muzaffarnagar',
    address: 'Main Market, Muzaffarnagar, Uttar Pradesh',
    phone: '+91 98765 43210',
    isMain: true
  },
  {
    city: 'Saharanpur',
    address: 'City Center, Saharanpur, Uttar Pradesh',
    phone: '+91 98765 43211',
    isMain: false
  },
  {
    city: 'Meerut',
    address: 'Main Bazaar, Meerut, Uttar Pradesh',
    phone: '+91 98765 43212',
    isMain: false
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-cardamom-green mb-4">
            Visit Our Stores
          </h2>
          <p className="text-lg text-muted-foreground">
            We have three branches across Uttar Pradesh. Come experience the finest sweets and snacks. We're always ready to serve you with a smile.
          </p>
        </div>

        {/* Branch Locations */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {branches.map((branch, index) => (
            <Card key={index} className={`hover:shadow-xl transition-shadow ${branch.isMain ? 'border-2 border-saffron-gold' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-cardamom-green">{branch.city}</h3>
                  {branch.isMain && (
                    <Badge className="bg-saffron-gold hover:bg-saffron-gold-dark text-pure-white">
                      <Star className="h-3 w-3 mr-1" />
                      Main Branch
                    </Badge>
                  )}
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-cardamom-green flex-shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-cardamom-green flex-shrink-0 mt-0.5" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-petal mb-4">
                <Mail className="h-6 w-6 text-cardamom-green" />
              </div>
              <h3 className="mb-2 text-cardamom-green">Email</h3>
              <p className="text-sm text-muted-foreground">
                info@chaudharysons.com<br />
                orders@chaudharysons.com
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-petal mb-4">
                <Clock className="h-6 w-6 text-cardamom-green" />
              </div>
              <h3 className="mb-2 text-cardamom-green">Store Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon - Sat: 9 AM - 9 PM<br />
                Sunday: 9 AM - 8 PM
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-petal mb-4">
                <MapPin className="h-6 w-6 text-cardamom-green" />
              </div>
              <h3 className="mb-2 text-cardamom-green">Serving Uttar Pradesh</h3>
              <p className="text-sm text-muted-foreground">
                3 Branches<br />
                All Across Uttar Pradesh
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-cardamom-green to-cardamom-green-dark rounded-2xl p-8 md:p-12 text-center text-pure-white shadow-xl">
          <h3 className="mb-4">Special Orders & Bulk Inquiries</h3>
          <p className="mb-6 opacity-90">
            Planning a wedding, party, or corporate event? We offer customized sweet boxes and bulk orders. 
            Contact us for special pricing and arrangements.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-pure-white text-cardamom-green hover:bg-gray-100"
            onClick={() => window.open('tel:+91xyz', '_self')}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call for Bulk Orders
          </Button>
        </div>
      </div>
    </section>
  );
}
