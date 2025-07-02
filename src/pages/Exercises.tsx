import React, { useState } from 'react';
import { Search, Filter, Play, Clock, Target, Activity } from 'lucide-react';

const exercises = [
  {
    id: 1,
    name: 'Push-ups',
    category: 'Chest',
    difficulty: 'Beginner',
    duration: '10-15 mins',
    calories: '50-80',
    equipment: 'None',
    description: 'Classic bodyweight exercise targeting chest, shoulders, and triceps.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'Squats',
    category: 'Legs',
    difficulty: 'Beginner',
    duration: '10-20 mins',
    calories: '60-100',
    equipment: 'None',
    description: 'Fundamental lower body exercise targeting quads, glutes, and hamstrings.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  },
  {
    id: 3,
    name: 'Deadlifts',
    category: 'Back',
    difficulty: 'Intermediate',
    duration: '15-25 mins',
    calories: '80-120',
    equipment: 'Barbell',
    description: 'Compound movement working posterior chain muscles.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 4,
    name: 'Burpees',
    category: 'Cardio',
    difficulty: 'Advanced',
    duration: '5-15 mins',
    calories: '100-150',
    equipment: 'None',
    description: 'High-intensity full-body exercise combining strength and cardio.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 5,
    name: 'Plank',
    category: 'Core',
    difficulty: 'Beginner',
    duration: '5-10 mins',
    calories: '20-40',
    equipment: 'None',
    description: 'Isometric core exercise building stability and strength.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 6,
    name: 'Mountain Climbers',
    category: 'Cardio',
    difficulty: 'Intermediate',
    duration: '10-15 mins',
    calories: '80-120',
    equipment: 'None',
    description: 'Dynamic cardio exercise targeting core and cardiovascular system.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const categories = ['All', 'Chest', 'Legs', 'Back', 'Core', 'Cardio', 'Arms', 'Shoulders'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || exercise.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || exercise.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Exercise Library</h1>
          <p className="text-gray-600">Discover and learn new exercises to enhance your workouts</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-md"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 bg-white/80 backdrop-blur-md"
            >
              <Filter className="h-5 w-5 text-gray-400" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 border border-gray-200 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <div key={exercise.id} className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <Play className="h-12 w-12 text-white" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{exercise.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Target className="h-4 w-4 mr-2 text-purple-500" />
                    <span className="text-sm">{exercise.category}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-purple-500" />
                    <span className="text-sm">{exercise.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Activity className="h-4 w-4 mr-2 text-purple-500" />
                    <span className="text-sm">{exercise.calories} cal</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 text-sm">
                    Start Exercise
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No exercises found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
