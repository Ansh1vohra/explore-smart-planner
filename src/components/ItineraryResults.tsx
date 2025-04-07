
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Hotel, Utensils, Map, Clock, DollarSign } from 'lucide-react';

type Place = {
  name: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: string;
};

type Accommodation = {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  amenities: string[];
};

type Restaurant = {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  cuisine: string;
};

type DayPlan = {
  day: number;
  places: Place[];
  accommodation: Accommodation;
  restaurants: Restaurant[];
};

type ItineraryData = {
  destination: string;
  totalDays: number;
  totalBudget: number;
  summary: string;
  dailyPlans: DayPlan[];
};

// Mocked data for demonstration
const mockItinerary: ItineraryData = {
  destination: "Paris, France",
  totalDays: 3,
  totalBudget: 1500,
  summary: "Experience the magic of Paris with this 3-day itinerary that balances iconic landmarks, cultural experiences, and authentic local cuisine. From the Eiffel Tower to charming Montmartre, immerse yourself in the beauty and romance of the City of Light.",
  dailyPlans: [
    {
      day: 1,
      places: [
        {
          name: "Eiffel Tower",
          description: "Start your trip with a visit to the iconic Eiffel Tower. Take the elevator to the top for panoramic views of the city.",
          imageUrl: "/eiffel-tower.jpg",
          duration: "2 hours",
          price: "€25.50"
        },
        {
          name: "Seine River Cruise",
          description: "Enjoy a relaxing river cruise along the Seine and see many famous landmarks from a different perspective.",
          imageUrl: "/seine-cruise.jpg",
          duration: "1 hour",
          price: "€15"
        },
        {
          name: "Louvre Museum",
          description: "Spend your afternoon exploring one of the world's largest art museums, home to the Mona Lisa and thousands of other masterpieces.",
          imageUrl: "/louvre.jpg",
          duration: "3 hours",
          price: "€17"
        }
      ],
      accommodation: {
        name: "Hotel des Arts Montmartre",
        description: "A charming boutique hotel in the artistic neighborhood of Montmartre with easy access to public transportation.",
        imageUrl: "/hotel-montmartre.jpg",
        price: "€120 per night",
        amenities: ["Free WiFi", "Breakfast included", "Air conditioning", "24-hour reception"]
      },
      restaurants: [
        {
          name: "Le Petit Bistrot",
          description: "Authentic French cuisine in a cozy atmosphere with friendly service.",
          imageUrl: "/petit-bistrot.jpg",
          price: "€€",
          cuisine: "French"
        },
        {
          name: "Café de Paris",
          description: "Classic Parisian café offering excellent pastries and coffee.",
          imageUrl: "/cafe-paris.jpg",
          price: "€",
          cuisine: "Café"
        }
      ]
    },
    {
      day: 2,
      places: [
        {
          name: "Montmartre & Sacré-Cœur",
          description: "Explore the charming artistic neighborhood of Montmartre and visit the stunning Sacré-Cœur Basilica.",
          imageUrl: "/montmartre.jpg",
          duration: "3 hours",
          price: "Free"
        },
        {
          name: "Champs-Élysées",
          description: "Stroll down one of the world's most famous avenues with luxury shops and cafés.",
          imageUrl: "/champs-elysees.jpg",
          duration: "2 hours",
          price: "Free"
        },
        {
          name: "Arc de Triomphe",
          description: "Climb to the top of this iconic monument for spectacular views of Paris.",
          imageUrl: "/arc-de-triomphe.jpg",
          duration: "1 hour",
          price: "€13"
        }
      ],
      accommodation: {
        name: "Hotel des Arts Montmartre",
        description: "A charming boutique hotel in the artistic neighborhood of Montmartre with easy access to public transportation.",
        imageUrl: "/hotel-montmartre.jpg",
        price: "€120 per night",
        amenities: ["Free WiFi", "Breakfast included", "Air conditioning", "24-hour reception"]
      },
      restaurants: [
        {
          name: "La Maison Rose",
          description: "Historic pink restaurant with traditional French dishes and a beautiful terrace.",
          imageUrl: "/maison-rose.jpg",
          price: "€€",
          cuisine: "French"
        },
        {
          name: "Le Consulat",
          description: "Iconic Montmartre restaurant with excellent French cuisine in a historic building.",
          imageUrl: "/le-consulat.jpg",
          price: "€€",
          cuisine: "French"
        }
      ]
    },
    {
      day: 3,
      places: [
        {
          name: "Notre-Dame Cathedral",
          description: "Marvel at the exterior of this medieval Catholic cathedral, currently under restoration after the 2019 fire.",
          imageUrl: "/notre-dame.jpg",
          duration: "1 hour",
          price: "Free"
        },
        {
          name: "Latin Quarter",
          description: "Wander through this historic intellectual hub with charming streets, bookshops, and cafés.",
          imageUrl: "/latin-quarter.jpg",
          duration: "2 hours",
          price: "Free"
        },
        {
          name: "Luxembourg Gardens",
          description: "Relax in these beautiful gardens inspired by the Boboli Gardens in Florence.",
          imageUrl: "/luxembourg-gardens.jpg",
          duration: "1 hour",
          price: "Free"
        }
      ],
      accommodation: {
        name: "Hotel des Arts Montmartre",
        description: "A charming boutique hotel in the artistic neighborhood of Montmartre with easy access to public transportation.",
        imageUrl: "/hotel-montmartre.jpg",
        price: "€120 per night",
        amenities: ["Free WiFi", "Breakfast included", "Air conditioning", "24-hour reception"]
      },
      restaurants: [
        {
          name: "Aux Deux Magots",
          description: "Historic café once frequented by famous writers and intellectuals.",
          imageUrl: "/deux-magots.jpg",
          price: "€€€",
          cuisine: "French"
        },
        {
          name: "Café de Flore",
          description: "One of Paris's oldest and most prestigious cafés with excellent food.",
          imageUrl: "/cafe-flore.jpg",
          price: "€€€",
          cuisine: "French"
        }
      ]
    }
  ]
};

