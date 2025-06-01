
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface OnboardingWizardProps {
  onComplete: (data: any) => void;
}

export const OnboardingWizard = ({ onComplete }: OnboardingWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    productService: '',
    goal: '',
    budget: '',
    targetAudience: '',
    location: '',
    description: ''
  });
  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        handleComplete();
      }
    }
  };

  const handleComplete = () => {
    toast({
      title: "🎉 Awesome work!",
      description: "Your campaign setup is complete. Let's create some amazing ads!",
    });
    onComplete(formData);
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.businessName || !formData.productService) {
          toast({
            title: "Almost there!",
            description: "Please fill in your business details to continue.",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 2:
        if (!formData.goal) {
          toast({
            title: "Pick your goal!",
            description: "Choose what you'd like to achieve with your ads.",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 3:
        if (!formData.budget) {
          toast({
            title: "Budget needed!",
            description: "Let us know your monthly advertising budget.",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 4:
        if (!formData.targetAudience) {
          toast({
            title: "Who's your audience?",
            description: "Tell us who you want to reach with your ads.",
            variant: "destructive"
          });
          return false;
        }
        break;
    }
    return true;
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 slide-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Let's Create Your Perfect Ad Campaign! 🚀
          </h1>
          <p className="text-xl text-gray-600">
            No worries, I'll guide you through every step. This will only take 2 minutes!
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-3 rounded-full" />
        </div>

        {/* Step content */}
        <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm rounded-3xl slide-up">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏢</div>
                <h2 className="text-2xl font-bold text-gray-800">Tell me about your business</h2>
                <p className="text-gray-600">Help me understand what makes your business special!</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="businessName" className="text-base font-medium">What's your business name?</Label>
                  <Input
                    id="businessName"
                    placeholder="e.g., Sarah's Bakery"
                    value={formData.businessName}
                    onChange={(e) => updateFormData('businessName', e.target.value)}
                    className="mt-2 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <Label htmlFor="productService" className="text-base font-medium">What do you sell?</Label>
                  <Textarea
                    id="productService"
                    placeholder="e.g., Fresh baked goods, custom cakes, and coffee"
                    value={formData.productService}
                    onChange={(e) => updateFormData('productService', e.target.value)}
                    className="mt-2 rounded-xl border-2 border-gray-200 focus:border-blue-400"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold text-gray-800">What's your main goal?</h2>
                <p className="text-gray-600">Every great campaign starts with a clear goal!</p>
              </div>
              
              <Select value={formData.goal} onValueChange={(value) => updateFormData('goal', value)}>
                <SelectTrigger className="h-14 rounded-xl border-2 border-gray-200 text-base">
                  <SelectValue placeholder="Choose your primary goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website-traffic">🌐 Drive more website traffic</SelectItem>
                  <SelectItem value="sales">💰 Increase online sales</SelectItem>
                  <SelectItem value="leads">📧 Generate leads & inquiries</SelectItem>
                  <SelectItem value="awareness">📢 Build brand awareness</SelectItem>
                  <SelectItem value="store-visits">🏪 Get more people to visit my store</SelectItem>
                  <SelectItem value="calls">📞 Generate phone calls</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💰</div>
                <h2 className="text-2xl font-bold text-gray-800">What's your monthly budget?</h2>
                <p className="text-gray-600">Don't worry, you can always adjust this later!</p>
              </div>
              
              <Select value={formData.budget} onValueChange={(value) => updateFormData('budget', value)}>
                <SelectTrigger className="h-14 rounded-xl border-2 border-gray-200 text-base">
                  <SelectValue placeholder="Select your monthly ad budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100-300">💡 $100 - $300 (Starting out)</SelectItem>
                  <SelectItem value="300-500">🚀 $300 - $500 (Growing business)</SelectItem>
                  <SelectItem value="500-1000">📈 $500 - $1,000 (Expanding reach)</SelectItem>
                  <SelectItem value="1000-2500">🎯 $1,000 - $2,500 (Serious growth)</SelectItem>
                  <SelectItem value="2500+">💎 $2,500+ (Maximum impact)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">👥</div>
                <h2 className="text-2xl font-bold text-gray-800">Who are your ideal customers?</h2>
                <p className="text-gray-600">Help me understand who you want to reach!</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="targetAudience" className="text-base font-medium">Describe your ideal customer</Label>
                  <Textarea
                    id="targetAudience"
                    placeholder="e.g., Local families, working professionals aged 25-45, people who love fresh baked goods"
                    value={formData.targetAudience}
                    onChange={(e) => updateFormData('targetAudience', e.target.value)}
                    className="mt-2 rounded-xl border-2 border-gray-200 focus:border-blue-400"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="location" className="text-base font-medium">Where are your customers located?</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Downtown Chicago, IL"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="mt-2 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-3 rounded-xl border-2"
            >
              ← Back
            </Button>
            
            <Button
              onClick={handleNext}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {currentStep === totalSteps ? '🚀 Create My Campaign!' : 'Next Step →'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
