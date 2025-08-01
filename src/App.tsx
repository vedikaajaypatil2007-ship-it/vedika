import React, { useState } from 'react';
import { User, Clock, CheckCircle, LogOut, Menu } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'exam'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b-2 border-gray-300 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-400 rounded"></div>
            <h1 className="text-xl font-bold text-gray-800">SAFE EXAMINER</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border-2 border-gray-400 text-gray-700 bg-white hover:bg-gray-100">
              LOGIN
            </button>
            <button className="px-4 py-2 border-2 border-gray-400 text-gray-700 bg-gray-200 hover:bg-gray-300">
              <LogOut className="w-4 h-4 inline mr-2" />
              LOGOUT
            </button>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar - User Info */}
        <aside className="w-64 bg-white border-r-2 border-gray-300 p-6">
          <div className="space-y-6">
            {/* User Profile Section */}
            <div className="border-2 border-gray-400 p-4">
              <h3 className="font-bold text-gray-800 mb-4">USER INFO</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="w-32 h-4 bg-gray-300"></div>
                    <div className="w-24 h-3 bg-gray-200 mt-1"></div>
                  </div>
                </div>
                <div className="w-full h-16 bg-gray-200 border border-gray-400"></div>
                <div className="text-sm text-gray-600">
                  <div className="w-20 h-3 bg-gray-300 mb-1"></div>
                  <div className="w-28 h-3 bg-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="border-2 border-gray-400 p-4">
              <h3 className="font-bold text-gray-800 mb-4">NAVIGATION</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className={`w-full text-left px-3 py-2 border ${currentView === 'dashboard' ? 'bg-gray-300 border-gray-500' : 'bg-white border-gray-400'}`}
                >
                  DASHBOARD
                </button>
                <button 
                  onClick={() => setCurrentView('exam')}
                  className={`w-full text-left px-3 py-2 border ${currentView === 'exam' ? 'bg-gray-300 border-gray-500' : 'bg-white border-gray-400'}`}
                >
                  EXAM VIEW
                </button>
              </div>
            </div>

            {/* Status Section */}
            <div className="border-2 border-gray-400 p-4">
              <h3 className="font-bold text-gray-800 mb-4">STATUS</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm">ONLINE</span>
                </div>
                <div className="w-full h-4 bg-gray-200"></div>
                <div className="w-3/4 h-4 bg-gray-200"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {currentView === 'dashboard' ? (
            /* Dashboard View */
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">DASHBOARD</h2>
                <div className="w-32 h-8 bg-gray-300 border border-gray-400"></div>
              </div>

              {/* Exam List Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((exam) => (
                  <div key={exam} className="border-2 border-gray-400 bg-white p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="w-32 h-6 bg-gray-400"></div>
                        <div className="w-16 h-4 bg-gray-300"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-4 bg-gray-200"></div>
                        <div className="w-3/4 h-4 bg-gray-200"></div>
                        <div className="w-1/2 h-4 bg-gray-200"></div>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <div className="w-16 h-4 bg-gray-300"></div>
                        </div>
                        <button className="px-6 py-2 bg-gray-700 text-white border-2 border-gray-700 hover:bg-gray-800">
                          START EXAM
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8">
                <div className="border-2 border-gray-400 bg-white p-4 text-center">
                  <div className="w-8 h-8 bg-gray-400 mx-auto mb-2"></div>
                  <div className="w-16 h-4 bg-gray-300 mx-auto mb-1"></div>
                  <div className="w-12 h-3 bg-gray-200 mx-auto"></div>
                </div>
                <div className="border-2 border-gray-400 bg-white p-4 text-center">
                  <div className="w-8 h-8 bg-gray-400 mx-auto mb-2"></div>
                  <div className="w-16 h-4 bg-gray-300 mx-auto mb-1"></div>
                  <div className="w-12 h-3 bg-gray-200 mx-auto"></div>
                </div>
                <div className="border-2 border-gray-400 bg-white p-4 text-center">
                  <div className="w-8 h-8 bg-gray-400 mx-auto mb-2"></div>
                  <div className="w-16 h-4 bg-gray-300 mx-auto mb-1"></div>
                  <div className="w-12 h-3 bg-gray-200 mx-auto"></div>
                </div>
                <div className="border-2 border-gray-400 bg-white p-4 text-center">
                  <div className="w-8 h-8 bg-gray-400 mx-auto mb-2"></div>
                  <div className="w-16 h-4 bg-gray-300 mx-auto mb-1"></div>
                  <div className="w-12 h-3 bg-gray-200 mx-auto"></div>
                </div>
              </div>
            </div>
          ) : (
            /* Exam Taking View */
            <div className="space-y-6">
              {/* Timer Bar */}
              <div className="bg-white border-2 border-gray-400 p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">EXAM: MATHEMATICS FINAL</h2>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="text-lg font-bold text-gray-800">45:32</span>
                    <div className="w-32 h-4 bg-gray-200 border border-gray-400">
                      <div className="w-3/4 h-full bg-gray-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question Progress */}
              <div className="bg-white border-2 border-gray-400 p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800">QUESTION 5 OF 20</span>
                  <div className="flex space-x-1">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-6 h-6 border border-gray-400 ${
                          i < 4 ? 'bg-gray-500' : i === 4 ? 'bg-gray-300' : 'bg-white'
                        }`}
                      >
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Question Display Area */}
              <div className="bg-white border-2 border-gray-400 p-8">
                <div className="space-y-6">
                  <div className="border-b-2 border-gray-300 pb-4">
                    <h3 className="font-bold text-gray-800 mb-4">QUESTION 5</h3>
                    <div className="space-y-3">
                      <div className="w-full h-6 bg-gray-300"></div>
                      <div className="w-5/6 h-6 bg-gray-300"></div>
                      <div className="w-3/4 h-6 bg-gray-300"></div>
                      <div className="w-4/5 h-6 bg-gray-300"></div>
                    </div>
                  </div>

                  {/* Multiple Choice Options */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800">SELECT YOUR ANSWER:</h4>
                    {['A', 'B', 'C', 'D'].map((option) => (
                      <label key={option} className="flex items-center space-x-4 p-4 border-2 border-gray-400 hover:bg-gray-100 cursor-pointer">
                        <input type="radio" name="answer" className="w-5 h-5" />
                        <span className="font-bold text-gray-800">{option}.</span>
                        <div className="flex-1 space-y-2">
                          <div className="w-3/4 h-4 bg-gray-300"></div>
                          <div className="w-1/2 h-4 bg-gray-200"></div>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between pt-6 border-t-2 border-gray-300">
                    <button className="px-6 py-3 border-2 border-gray-400 text-gray-700 bg-white hover:bg-gray-100">
                      PREVIOUS
                    </button>
                    <div className="space-x-4">
                      <button className="px-6 py-3 border-2 border-gray-400 text-gray-700 bg-gray-200 hover:bg-gray-300">
                        MARK FOR REVIEW
                      </button>
                      <button className="px-6 py-3 border-2 border-gray-400 text-gray-700 bg-white hover:bg-gray-100">
                        NEXT
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="bg-white border-2 border-gray-400 p-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="w-48 h-4 bg-gray-300"></div>
                    <div className="w-36 h-4 bg-gray-200"></div>
                  </div>
                  <button className="px-8 py-3 bg-gray-700 text-white border-2 border-gray-700 hover:bg-gray-800 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>SUBMIT EXAM</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;