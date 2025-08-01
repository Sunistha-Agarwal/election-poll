import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {

  const handleAddCandidate = (e) => {
    e.preventDefault();
   console.log('candidate form opened')
  };

  const handleRemoveCandidate = (id) => {
    console.log('removed succesfully')
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(58, 0, 30, 0.7), rgba(48, 30, 28, 0.8)), url("https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo=")`,
  };

  return (
    <div
      className="text-[#e0531f] min-h-screen pt-20 sm:pt-28 px-4 sm:px-6 pb-12 bg-cover bg-center bg-no-repeat"
      style={backgroundStyle}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#301e1c]/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#ff6c37]">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Admin Dashboard</h1>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-orange-300 mb-4">Manage Candidates</h2>
            <div className="bg-black/20 rounded-lg">
              
              <form >
          <div className="space-y-4">
            {candidates.map((candidate) => (
              <div
                key={candidate._id}
                className="flex items-center gap-5 p-5 rounded-xl border border-orange-500/40 bg-[#2a0012]/80 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ position: 'relative' }}
              >
                <img
                  src={candidate.photoUrl}
                  alt={candidate.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-orange-500 shadow"
                />
                <div className="flex flex-col flex-grow relative">
                  <h2 className="text-xl font-bold text-orange-400">{candidate.name}</h2>
                  <p className="text-gray-200 mt-1">{candidate.pitch}</p>
                  <p className="text-gray-400 text-sm mt-2"><strong>Experience:</strong> {candidate.workExp}</p>
                  <p className="italic text-orange-300 mt-2">"{candidate.slogan}"</p>
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 mb-2 mr-2 px-3 py-1 text-sm bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded shadow transition"
                    onClick={() => handleRemoveCandidate(candidate._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </form>

            </div>
          </div>

          <hr className="border-[#ff6c37]/60 my-8"/>
          
            <div className="text-center">
              <NavLink to='/candidatepage'>
                <button
                onClick={handleAddCandidate}
                className="bg-[#ff7c2b] text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-lg"
              >
                Add New Candidate
              </button>
              </NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
