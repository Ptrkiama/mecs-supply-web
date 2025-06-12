
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide efficient, reliable, and cost-effective clearing and forwarding services that enable businesses to succeed in international trade.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To be East Africa\'s leading logistics partner, known for excellence, innovation, and unwavering commitment to customer success.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, transparency, customer focus, and continuous improvement guide everything we do.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Experienced professionals with deep knowledge of customs regulations and international trade requirements.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mecs General Supply</h1>
          <p className="text-xl max-w-3xl mx-auto">
            With over a decade of experience in clearing and forwarding, we've built our reputation 
            on trust, expertise, and exceptional service delivery.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, Mecs General Supply began as a small clearing and forwarding company 
                with a simple mission: to make international trade easier and more accessible for 
                Tanzanian businesses.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown into one of Tanzania's most trusted logistics partners, 
                serving hundreds of businesses from small importers to large multinational corporations. 
                Our success is built on our deep understanding of local regulations, commitment to 
                customer service, and ability to adapt to the evolving needs of international trade.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we handle thousands of shipments annually, maintaining our reputation for 
                reliability, transparency, and expertise in every aspect of customs clearance and 
                freight forwarding.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-gray-600">Shipments Cleared</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our operations and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
