import { useState } from 'react'

import './App.css'

function App() {




  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="px-8 py-10">
          
          <div className='mb-8 flex items-center justify-center'>
            <img
              src="https://i.ibb.co/6SKwHvH/SEHACKKKKK.png"
              alt="Hackathon Banner"
              className='w-full max-w-[1000px] rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300'
            />
          </div>

          
          <div className='text-center mb-10'>
            <h2 className='text-transparent bg-clip-text font-bold text-4xl bg-gradient-to-r from-pink-500 to-purple-600'>
              Team Leader Registration
            </h2>
            <p className='text-gray-400 mt-2'>Complete your hackathon registration details</p>
          </div>

          <form className="space-y-6">
           
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-pink-300 mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-pink-300 mb-2 text-sm">Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your team name"
                />
              </div>
            </div>

            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-pink-300 mb-2 text-sm">UID</label>
                <input
                  type="text"
                  name="uid"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your UID"
                />
              </div>
              <div>
                <label className="block text-pink-300 mb-2 text-sm">Branch</label>
                <input
                  type="text"
                  name="branch"
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your branch"
                />
              </div>
            </div>

            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-pink-300 mb-2 text-sm">Food Preference</label>
                <select
                  name="foodPreference"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  <option value="">Select Food Preference</option>
                  <option value="Veg">Veg</option>
                  <option value="Jain">Jain</option>
                </select>
              </div>
              <div>
                <label className="block text-pink-300 mb-2 text-sm">Hackathon T-Shirt </label>
                <select
                  name="trackInterest"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  
                </select>
              </div>
            </div>

            <div>
                <label className="block text-pink-300 mb-2 text-sm">Domain</label>
                <select
                  name="trackInterest"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  <option value="">Select a Track</option>
                  <option value="web">Web Development</option>
                  <option value="ai">AI & Machine Learning</option>
                </select>
              </div>

            
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-xl 
            hover:from-pink-700 hover:to-purple-800 transition duration-300 ease-in-out 
            transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl"
              >
                Register for Hackathon
              </button>
            </div>
          </form>

          
          <div className="text-center mt-6 text-gray-400 text-sm">
            Already registered?
            <a href="#" className="text-pink-500 hover:text-pink-400 ml-2 transition duration-300">
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
