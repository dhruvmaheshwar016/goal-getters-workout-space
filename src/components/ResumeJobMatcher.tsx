
import React, { useState } from 'react';
import { Upload, FileText, Target, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface MatchResult {
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
  suggestions: string[];
}

const ResumeJobMatcher = () => {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeMatch = () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      alert('Please enter both resume and job description');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      const resumeWords = resumeText.toLowerCase().split(/\s+/);
      const jobWords = jobDescription.toLowerCase().split(/\s+/);
      
      // Common skills and keywords to look for
      const commonSkills = [
        'javascript', 'react', 'python', 'java', 'sql', 'html', 'css',
        'node.js', 'typescript', 'git', 'aws', 'docker', 'kubernetes',
        'mongodb', 'postgresql', 'agile', 'scrum', 'leadership', 'communication',
        'problem-solving', 'teamwork', 'project management'
      ];

      const jobSkills = jobWords.filter(word => commonSkills.includes(word));
      const resumeSkills = resumeWords.filter(word => commonSkills.includes(word));
      
      const matchedSkills = jobSkills.filter(skill => resumeSkills.includes(skill));
      const missingSkills = jobSkills.filter(skill => !resumeSkills.includes(skill));
      
      const score = jobSkills.length > 0 ? Math.round((matchedSkills.length / jobSkills.length) * 100) : 0;
      
      const suggestions = [
        'Consider adding more specific technical skills to your resume',
        'Highlight your experience with the missing technologies',
        'Include relevant certifications if you have them',
        'Use action verbs to describe your achievements'
      ];

      setMatchResult({
        score,
        matchedSkills: [...new Set(matchedSkills)],
        missingSkills: [...new Set(missingSkills)],
        suggestions
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resume & Job Matcher
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Analyze how well your resume matches a job description and get personalized suggestions for improvement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Resume Input */}
          <Card className="bg-white/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Your Resume</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="resume-upload">Upload Resume (Optional)</Label>
                  <Input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="resume-text">Or paste your resume text</Label>
                  <Textarea
                    id="resume-text"
                    placeholder="Paste your resume content here..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    rows={12}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Description Input */}
          <Card className="bg-white/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-green-600" />
                <span>Job Description</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="job-description">Paste the job description</Label>
                <Textarea
                  id="job-description"
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={15}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analyze Button */}
        <div className="text-center mb-8">
          <Button
            onClick={analyzeMatch}
            disabled={isAnalyzing}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Analyzing...
              </>
            ) : (
              'Analyze Match'
            )}
          </Button>
        </div>

        {/* Results */}
        {matchResult && (
          <div className="space-y-6">
            {/* Match Score */}
            <Card className="bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle>Match Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className={`text-6xl font-bold ${getScoreColor(matchResult.score)} mb-2`}>
                    {matchResult.score}%
                  </div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getScoreBgColor(matchResult.score)} ${getScoreColor(matchResult.score)}`}>
                    {matchResult.score >= 80 ? 'Excellent Match' : 
                     matchResult.score >= 60 ? 'Good Match' : 'Needs Improvement'}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Matched Skills */}
              <Card className="bg-white/80 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Matched Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {matchResult.matchedSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {matchResult.matchedSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No matching skills found</p>
                  )}
                </CardContent>
              </Card>

              {/* Missing Skills */}
              <Card className="bg-white/80 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <span>Missing Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {matchResult.missingSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {matchResult.missingSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No missing skills identified</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Suggestions */}
            <Card className="bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle>Improvement Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {matchResult.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeJobMatcher;
