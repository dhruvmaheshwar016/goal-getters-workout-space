
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResumeMatcherHome = () => {
  const features = [
    {
      icon: FileText,
      title: 'Resume Analysis',
      description: 'Upload or paste your resume for comprehensive analysis'
    },
    {
      icon: Target,
      title: 'Job Matching',
      description: 'Compare your resume against specific job descriptions'
    },
    {
      icon: TrendingUp,
      title: 'Match Score',
      description: 'Get a percentage score showing how well you match'
    },
    {
      icon: CheckCircle,
      title: 'Improvement Tips',
      description: 'Receive personalized suggestions to improve your resume'
    }
  ];

  const benefits = [
    'Identify missing skills and keywords',
    'Optimize your resume for ATS systems',
    'Get personalized improvement suggestions',
    'Track your progress over time',
    'Stand out from other candidates'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Resume & Job
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Matcher
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Maximize your job application success by analyzing how well your resume matches job descriptions. 
            Get actionable insights and improve your chances of landing interviews.
          </p>
          <Link to="/resume-matcher">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
              Start Analyzing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-md hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Use Resume Matcher?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                In today's competitive job market, having a resume that matches job requirements is crucial. 
                Our tool helps you optimize your resume for better results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Match Score</span>
                  <span className="text-2xl font-bold text-green-600">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Matched Skills</span>
                    <span className="font-medium">13/15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Missing Skills</span>
                    <span className="font-medium text-red-600">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Resume?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start analyzing your resume today and increase your chances of getting hired.
          </p>
          <Link to="/resume-matcher">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeMatcherHome;
