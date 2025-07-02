
import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import WorkoutCard from '../components/WorkoutCard';

const workouts = [
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
  },
  {
    name: 'Core Crusher',
    duration: '25 mins',
    date: '3 days ago',
    exercises: 6,
    calories: 200
  },
  {
    name: 'Full Body HIIT',
    duration: '35 mins',
    date: '4 days ago',
    exercises: 12,
    calories: 380
  },
  {
    name: 'Yoga Flow',
    duration: '60 mins',
    date: '5 days ago',
    exercises: 15,
    calories: 250
  }
];

const Workouts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewWorkout, setShowNewWorkout] = useState(false);

  const filteredWorkouts = workouts.filter(workout =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Workouts</h1>
            <p className="text-gray-600">Track and manage your training sessions</p>
          </div>
          <button 
            onClick={() => setShowNewWorkout(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>New Workout</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search workouts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-md"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 bg-white/80 backdrop-blur-md">
            <Filter className="h-5 w-5 text-gray-400" />
            <span>Filter</span>
          </button>
        </div>

        {/* Workouts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout, index) => (
            <WorkoutCard key={index} {...workout} />
          ))}
        </div>

        {/* New Workout Modal */}
        {showNewWorkout && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
              <h2 className="text-xl font-semibold mb-4">Create New Workout</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Workout Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter workout name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Strength Training</option>
                    <option>Cardio</option>
                    <option>HIIT</option>
                    <option>Yoga</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex space-x-3 pt-4">
                  <button 
                    onClick={() => setShowNewWorkout(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => setShowNewWorkout(false)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    Create
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

export default Workouts;