const ItineraryResults = ({ data = mockItinerary }: { data?: ItineraryData }) => {
  return (
    <div className="container mx-auto py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPin className="text-teal-500" size={24} />
                {data.destination}
              </CardTitle>
              <CardDescription className="text-lg mt-2 flex items-center gap-4">
                <span className="flex items-center">
                  <Calendar className="mr-1 text-teal-500" size={16} />
                  {data.totalDays} days
                </span>
                <span className="flex items-center">
                  <DollarSign className="mr-1 text-teal-500" size={16} />
                  ${data.totalBudget} budget
                </span>
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Map size={16} />
                View Map
              </Button>
              <Button className="bg-teal-500 hover:bg-teal-600 gap-2">
                Share Itinerary
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{data.summary}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="day1" className="mb-8">
        <TabsList className="w-full flex overflow-x-auto">
          {data.dailyPlans.map((day, index) => (
            <TabsTrigger key={index} value={`day${day.day}`} className="flex-1">
              Day {day.day}
            </TabsTrigger>
          ))}
          <TabsTrigger value="overview" className="flex-1">
            Overview
          </TabsTrigger>
        </TabsList>
        
        {data.dailyPlans.map((dayPlan, index) => (
          <TabsContent key={index} value={`day${dayPlan.day}`} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-navy-900">Places to Visit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dayPlan.places.map((place, placeIndex) => (
                  <Card key={placeIndex} className="overflow-hidden">
                    <div className="bg-gray-200 h-48">
                      {/* Placeholder for image */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <Map className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{place.name}</CardTitle>
                      <CardDescription className="flex justify-between">
                        <span className="flex items-center gap-1">
                          <Clock size={16} className="text-teal-500" />
                          {place.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign size={16} className="text-teal-500" />
                          {place.price}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{place.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-navy-900 flex items-center gap-2">
                <Hotel className="text-teal-500" size={20} /> 
                Accommodation
              </h3>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="bg-gray-200 md:w-1/3 h-48 md:h-auto">
                    {/* Placeholder for hotel image */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      <Hotel className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{dayPlan.accommodation.name}</CardTitle>
                        <span className="text-sm font-medium">{dayPlan.accommodation.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{dayPlan.accommodation.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {dayPlan.accommodation.amenities.map((amenity, i) => (
                          <span key={i} className="text-xs bg-gray-100 px-2.5 py-0.5 rounded-full">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-navy-900 flex items-center gap-2">
                <Utensils className="text-teal-500" size={20} />
                Restaurants
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dayPlan.restaurants.map((restaurant, resIndex) => (
                  <Card key={resIndex} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="bg-gray-200 h-32 md:w-1/3">
                        {/* Placeholder for restaurant image */}
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                          <Utensils className="h-8 w-8 text-gray-400" />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{restaurant.name}</CardTitle>
                            <div className="text-sm">
                              <span className="font-medium">{restaurant.price}</span>
                              <span className="text-xs ml-2 bg-gray-100 px-2 py-0.5 rounded-full">
                                {restaurant.cuisine}
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {restaurant.description}
                          </p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}

        <TabsContent value="overview">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Trip Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{data.summary}</p>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Trip Statistics:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <Calendar className="h-6 w-6 mx-auto mb-2 text-teal-500" />
                        <div className="text-2xl font-bold text-navy-900">{data.totalDays}</div>
                        <div className="text-xs text-muted-foreground">Days</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <MapPin className="h-6 w-6 mx-auto mb-2 text-teal-500" />
                        <div className="text-2xl font-bold text-navy-900">
                          {data.dailyPlans.reduce((acc, day) => acc + day.places.length, 0)}
                        </div>
                        <div className="text-xs text-muted-foreground">Places</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <Utensils className="h-6 w-6 mx-auto mb-2 text-teal-500" />
                        <div className="text-2xl font-bold text-navy-900">
                          {data.dailyPlans.reduce((acc, day) => acc + day.restaurants.length, 0)}
                        </div>
                        <div className="text-xs text-muted-foreground">Restaurants</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <DollarSign className="h-6 w-6 mx-auto mb-2 text-teal-500" />
                        <div className="text-2xl font-bold text-navy-900">${data.totalBudget}</div>
                        <div className="text-xs text-muted-foreground">Budget</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Day-by-Day Overview</h3>
              {data.dailyPlans.map((dayPlan, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gray-50 py-3">
                    <CardTitle className="text-lg">Day {dayPlan.day}</CardTitle>
                  </CardHeader>
                  <CardContent className="py-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span className="text-sm">
                          {dayPlan.places.map(p => p.name).join(' → ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Hotel className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span className="text-sm">{dayPlan.accommodation.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span className="text-sm">
                          {dayPlan.restaurants.map(r => r.name).join(' & ')}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-center mt-8">
        <Button className="bg-teal-500 hover:bg-teal-600">
          Download Full Itinerary
        </Button>
      </div>
    </div>
  );
};

export default ItineraryResults;
