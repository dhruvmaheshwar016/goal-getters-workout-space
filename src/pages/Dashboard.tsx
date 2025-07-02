
import React from 'react';
import { Activity, Target, Clock, Calendar } from 'lucide-react';
import StatCard from '../components/StatCard';
import WorkoutCard from '../components/WorkoutCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', workouts: 2 },
  { name: 'Tue', workouts: 1 },
  { name: 'Wed', workouts: 3 },
  { name: 'Thu', workouts: 2 },
  { name: 'Fri', workouts: 4 },
  { name: 'Sat', workouts: 1 },
  { name: 'Sun', workouts: 2 },
];

const recentWorkouts = [
  {
    name: 'Upper Body Strength',
    duration: '45 mins',
    date: 'Today',
    exercises: 8,
    calories: 320
  },
  {
    name: 'Cardio Blast',
    duration: '30 mins',
    date: 'Yesterday',
    exercises: 5,
    calories: 280
  },
  {
    name: 'Leg Day',
    duration: '50 mins',
    date: '2 days ago',
    exercises: 10,
    calories: 450
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Alex! 💪
          </h1>
          <p className="text-gray-600">
            You're doing great! Here's your fitness overview for today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Workouts This Week"
            value="12"
            change="+3 from last week"
            icon={Activity}
            gradient="bg-gradient-to-r from-blue-500 to-purple-600"
          />
          <StatCard
            title="Goals Completed"
            value="8/10"
            change="80% completion"
            icon={Target}
            gradient="bg-gradient-to-r from-green-500 to-teal-600"
          />
          <StatCard
            title="Total Workout Time"
            value="6.5h"
            change="+1.2h from last week"
            icon={Clock}
            gradient="bg-gradient-to-r from-orange-500 to-pink-500"
          />
          <StatCard
            title="Streak"
            value="15 days"
            change="Personal best!"
            icon={Calendar}
            gradient="bg-gradient-to-r from-purple-500 to-indigo-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Workouts */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Workouts</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentWorkouts.map((workout, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{workout.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {workout.duration} • {workout.exercises} exercises • {workout.calories} cal
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                        {workout.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Progress Chart */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Weekly Progress</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="workouts" 
                  stroke="url(#gradient)" 
                  strokeWidth={3}
                  dot={{ fill: '#8884d8', strokeWidth: 2 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Activity className="h-8 w-8 mb-2" />
            <h3 className="text-lg font-semibold">Start Workout</h3>
            <p className="text-blue-100 text-sm">Begin your training session</p>
          </button>
          
          <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Target className="h-8 w-8 mb-2" />
            <h3 className="text-lg font-semibold">Set New Goal</h3>
            <p className="text-green-100 text-sm">Challenge yourself today</p>
          </button>
          
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Clock className="h-8 w-8 mb-2" />
            <h3 className="text-lg font-semibold">Quick Timer</h3>
            <p className="text-orange-100 text-sm">Start a timed session</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
