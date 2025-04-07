
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plane } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-teal-500" />
          <span className="font-bold text-lg text-navy-900">TripPlanner AI</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-navy-700 hover:text-teal-500 transition-colors">How it works</a>
          <a href="#" className="text-navy-700 hover:text-teal-500 transition-colors">Features</a>
          <a href="#" className="text-navy-700 hover:text-teal-500 transition-colors">About</a>
        </div>
        <div>
          <Button variant="ghost" className="text-navy-700 hover:text-teal-500 hover:bg-teal-50">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
