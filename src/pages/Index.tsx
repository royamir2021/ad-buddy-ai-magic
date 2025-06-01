
import { useState } from 'react';
import { OnboardingWizard } from '@/components/OnboardingWizard';
import { Dashboard } from '@/components/Dashboard';
import { Mascot } from '@/components/Mascot';

const Index = () => {
  const [currentStep, setCurrentStep] = useState('onboarding');
  const [campaignData, setCampaignData] = useState(null);

  const handleOnboardingComplete = (data: any) => {
    setCampaignData(data);
    setCurrentStep('dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Mascot - always visible */}
      <Mascot currentStep={currentStep} />

      {/* Main content */}
      <div className="relative z-10">
        {currentStep === 'onboarding' && (
          <OnboardingWizard onComplete={handleOnboardingComplete} />
        )}
        
        {currentStep === 'dashboard' && (
          <Dashboard campaignData={campaignData} />
        )}
      </div>
    </div>
  );
};

export default Index;
