
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle, Plane, Ship, Truck } from 'lucide-react';

const HeroSection = () => {
  const features = [
    'Licensed Customs Clearance',
    'Safe & Fast Transportation',
    '24/7 Customer Support',
    'Competitive Rates'
  ];

  return (
    <section className="containers-bg relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-secondary block">MECS</span>
              <span className="text-secondary block">GENERAL SUPPLY</span>
              <span className="text-white text-2xl md:text-3xl block mt-2">NATIONAL & INTERNATIONAL</span>
            </h1>
            
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                The Best Clearing & Forwarding Company In East Africa
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-accent">
                SAFE & FAST
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <div className="floating-element">
                <Plane className="h-8 w-8 text-secondary" />
              </div>
              <div className="floating-element" style={{ animationDelay: '1s' }}>
                <Ship className="h-8 w-8 text-accent" />
              </div>
              <div className="floating-element" style={{ animationDelay: '2s' }}>
                <Truck className="h-8 w-8 text-secondary" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 border-2 border-secondary/20 shadow-2xl">
              <img 
                src="/lovable-uploads/ba53eb55-9a4f-49cc-9682-1d123e936b74.png" 
                alt="Mecs General Supply Logo" 
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-black font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ordering & Shipping Services</h4>
                    <p className="text-sm text-gray-600">Complete import/export solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-black font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Clearing & Forwarding</h4>
                    <p className="text-sm text-gray-600">Expert customs clearance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-black font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Cargo Tracking & Monitoring</h4>
                    <p className="text-sm text-gray-600">Real-time shipment updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-black font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Storage & Warehousing</h4>
                    <p className="text-sm text-gray-600">Secure storage facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-secondary" />
      </div>
    </section>
  );
};

export default HeroSection;
