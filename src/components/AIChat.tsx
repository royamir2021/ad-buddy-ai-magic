
import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AIChatProps {
  campaignData: any;
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export const AIChat = ({ campaignData }: AIChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: `Hi there! 👋 I'm your AI advertising assistant. I've reviewed your campaign for ${campaignData?.businessName} and I'm here to help you optimize it. What would you like to work on today?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickSuggestions = [
    "💰 How can I reduce my cost per click?",
    "📈 Improve my ad performance",
    "✏️ Write better ad headlines",
    "📍 Target new locations",
    "📱 Create mobile-friendly ads",
    "🎯 Find my ideal audience"
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('cost') || input.includes('reduce') || input.includes('cheaper')) {
      return "Great question! 💡 Here are 3 proven ways to reduce your cost per click:\n\n1. **Add negative keywords** - I noticed you might be showing for 'free bakery' searches. Let's exclude those!\n\n2. **Improve your Quality Score** - Your current ads are good, but we could make them more relevant. Try mentioning your location in the headline.\n\n3. **Adjust your bidding** - You're currently bidding on broad keywords. Let's focus on specific terms like 'fresh bakery [your city]' instead.\n\nWould you like me to help implement any of these changes? 🚀";
    }
    
    if (input.includes('headline') || input.includes('write') || input.includes('text')) {
      return "I'd love to help you write killer headlines! ✍️ Based on your bakery business, here are some high-performing headline ideas:\n\n🥖 **\"Fresh Baked Daily - Order Online Now!\"**\n🎂 **\"Custom Cakes Made With Love\"**\n☕ **\"Coffee & Pastries - Ready in 15 Minutes\"**\n\nThe secret sauce? Use action words, mention benefits, and create urgency. Your current headline could boost performance by 23% with these tweaks!\n\nWhich style resonates with your brand? I can create more variations! 🎯";
    }
    
    if (input.includes('performance') || input.includes('improve') || input.includes('better')) {
      return "Let me analyze your current performance! 📊\n\n**The Good News:** Your click-through rate is 15% above industry average! 🎉\n\n**Areas to Optimize:**\n• **Mobile experience** - 68% of your clicks are mobile, but your mobile landing page loads slowly\n• **Ad scheduling** - You're getting great results 7-9 AM and 4-6 PM\n• **Audience expansion** - Similar businesses see 30% more conversions targeting 'foodie' interests\n\n**Quick Win:** Let's pause ads during low-performing hours and boost budget during your peak times. This could increase conversions by 25%!\n\nReady to make these changes? 🚀";
    }
    
    if (input.includes('location') || input.includes('target') || input.includes('area')) {
      return "Smart thinking! 📍 Location targeting can make a huge difference. Based on your current performance:\n\n**Your Best Areas:**\n• Downtown (85% of conversions)\n• University District (great morning traffic)\n• Business District (lunch rush goldmine)\n\n**Opportunity Areas:**\n• Suburb neighborhoods (less competition, cheaper clicks)\n• Near competitor locations (strategic!)\n• Within 15 miles of your store\n\n**Pro Tip:** I recommend creating separate ad groups for each area with location-specific messaging. Like \"Fresh Pastries Delivered to Downtown\" vs \"University Students - Coffee & Study Snacks\".\n\nWant me to set up location-based campaigns? 🎯";
    }
    
    if (input.includes('mobile') || input.includes('phone') || input.includes('app')) {
      return "Mobile optimization is crucial! 📱 78% of local searches happen on mobile, and your mobile traffic is growing!\n\n**Mobile-Friendly Improvements:**\n• **Click-to-call buttons** - Let hungry customers call you instantly\n• **Shorter headlines** - Mobile screens need punchy text\n• **Location extensions** - Show your address and directions\n• **Mobile-specific offers** - \"Order ahead on mobile - skip the line!\"\n\n**Quick Fix:** Your current ads could benefit from mobile-specific headlines like:\n📱 \"Tap to Order Fresh Pastries\"\n📞 \"Call Now - Ready in 15 Min\"\n🗺️ \"Find Us - 2 Blocks from Metro\"\n\nShall we optimize your mobile experience? 🚀";
    }

    if (input.includes('audience') || input.includes('customer') || input.includes('who')) {
      return "Let's find your perfect customers! 🎯 Based on your campaign data and industry insights:\n\n**Your Current Top Performers:**\n• Working professionals (25-45 years)\n• Parents planning events\n• Coffee lovers (morning rush)\n• Weekend brunch crowd\n\n**Untapped Opportunities:**\n• **Corporate catering** - Offices love fresh pastries for meetings\n• **Birthday party planners** - Custom cake market\n• **Health-conscious foodies** - Market your fresh, local ingredients\n• **Social media influencers** - Food bloggers in your area\n\n**Audience Expansion Tip:** Google's 'Similar Audiences' found people 43% more likely to convert. Want me to add these high-value audiences to your campaign?\n\nWhich audience interests you most? 🚀";
    }
    
    return "That's a great question! 🤔 I'm here to help you with anything related to your Google Ads campaign. I can assist with:\n\n• 💰 Reducing costs and improving ROI\n• ✏️ Writing compelling ad copy\n• 📊 Analyzing performance data\n• 🎯 Finding the right audience\n• 📍 Location targeting strategies\n• 📱 Mobile optimization\n• 🚀 Growing your business\n\nWhat specific challenge are you facing with your ads? I'm here to help make your campaigns more successful! 😊";
  };

  return (
    <Card className="h-[600px] rounded-2xl border-0 shadow-lg bg-white/90 backdrop-blur-sm flex flex-col">
      {/* Chat header */}
      <div className="p-6 border-b border-gray-200 rounded-t-2xl bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            AI
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Your AI Assistant</h3>
            <p className="text-sm text-gray-600">Always here to help optimize your campaigns</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`chat-bubble rounded-2xl p-4 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-12'
                    : 'bg-gray-100 text-gray-800 mr-12'
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
                <p className={`text-xs mt-2 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="chat-bubble rounded-2xl p-4 bg-gray-100 text-gray-800 mr-12">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Quick suggestions */}
      {messages.length <= 2 && (
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-600 mb-3">💡 Try asking about:</p>
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSendMessage(suggestion)}
                className="text-xs rounded-full border-gray-300 hover:border-blue-400 hover:bg-blue-50"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="p-6 border-t border-gray-200 rounded-b-2xl bg-gray-50">
        <div className="flex gap-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about your campaigns..."
            className="flex-1 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-400"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
          />
          <Button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isTyping}
            className="px-6 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl"
          >
            Send 🚀
          </Button>
        </div>
      </div>
    </Card>
  );
};
