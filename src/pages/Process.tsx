
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Contact us with your shipping requirements. We assess your needs and provide a detailed quote.',
      details: ['Cargo assessment', 'Route planning', 'Cost estimation', 'Timeline discussion']
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'We handle all necessary paperwork including permits, licenses, and customs forms.',
      details: ['Import/Export permits', 'Bill of Lading', 'Commercial invoices', 'Packing lists']
    },
    {
      step: '03',
      title: 'Cargo Collection',
      description: 'Our team collects your cargo from the specified location with proper handling.',
      details: ['Safe pickup', 'Cargo inspection', 'Proper packaging', 'Loading supervision']
    },
    {
      step: '04',
      title: 'Transportation',
      description: 'Secure transportation to the port or border using our trusted network.',
      details: ['GPS tracking', 'Insurance coverage', 'Regular updates', 'Safe handling']
    },
    {
      step: '05',
      title: 'Customs Clearance',
      description: 'Expert handling of all customs procedures and compliance requirements.',
      details: ['Duty calculation', 'Tax payment', 'Inspection coordination', 'Permit verification']
    },
    {
      step: '06',
      title: 'Final Delivery',
      description: 'Safe delivery to the final destination with confirmation and documentation.',
      details: ['Final inspection', 'Delivery confirmation', 'Documentation handover', 'Customer satisfaction']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Process</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A streamlined, transparent process that ensures your cargo reaches its destination safely and on time
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="mb-8 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-8">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
