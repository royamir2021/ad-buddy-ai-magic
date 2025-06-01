
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface AdPreviewProps {
  campaignData: any;
}

export const AdPreview = ({ campaignData }: AdPreviewProps) => {
  const [adData, setAdData] = useState({
    headline1: `Fresh ${campaignData?.productService || 'Baked Goods'} Daily`,
    headline2: `Order Online - Ready in 15 Min`,
    description: `Delicious ${campaignData?.productService || 'pastries and coffee'} made fresh daily. Located in ${campaignData?.location || 'your area'}. Order now for pickup or delivery!`,
    url: `${campaignData?.businessName?.toLowerCase()?.replace(/\s+/g, '') || 'yourbusiness'}.com`,
    displayUrl: `${campaignData?.businessName?.toLowerCase()?.replace(/\s+/g, '') || 'yourbusiness'}.com/order-now`
  });

  const updateAdData = (field: string, value: string) => {
    setAdData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Live preview */}
      <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">🔍 Live Ad Preview</h3>
          <Badge className="bg-green-100 text-green-700 rounded-full">
            ✨ Updating in real-time
          </Badge>
        </div>

        {/* Google Search Result Preview */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
              <span className="text-sm text-gray-600">Google Search Results</span>
            </div>
            
            {/* Search bar mockup */}
            <div className="bg-white rounded-full p-3 border border-gray-300 mb-6 max-w-md">
              <span className="text-gray-600">🔍 {campaignData?.productService || 'fresh bakery near me'}</span>
            </div>
          </div>

          {/* Ad preview */}
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
                Ad
              </Badge>
              <span className="text-xs text-gray-500">{adData.displayUrl}</span>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-lg text-blue-600 hover:underline cursor-pointer font-medium leading-tight">
                {adData.headline1} | {adData.headline2}
              </h4>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                {adData.description}
              </p>
              
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  📍 {campaignData?.location || 'Your location'}
                </span>
                <span className="flex items-center gap-1">
                  ⭐ 4.8 (127 reviews)
                </span>
                <span className="flex items-center gap-1">
                  📞 Call now
                </span>
              </div>
            </div>
          </div>

          {/* Performance indicators */}
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-700 font-medium">📊 Predicted Performance:</span>
              <div className="flex gap-4">
                <span className="text-green-600">CTR: 8.5%</span>
                <span className="text-green-600">Quality Score: 8/10</span>
                <span className="text-green-600">CPC: $0.85</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Ad editor */}
      <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">✏️ Edit Your Ad</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="headline1" className="text-base font-medium">Headline 1 *</Label>
              <Input
                id="headline1"
                value={adData.headline1}
                onChange={(e) => updateAdData('headline1', e.target.value)}
                className="mt-2 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-400"
                maxLength={30}
              />
              <p className="text-xs text-gray-500 mt-1">{adData.headline1.length}/30 characters</p>
            </div>
            
            <div>
              <Label htmlFor="headline2" className="text-base font-medium">Headline 2</Label>
              <Input
                id="headline2"
                value={adData.headline2}
                onChange={(e) => updateAdData('headline2', e.target.value)}
                className="mt-2 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-400"
                maxLength={30}
              />
              <p className="text-xs text-gray-500 mt-1">{adData.headline2.length}/30 characters</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="description" className="text-base font-medium">Description *</Label>
              <Textarea
                id="description"
                value={adData.description}
                onChange={(e) => updateAdData('description', e.target.value)}
                className="mt-2 rounded-xl border-2 border-gray-200 focus:border-blue-400"
                rows={4}
                maxLength={90}
              />
              <p className="text-xs text-gray-500 mt-1">{adData.description.length}/90 characters</p>
            </div>
            
            <div>
              <Label htmlFor="url" className="text-base font-medium">Final URL</Label>
              <Input
                id="url"
                value={adData.url}
                onChange={(e) => updateAdData('url', e.target.value)}
                className="mt-2 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Quick suggestions */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-3">💡 AI Writing Tips</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <p className="text-blue-700">
                <strong>Power Words:</strong> Fresh, Quality, Fast, Local, Custom
              </p>
              <p className="text-blue-700">
                <strong>Action Words:</strong> Order, Call, Visit, Try, Discover
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-blue-700">
                <strong>Urgency:</strong> Today, Now, Limited Time, Same Day
              </p>
              <p className="text-blue-700">
                <strong>Benefits:</strong> Free Delivery, Ready in 15 Min, Fresh Daily
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          <Button className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl">
            💾 Save Changes
          </Button>
          <Button variant="outline" className="px-6 h-12 rounded-xl border-2">
            🧪 A/B Test This Ad
          </Button>
          <Button variant="outline" className="px-6 h-12 rounded-xl border-2">
            📋 Copy Ad Text
          </Button>
        </div>
      </Card>
    </div>
  );
};
