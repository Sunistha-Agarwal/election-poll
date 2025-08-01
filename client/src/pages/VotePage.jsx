import React, { useState, useEffect } from 'react';
import useFetchCandidates from '../hooks/useFetchCandidates'
import axios from 'axios';
import { useAuth } from '../hooks/useAuthContext';


const VotePage = () => {
  const { candidates, loading, error } = useFetchCandidates();
  const {user}= useAuth()
  const token=user?.token;
  const userId = user?._id;

  const handleVote = async(candidateId) => {
    try {
      const response = await axios.post(
      '/castYourVote',
      { votedBy: userId,
        votedTo: candidateId
       },
      {
        headers: {
        Authorization: `Bearer ${token}`,
        },
      }
      );
      // handle success (optional)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    // Implement your voting logic here, e.g., send vote to backend
    console.log('Voted for candidate:', candidateId);
  };

  const handleSubmitVote = (e) => {
    e.preventDefault();
    
  };

  return (
    <div
      className="text-[#3a001e] min-h-screen pt-28 px-6 pb-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(58, 0, 30, 0.4), rgba(48, 30, 28, 0.6)), url("https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo=")`
      }}
    >
      <div className="w-full max-w-2xl mx-auto bg-[#3a001e]/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 border border-orange-500/70 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-500">CAST YOUR VOTE</h1>
          <p className="mt-1 text-gray-200 text-sm">Select your preferred candidate.</p>
        </div>

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
                    onClick={() => handleVote(candidate._id)}
                  >
                    Vote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default VotePage;
