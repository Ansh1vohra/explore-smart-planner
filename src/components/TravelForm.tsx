
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const TravelForm = ({ onSubmit }: { onSubmit: (formData: any) => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    startingPoint: '',
    destination: '',
    budget: 1000,
    duration: 3,
    preferences: {
      accommodation: 'mid-range',
      food: [],
      activities: [],
    },
    additionalInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.startingPoint || !formData.destination) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Processing your request",
      description: "Our AI is creating your perfect itinerary",
    });
    
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePreferenceChange = (type: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [type]: value
      }
    }));
  };

  const handleCheckboxChange = (type: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentPrefs = [...(prev.preferences[type as keyof typeof prev.preferences] as string[] || [])];
      
      if (checked) {
        return {
          ...prev,
          preferences: {
            ...prev.preferences,
            [type]: [...currentPrefs, value]
          }
        };
      } else {
        return {
          ...prev,
          preferences: {
            ...prev.preferences,
            [type]: currentPrefs.filter(item => item !== value)
          }
        };
      }
    });
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-navy-900">Tell us about your dream trip</CardTitle>
        <CardDescription>Fill in the details below and our AI will create the perfect itinerary for you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="startingPoint">Starting Point*</Label>
              <Input 
                id="startingPoint" 
                name="startingPoint" 
                placeholder="Where are you starting from?" 
                value={formData.startingPoint}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination*</Label>
              <Input 
                id="destination" 
                name="destination" 
                placeholder="Where do you want to go?" 
                value={formData.destination}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="budget">Budget (per person)</Label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">$500</span>
              <Slider 
                id="budget"
                min={500}
                max={10000}
                step={100}
                value={[formData.budget]}
                onValueChange={values => setFormData(prev => ({ ...prev, budget: values[0] }))}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">$10,000</span>
            </div>
            <p className="text-right text-sm font-medium">${formData.budget}</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="duration">Trip Duration (days)</Label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">1 day</span>
              <Slider 
                id="duration"
                min={1}
                max={30}
                step={1}
                value={[formData.duration]}
                onValueChange={values => setFormData(prev => ({ ...prev, duration: values[0] }))}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">30 days</span>
            </div>
            <p className="text-right text-sm font-medium">{formData.duration} days</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="accommodation">Accommodation Preference</Label>
            <Select 
              value={formData.preferences.accommodation} 
              onValueChange={(value) => handlePreferenceChange('accommodation', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select accommodation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="budget">Budget-friendly</SelectItem>
                  <SelectItem value="mid-range">Mid-range</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Food Preferences</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['Local Cuisine', 'Fine Dining', 'Street Food', 'Vegetarian', 'Seafood', 'All Inclusive'].map((food) => (
                <div key={food} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`food-${food}`}
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    onChange={(e) => handleCheckboxChange('food', food, e.target.checked)}
                  />
                  <label htmlFor={`food-${food}`} className="text-sm">{food}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Activity Preferences</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['Cultural Sites', 'Nature', 'Adventure', 'Shopping', 'Relaxation', 'History', 'Nightlife', 'Family-friendly'].map((activity) => (
                <div key={activity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`activity-${activity}`}
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    onChange={(e) => handleCheckboxChange('activities', activity, e.target.checked)}
                  />
                  <label htmlFor={`activity-${activity}`} className="text-sm">{activity}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Tell us any other preferences or requirements for your trip..."
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
            Generate Itinerary
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TravelForm;
