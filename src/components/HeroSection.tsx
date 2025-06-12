
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const features = [
    'Licensed Customs Clearance',
    'Fast & Reliable Service',
    '24/7 Customer Support',
    'Competitive Rates'
  ];

  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Trusted Partner in 
              <span className="text-secondary"> Clearing & Forwarding</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Streamline your imports and exports with Tanzania's premier clearing and forwarding service. 
              Expert customs clearance, freight forwarding, and logistics solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-semibold">
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Why Choose Mecs?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-black font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Expert Knowledge</h4>
                    <p className="text-sm text-white/80">Deep understanding of Tanzanian customs regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-black font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Fast Processing</h4>
                    <p className="text-sm text-white/80">Quick clearance times to keep your business moving</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-black font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Transparent Pricing</h4>
                    <p className="text-sm text-white/80">No hidden fees, clear cost breakdowns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
