
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsProps {
  campaignData: any;
}

export const Analytics = ({ campaignData }: AnalyticsProps) => {
  // Sample data for charts
  const performanceData = [
    { date: 'Mon', clicks: 24, impressions: 450, conversions: 3, cost: 18.50 },
    { date: 'Tue', clicks: 31, impressions: 580, conversions: 5, cost: 24.20 },
    { date: 'Wed', clicks: 28, impressions: 520, conversions: 4, cost: 21.80 },
    { date: 'Thu', clicks: 42, impressions: 720, conversions: 7, cost: 35.60 },
    { date: 'Fri', clicks: 38, impressions: 680, conversions: 6, cost: 29.40 },
    { date: 'Sat', clicks: 35, impressions: 610, conversions: 8, cost: 26.80 },
    { date: 'Sun', clicks: 29, impressions: 490, conversions: 4, cost: 22.10 }
  ];

  const audienceData = [
    { name: 'Ages 25-34', value: 35, color: '#3B82F6' },
    { name: 'Ages 35-44', value: 28, color: '#8B5CF6' },
    { name: 'Ages 45-54', value: 22, color: '#10B981' },
    { name: 'Ages 18-24', value: 10, color: '#F59E0B' },
    { name: 'Ages 55+', value: 5, color: '#EF4444' }
  ];

  const deviceData = [
    { name: 'Mon', mobile: 18, desktop: 6 },
    { name: 'Tue', mobile: 22, desktop: 9 },
    { name: 'Wed', mobile: 19, desktop: 9 },
    { name: 'Thu', mobile: 28, desktop: 14 },
    { name: 'Fri', mobile: 26, desktop: 12 },
    { name: 'Sat', mobile: 23, desktop: 12 },
    { name: 'Sun', mobile: 20, desktop: 9 }
  ];

  return (
    <div className="space-y-6">
      {/* Header stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="text-center">
            <div className="text-2xl mb-2">👆</div>
            <div className="text-2xl font-bold text-blue-600">227</div>
            <div className="text-sm text-blue-700 font-medium">Total Clicks</div>
            <div className="text-xs text-green-600 mt-1">↗️ +15% vs last week</div>
          </div>
        </Card>

        <Card className="p-4 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="text-center">
            <div className="text-2xl mb-2">👁️</div>
            <div className="text-2xl font-bold text-purple-600">4,050</div>
            <div className="text-sm text-purple-700 font-medium">Impressions</div>
            <div className="text-xs text-green-600 mt-1">↗️ +8% vs last week</div>
          </div>
        </Card>

        <Card className="p-4 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-green-600">37</div>
            <div className="text-sm text-green-700 font-medium">Conversions</div>
            <div className="text-xs text-green-600 mt-1">↗️ +23% vs last week</div>
          </div>
        </Card>

        <Card className="p-4 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="text-center">
            <div className="text-2xl mb-2">💰</div>
            <div className="text-2xl font-bold text-orange-600">$178</div>
            <div className="text-sm text-orange-700 font-medium">Total Spent</div>
            <div className="text-xs text-green-600 mt-1">↘️ -5% vs last week</div>
          </div>
        </Card>
      </div>

      {/* Performance over time */}
      <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">📈 Performance This Week</h3>
          <div className="flex gap-2">
            <Badge className="bg-blue-100 text-blue-700 rounded-full">Clicks</Badge>
            <Badge className="bg-green-100 text-green-700 rounded-full">Conversions</Badge>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '2px solid #e5e7eb', 
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            />
            <Area type="monotone" dataKey="clicks" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} strokeWidth={3} />
            <Area type="monotone" dataKey="conversions" stroke="#10B981" fill="#10B981" fillOpacity={0.2} strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Device performance and audience breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device performance */}
        <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">📱 Device Performance</h3>
          
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={deviceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '2px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
              <Bar dataKey="mobile" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="desktop" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Mobile (68%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Desktop (32%)</span>
            </div>
          </div>
        </Card>

        {/* Audience breakdown */}
        <Card className="p-6 rounded-2xl border-0 shadow-lg bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">👥 Audience Breakdown</h3>
          
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={audienceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {audienceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '2px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-2 gap-2 mt-4">
            {audienceData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className="text-sm font-medium text-gray-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* AI insights and recommendations */}
      <Card className="p-6 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">🧠 AI Insights & Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl border-l-4 border-green-400">
              <h4 className="font-semibold text-green-700 mb-2">🎉 Great Performance!</h4>
              <p className="text-sm text-gray-700">Your Thursday campaigns are crushing it! 🚀 Consider increasing budget on Thursdays by 30% to maximize results.</p>
              <Button size="sm" className="mt-3 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                Boost Thursday Budget
              </Button>
            </div>
            
            <div className="p-4 bg-white rounded-xl border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-700 mb-2">💡 Optimization Tip</h4>
              <p className="text-sm text-gray-700">Mobile users convert 40% better! Try creating mobile-specific ads with "tap to call" buttons.</p>
              <Button size="sm" variant="outline" className="mt-3 border-blue-400 text-blue-600 rounded-lg">
                Create Mobile Ad
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-700 mb-2">🎯 Audience Expansion</h4>
              <p className="text-sm text-gray-700">You're missing out on 25-34 age group! They have the highest conversion rate but lowest reach.</p>
              <Button size="sm" variant="outline" className="mt-3 border-purple-400 text-purple-600 rounded-lg">
                Expand Targeting
              </Button>
            </div>
            
            <div className="p-4 bg-white rounded-xl border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-700 mb-2">⏰ Timing Opportunity</h4>
              <p className="text-sm text-gray-700">Your ads perform 60% better between 11 AM - 2 PM. Consider scheduling budget shifts for lunch rush!</p>
              <Button size="sm" variant="outline" className="mt-3 border-orange-400 text-orange-600 rounded-lg">
                Adjust Schedule
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Export and actions */}
      <div className="flex flex-wrap gap-3">
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl px-6">
          📊 Export Full Report
        </Button>
        <Button variant="outline" className="rounded-xl border-2">
          📧 Email Weekly Summary
        </Button>
        <Button variant="outline" className="rounded-xl border-2">
          🔄 Set Auto-Optimizations
        </Button>
        <Button variant="outline" className="rounded-xl border-2">
          📱 Get Mobile App
        </Button>
      </div>
    </div>
  );
};
