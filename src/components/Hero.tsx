
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-bg py-20 md:py-32 text-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI-Powered Travel Planning
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Create personalized travel itineraries in seconds with the help of artificial intelligence
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
            <MapPin className="mr-2 h-5 w-5" /> Plan Your Trip
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
