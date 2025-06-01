
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AIChat } from '@/components/AIChat';
import { AdPreview } from '@/components/AdPreview';
import { Analytics } from '@/components/Analytics';
import { Badge } from '@/components/ui/badge';

interface DashboardProps {
  campaignData: any;
}

export const Dashboard = ({ campaignData }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 slide-up">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome back! 👋
              </h1>
              <p className="text-gray-600 text-lg">
                Your campaign for <span className="font-semibold text-blue-600">{campaignData?.businessName}</span> is ready to grow!
              </p>
            </div>
            <div className="flex gap-3">
              <Badge variant="secondary" className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
                ✅ Campaign Active
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                💰 ${campaignData?.budget || '500'}/month
              </Badge>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Chat and controls */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 h-12 rounded-xl bg-white border-2 border-gray-200">
                <TabsTrigger value="chat" className="rounded-lg">🤖 AI Assistant</TabsTrigger>
                <TabsTrigger value="preview" className="rounded-lg">👁️ Live Preview</TabsTrigger>
                <TabsTrigger value="analytics" className="rounded-lg">📊 Results</TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="space-y-0">
                <AIChat campaignData={campaignData} />
              </TabsContent>

              <TabsContent value="preview" className="space-y-0">
                <AdPreview campaignData={campaignData} />
              </TabsContent>

              <TabsContent value="analytics" className="space-y-0">
                <Analytics campaignData={campaignData} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column - Quick actions and stats */}
          <div className="space-y-6">
            {/* Quick stats */}
            <Card className="p-6 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Clicks Today</span>
                  <span className="font-bold text-blue-600">124</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Impressions</span>
                  <span className="font-bold text-purple-600">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cost Per Click</span>
                  <span className="font-bold text-green-600">$0.85</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversions</span>
                  <span className="font-bold text-orange-600">8</span>
                </div>
              </div>
            </Card>

            {/* Quick actions */}
            <Card className="p-6 rounded-2xl border-0 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start rounded-xl h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  🚀 Boost Budget by 20%
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl h-12 border-2">
                  ✏️ Edit Ad Text
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl h-12 border-2">
                  📍 Add New Locations
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl h-12 border-2">
                  📱 Create Mobile Ad
                </Button>
              </div>
            </Card>

            {/* AI suggestions */}
            <Card className="p-6 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 AI Suggestions</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded-xl border-l-4 border-yellow-400">
                  <p className="text-gray-700">Your click rate is 15% above average! Consider increasing your budget to reach more customers.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border-l-4 border-blue-400">
                  <p className="text-gray-700">Try adding "limited time offer" to your headlines - it could boost clicks by 12%.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
