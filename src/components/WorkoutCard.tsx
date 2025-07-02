
import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface WorkoutCardProps {
  name: string;
  duration: string;
  date: string;
  exercises: number;
  calories: number;
}

const WorkoutCard = ({ name, duration, date, exercises, calories }: WorkoutCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {calories} cal
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <p className="text-sm text-gray-600">{exercises} exercises</p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
