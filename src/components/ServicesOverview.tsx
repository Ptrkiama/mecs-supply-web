
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Ship, FileText, Warehouse, CheckCircle, Clock } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: FileText,
      title: 'Customs Clearance',
      description: 'Expert handling of all customs documentation and procedures for seamless cargo clearance.',
      features: ['Import/Export Documentation', 'Duty & Tax Calculation', 'Compliance Verification']
    },
    {
      icon: Ship,
      title: 'Freight Forwarding',
      description: 'Comprehensive sea, air, and land freight services connecting Tanzania to global markets.',
      features: ['Ocean Freight', 'Air Freight', 'Multimodal Transport']
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Storage',
      description: 'Secure storage facilities with modern inventory management systems.',
      features: ['Bonded Warehousing', 'Inventory Management', 'Distribution Services']
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Reliable door-to-door delivery services across Tanzania and East Africa.',
      features: ['Local Distribution', 'Cross-border Transport', 'Last-mile Delivery']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From customs clearance to final delivery, we handle every aspect of your supply chain 
            with precision and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for urgent shipments and queries.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Fully licensed clearing agent with all necessary certifications.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">End-to-End Service</h3>
              <p className="text-gray-600">Complete logistics solutions from origin to final destination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
