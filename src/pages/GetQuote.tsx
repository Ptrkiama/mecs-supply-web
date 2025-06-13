
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Calculator, FileText, Clock, CheckCircle } from 'lucide-react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cargoType: '',
    origin: '',
    destination: '',
    weight: '',
    dimensions: '',
    value: '',
    urgency: 'standard',
    additionalServices: '',
    description: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll send you a detailed quote within 24 hours.",
    });
    setFormData({
      name: '', email: '', phone: '', company: '', cargoType: '', origin: '', destination: '',
      weight: '', dimensions: '', value: '', urgency: 'standard', additionalServices: '', description: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    'Customs Clearance',
    'Freight Forwarding',
    'Warehousing',
    'Transportation',
    'Insurance',
    'Packaging',
    'Documentation',
    'Express Service'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Quote</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get a detailed, competitive quote for your logistics needs in just 24 hours
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-6 w-6 mr-2 text-primary" />
                    Request Your Quote
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below with your cargo details and we'll provide a competitive quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+255 123 456 789"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Cargo Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Cargo Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cargoType" className="block text-sm font-medium mb-2">
                            Cargo Type *
                          </label>
                          <Input
                            id="cargoType"
                            name="cargoType"
                            value={formData.cargoType}
                            onChange={handleChange}
                            required
                            placeholder="e.g., Electronics, Machinery, Food"
                          />
                        </div>
                        <div>
                          <label htmlFor="weight" className="block text-sm font-medium mb-2">
                            Weight (kg) *
                          </label>
                          <Input
                            id="weight"
                            name="weight"
                            type="number"
                            value={formData.weight}
                            onChange={handleChange}
                            required
                            placeholder="Total weight in kg"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="origin" className="block text-sm font-medium mb-2">
                            Origin *
                          </label>
                          <Input
                            id="origin"
                            name="origin"
                            value={formData.origin}
                            onChange={handleChange}
                            required
                            placeholder="Port/Country of origin"
                          />
                        </div>
                        <div>
                          <label htmlFor="destination" className="block text-sm font-medium mb-2">
                            Destination *
                          </label>
                          <Input
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                            placeholder="Final destination"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="dimensions" className="block text-sm font-medium mb-2">
                            Dimensions (L x W x H in cm)
                          </label>
                          <Input
                            id="dimensions"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleChange}
                            placeholder="e.g., 100 x 50 x 30"
                          />
                        </div>
                        <div>
                          <label htmlFor="value" className="block text-sm font-medium mb-2">
                            Cargo Value (USD)
                          </label>
                          <Input
                            id="value"
                            name="value"
                            type="number"
                            value={formData.value}
                            onChange={handleChange}
                            placeholder="Estimated value"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2">
                        Additional Details
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any special requirements, handling instructions, or additional information..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Quick Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Quote within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Competitive pricing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Detailed breakdown</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">No hidden charges</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Our Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-2" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Need Help?</h3>
                  <p className="text-sm mb-4">
                    Our experts are ready to assist you with your logistics needs.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>📞 0658 642499 / 0775 642499</p>
                    <p>✉️ mecsluz@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;
