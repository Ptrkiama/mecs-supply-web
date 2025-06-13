
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Mwalimu',
      company: 'Dar Import Company',
      role: 'Managing Director',
      content: 'Mecs General Supply has been our trusted partner for over 3 years. Their efficiency in customs clearance and professional service has saved us both time and money.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Sarah Kibwana',
      company: 'Kilimanjaro Traders',
      role: 'Operations Manager',
      content: 'Outstanding service! They handled our complex pharmaceutical imports with complete professionalism. Highly recommended for any clearing and forwarding needs.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Ahmed Hassan',
      company: 'East Africa Motors',
      role: 'CEO',
      content: 'Reliable, fast, and cost-effective. Mecs General Supply cleared our vehicle imports smoothly and kept us informed throughout the entire process.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Grace Mtumwa',
      company: 'Coastal Electronics',
      role: 'Logistics Coordinator',
      content: 'Their warehousing facilities are excellent and the team is very professional. They treat our cargo with the utmost care and attention.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Sijaona',
      company: 'Sijaona Industries',
      role: 'Supply Chain Manager',
      content: 'Fast customs clearance and competitive pricing. Mecs General Supply has consistently delivered on their promises. Great team to work with!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Fatuma Ali',
      company: 'Zanzibar Spice Co.',
      role: 'Export Manager',
      content: 'Excellent support for our spice exports. Their knowledge of regulations and efficient processing has helped grow our international business.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '5000+', label: 'Shipments Cleared' },
    { number: '15+', label: 'Years Experience' },
    { number: '99%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about our services
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-2" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the same professional service that our clients rave about. Get your quote today!
          </p>
          <div className="space-x-4">
            <button className="bg-secondary hover:bg-secondary/90 text-black font-bold py-3 px-8 rounded-lg transition-colors">
              Get Quote Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
