
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TravelForm from '@/components/TravelForm';
import ItineraryResults from '@/components/ItineraryResults';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormSubmit = (formData: any) => {
    console.log("Form data submitted:", formData);
    
    // In a real implementation, you would send this data to your AI model
    // For now, we'll just simulate a loading delay and then show the results
    setFormSubmitted(true);
    
    setTimeout(() => {
      setShowResults(true);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {!showResults && (
        <>
          <Hero />
          
          <section className="py-12 md:py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">
                  Plan Your Dream Vacation
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tell us your preferences, and our AI will create the perfect itinerary for your next adventure.
                </p>
              </div>
              
              {formSubmitted ? (
                <div className="max-w-md mx-auto text-center py-12">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="rounded-full bg-teal-200 h-24 w-24 flex items-center justify-center mb-4">
                      <MapPin className="h-12 w-12 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Creating your perfect itinerary...</h3>
                    <p className="text-muted-foreground">
                      Our AI is analyzing your preferences and finding the best options for your trip.
                    </p>
                  </div>
                </div>
              ) : (
                <TravelForm onSubmit={handleFormSubmit} />
              )}
            </div>
          </section>
          
          <section className="bg-gray-50 py-12 md:py-20 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-navy-900">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600 text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Share Your Preferences</h3>
                  <p className="text-muted-foreground">
                    Tell us where you want to go, your budget, and what you enjoy doing.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600 text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">AI Creates Your Itinerary</h3>
                  <p className="text-muted-foreground">
                    Our artificial intelligence analyzes thousands of options to create your perfect trip.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600 text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Enjoy Your Trip</h3>
                  <p className="text-muted-foreground">
                    Review, customize, and download your personalized travel itinerary.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <Button 
                  size="lg" 
                  className="bg-coral-500 hover:bg-coral-600 text-white"
                  onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Planning Now
                </Button>
              </div>
            </div>
          </section>
        </>
      )}
      
      {showResults && (
        <section className="py-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Your Custom Itinerary</h2>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowResults(false);
                  setFormSubmitted(false);
                }}
              >
                Create New Itinerary
              </Button>
            </div>
            
            <ItineraryResults />
          </div>
        </section>
      )}
      
      <footer className="bg-navy-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TripPlanner AI</h3>
              <p className="text-gray-300">
                Creating personalized travel experiences with the power of artificial intelligence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-300 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 TripPlanner AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
