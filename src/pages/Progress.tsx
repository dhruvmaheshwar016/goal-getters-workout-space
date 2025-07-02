
import React, { useState } from 'react';
import { TrendingUp, Calendar, Activity, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const workoutData = [
  { month: 'Jan', workouts: 12, calories: 3200 },
  { month: 'Feb', workouts: 15, calories: 4100 },
  { month: 'Mar', workouts: 18, calories: 4800 },
  { month: 'Apr', workouts: 22, calories: 5500 },
  { month: 'May', workouts: 25, calories: 6200 },
  { month: 'Jun', workouts: 28, calories: 7100 },
];

const workoutTypes = [
  { name: 'Strength', value: 35, color: '#3B82F6' },
  { name: 'Cardio', value: 30, color: '#10B981' },
  { name: 'HIIT', value: 20, color: '#F59E0B' },
  { name: 'Yoga', value: 15, color: '#8B5CF6' },
];

const weeklyData = [
  { day: 'Mon', duration: 45 },
  { day: 'Tue', duration: 30 },
  { day: 'Wed', duration: 60 },
  { day: 'Thu', duration: 0 },
  { day: 'Fri', duration: 50 },
  { day: 'Sat', duration: 75 },
  { day: 'Sun', duration: 40 },
];

const Progress = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Progress Analytics</h1>
          <p className="text-gray-600">Track your fitness journey with detailed insights</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', name: 'Overview', icon: TrendingUp },
                { id: 'workouts', name: 'Workouts', icon: Activity },
                { id: 'goals', name: 'Goals', icon: Target },
                { id: 'calendar', name: 'Calendar', icon: Calendar },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Workouts</p>
                    <p className="text-2xl font-bold text-gray-900">142</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Calories Burned</p>
                    <p className="text-2xl font-bold text-gray-900">31,200</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Avg per Week</p>
                    <p className="text-2xl font-bold text-gray-900">4.2</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Goals Met</p>
                    <p className="text-2xl font-bold text-gray-900">8/10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Monthly Progress */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={workoutData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="workouts" stroke="#3B82F6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Workout Types */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Workout Types</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={workoutTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {workoutTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-4 mt-4">
                  {workoutTypes.map((type) => (
                    <div key={type.name} className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: type.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{type.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Activity */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week's Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="duration" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'workouts' && (
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Workout Analytics</h3>
            <p className="text-gray-600">Detailed workout statistics and trends will be displayed here.</p>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Goal Progress</h3>
            <p className="text-gray-600">Goal completion rates and progress tracking will be shown here.</p>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Calendar</h3>
            <p className="text-gray-600">Calendar view of your workout history and upcoming sessions.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
