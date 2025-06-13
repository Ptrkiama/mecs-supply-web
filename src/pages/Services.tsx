
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Ship, Package, Warehouse, Plane, Truck, CheckCircle, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Customs Clearance',
      description: 'Expert customs clearance services for import and export cargo.',
      features: ['Import/Export Documentation', 'Duty & Tax Calculation', 'Compliance Verification', 'Fast Processing'],
      price: 'From $50'
    },
    {
      icon: Ship,
      title: 'Freight Forwarding',
      description: 'Comprehensive freight forwarding solutions by sea, air, and land.',
      features: ['Sea Freight', 'Air Freight', 'Land Transport', 'Door-to-Door Service'],
      price: 'Quote on Request'
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Storage',
      description: 'Secure bonded and non-bonded warehousing facilities.',
      features: ['Bonded Warehousing', 'Inventory Management', 'Pick & Pack', '24/7 Security'],
      price: 'From $2/m²/month'
    },
    {
      icon: Package,
      title: 'Cargo Handling',
      description: 'Professional cargo handling and packaging services.',
      features: ['Loading/Unloading', 'Special Cargo Handling', 'Packaging Services', 'Container Stuffing'],
      price: 'From $25/hour'
    },
    {
      icon: Plane,
      title: 'Express Services',
      description: 'Fast-track services for urgent shipments.',
      features: ['Same Day Processing', 'Priority Handling', 'Express Clearance', 'Real-time Updates'],
      price: 'Premium Rates'
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Reliable transportation services across Tanzania and East Africa.',
      features: ['Local Delivery', 'Long Distance', 'Cross-Border', 'Specialized Vehicles'],
      price: 'From $0.5/km'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <p className="text-lg font-bold text-primary mb-4">{service.price}</p>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mecs General Supply?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Processing</h3>
              <p className="text-gray-600">Quick turnaround times with our streamlined processes and experienced team.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed clearing agent with comprehensive insurance coverage.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-gray-600">Years of experience with thousands of successful shipments.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
