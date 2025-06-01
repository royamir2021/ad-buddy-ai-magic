
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MascotProps {
  currentStep: string;
}

export const Mascot = ({ currentStep }: MascotProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [expression, setExpression] = useState('happy');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (currentStep === 'onboarding') {
      setExpression('excited');
      setMessage("Hi there! I'm AdBuddy 🎯 Let's create amazing ads together!");
    } else if (currentStep === 'dashboard') {
      setExpression('proud');
      setMessage("Awesome work! Your campaigns are looking great! 🚀");
    }
  }, [currentStep]);

  const mascotEmoji = expression === 'excited' ? '🤖✨' : 
                     expression === 'proud' ? '🤖🎉' : 
                     expression === 'thinking' ? '🤖💭' : '🤖😊';

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-500",
      isVisible ? "transform translate-y-0 opacity-100" : "transform translate-y-20 opacity-0"
    )}>
      <div className="relative">
        {/* Chat bubble */}
        {message && (
          <div className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-200 max-w-xs slide-up">
            <p className="text-sm text-gray-700 font-medium">{message}</p>
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-200"></div>
          </div>
        )}
        
        {/* Mascot */}
        <div className={cn(
          "w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200",
          expression === 'excited' && "mascot-bounce pulse-glow"
        )}
        onClick={() => setIsVisible(!isVisible)}
        >
          {mascotEmoji}
        </div>
        
        {/* Sparkle effects */}
        {expression === 'excited' && (
          <>
            <div className="absolute -top-2 -right-2 text-yellow-400 sparkle">✨</div>
            <div className="absolute -bottom-2 -left-2 text-pink-400 sparkle" style={{ animationDelay: '0.5s' }}>⭐</div>
          </>
        )}
      </div>
    </div>
  );
};
