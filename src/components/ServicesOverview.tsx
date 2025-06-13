
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Ship, FileText, Warehouse, CheckCircle, Clock, Plane, Package } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: FileText,
      title: 'Ordering & Shipping Services',
      description: 'Complete ordering and shipping solutions for all your cargo needs.',
      features: ['Import/Export Documentation', 'Order Processing', 'Shipping Coordination']
    },
    {
      icon: Ship,
      title: 'Clearing & Forwarding',
      description: 'Expert customs clearance and freight forwarding services.',
      features: ['Customs Clearance', 'Documentation', 'Compliance Verification']
    },
    {
      icon: Package,
      title: 'Cargo Tracking & Monitoring',
      description: 'Real-time tracking and monitoring of your shipments.',
      features: ['Live Tracking', 'Status Updates', 'Delivery Confirmation']
    },
    {
      icon: Warehouse,
      title: 'Storage & Warehousing',
      description: 'Secure storage facilities with modern inventory management.',
      features: ['Bonded Warehousing', 'Inventory Management', 'Distribution Services']
    },
    {
      icon: Plane,
      title: 'Logistics Consulting',
      description: 'Professional logistics consulting and supply chain optimization.',
      features: ['Supply Chain Analysis', 'Cost Optimization', 'Route Planning']
    },
    {
      icon: Truck,
      title: 'Cargo Handling',
      description: 'Professional cargo handling and transportation services.',
      features: ['Loading/Unloading', 'Packaging', 'Special Cargo Handling']
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 logistics-bg opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="hot-deal-banner inline-block px-6 py-2 mb-6">
            <span className="text-white font-bold">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SAFIRISHA MIZIGO YAKO NA MECS GENERAL SUPPLY - We provide all kinds of supplying, 
            a full service to supply factories, companies, hospitals, oil companies etc.
          </p>
        </div>

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

        <div className="mt-16 bg-white rounded-lg p-8 shadow-2xl border-2 border-secondary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for urgent shipments and queries.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Fully licensed clearing agent with all necessary certifications.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-white" />
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
