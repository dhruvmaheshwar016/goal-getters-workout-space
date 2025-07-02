
import React, { useState } from 'react';
import { Target, Plus, Calendar, TrendingUp } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const goals = [
  {
    id: 1,
    title: 'Lose 10 pounds',
    current: 7,
    target: 10,
    unit: 'lbs',
    deadline: '2024-08-15',
    category: 'Weight Loss',
    color: '#10B981'
  },
  {
    id: 2,
    title: 'Workout 5 times per week',
    current: 4,
    target: 5,
    unit: 'workouts',
    deadline: '2024-07-31',
    category: 'Consistency',
    color: '#3B82F6'
  },
  {
    id: 3,
    title: 'Run 50 miles this month',
    current: 32,
    target: 50,
    unit: 'miles',
    deadline: '2024-07-31',
    category: 'Cardio',
    color: '#F59E0B'
  },
  {
    id: 4,
    title: 'Bench press 200 lbs',
    current: 180,
    target: 200,
    unit: 'lbs',
    deadline: '2024-09-01',
    category: 'Strength',
    color: '#EF4444'
  }
];

const Goals = () => {
  const [showNewGoal, setShowNewGoal] = useState(false);

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Fitness Goals</h1>
            <p className="text-gray-600">Set, track, and achieve your fitness milestones</p>
          </div>
          <button 
            onClick={() => setShowNewGoal(true)}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>New Goal</span>
          </button>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {goals.map((goal) => {
            const progress = getProgressPercentage(goal.current, goal.target);
            const daysRemaining = getDaysRemaining(goal.deadline);
            
            return (
              <div key={goal.id} className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                        {goal.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{goal.title}</h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {goal.current} / {goal.target} {goal.unit}
                    </p>
                  </div>
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={progress}
                      text={`${Math.round(progress)}%`}
                      styles={buildStyles({
                        textSize: '24px',
                        pathColor: goal.color,
                        textColor: goal.color,
                        trailColor: '#E5E7EB',
                      })}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      {daysRemaining > 0 ? `${daysRemaining} days remaining` : 'Deadline passed'}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      {goal.target - goal.current} {goal.unit} to go
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                      Update Progress
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Goal Categories */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Popular Goal Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Weight Loss', icon: Target, color: 'from-red-500 to-pink-500' },
              { name: 'Muscle Gain', icon: TrendingUp, color: 'from-blue-500 to-purple-600' },
              { name: 'Endurance', icon: Activity, color: 'from-green-500 to-teal-600' },
              { name: 'Strength', icon: Target, color: 'from-orange-500 to-red-500' }
            ].map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <Icon className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">{category.name}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* New Goal Modal */}
        {showNewGoal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
              <h2 className="text-xl font-semibold mb-4">Create New Goal</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Goal Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Lose 10 pounds"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Value
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Unit
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="lbs"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Endurance</option>
                    <option>Strength</option>
                    <option>Consistency</option>
                  </select>
                </div>
                <div className="flex space-x-3 pt-4">
                  <button 
                    onClick={() => setShowNewGoal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => setShowNewGoal(false)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    Create Goal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Goals;
