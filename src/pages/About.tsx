import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Target, Award, Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To provide efficient, reliable, and cost-effective clearing and forwarding services that enable businesses to succeed in international trade.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description:
        "To be East Africa's leading logistics partner, known for excellence, innovation, and unwavering commitment to customer success.",
    },
    {
      icon: Award,
      title: 'Our Values',
      description:
        'Integrity, transparency, customer focus, and continuous improvement guide everything we do.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description:
        'Experienced professionals with deep knowledge of customs regulations and international trade requirements.',
    },
  ];

  const projectList = [
    {
      title: 'CEO - Mecs',
      image: '/Work/work1.jpg',
    },
    {
      title: 'CEO & The Team - Tanga Port',
      image: '/Work/work2.jpg',
    },
    {
      title: 'Operation Officer',
      image: '/Work/work3.jpg',
    },
    {
      title: 'Mecs General Supply Team',
      image: '/Work/work4.jpg',
    },
    {
      title: 'Technical Department',
      image: '/Work/work5.jpg',
    },
    {
      title: 'IT Department',
      image: '/Work/work6.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const showModal = currentIndex !== null;

  const goNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % projectList.length);
    }
  };

  const goPrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + projectList.length) % projectList.length);
    }
  };

  const closeModal = () => setCurrentIndex(null);

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
                Founded in 2010, Mecs General Supply began as a small clearing and forwarding
                company with a simple mission: to make international trade easier and more
                accessible for Tanzanian businesses.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown into one of Tanzania's most trusted logistics partners,
                serving hundreds of businesses from small importers to large multinational
                corporations. Our success is built on our deep understanding of local regulations,
                commitment to customer service, and ability to adapt to the evolving needs of
                international trade.
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
      
      {/* Our Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Meet the people who drive our mission and keep operations running smoothly every day.
          </p>
          </div>
       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projectList.map((project, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg cursor-pointer transition duration-300"
                onClick={() => setCurrentIndex(idx)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && currentIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <button
              className="absolute top-6 right-6 text-white"
              onClick={closeModal}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={goPrev}
              className="absolute left-6 md:left-12 text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <div className="max-w-3xl text-center px-4">
              <img
                src={projectList[currentIndex].image}
                alt={projectList[currentIndex].title}
                className="max-h-[80vh] rounded-lg shadow-2xl mx-auto"
              />
              <p className="mt-4 text-white text-xl font-semibold">
                {projectList[currentIndex].title}
              </p>
            </div>

            <button
              onClick={goNext}
              className="absolute right-6 md:right-12 text-white"
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default About;
