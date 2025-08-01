import React, { useState, useEffect } from 'react';

const mockCandidates = [
  {
    id: 'candidate-1',
    name: 'Ananya Verma',
    description: 'Urban planner advocating smart cities and green innovation.',
    workExperience: 'Co-founder of EcoFuture India, urban sustainability researcher.',
    slogan: 'Smart Cities, Smart Future.',
    photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 'candidate-2',
    name: 'Rahul Iyer',
    description: 'Youth leader promoting education access and skill training.',
    workExperience: 'Founded LearnUp, a rural education startup.',
    slogan: 'Empower Through Education.',
    photoUrl: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    id: 'candidate-3',
    name: 'Meera Joshi',
    description: 'Social worker focused on gender equality and legal aid.',
    workExperience: 'Legal advisor at India Youth Rights Forum.',
    slogan: 'Justice for Every Voice.',
    photoUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
];

const ErrorMessage = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg text-sm" role="alert">
    <strong className="font-bold">Error:</strong> <span className="block sm:inline">{message}</span>
  </div>
);

const SuccessMessage = ({ message }) => (
  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg text-sm" role="alert">
    <strong className="font-bold">Success!</strong> <span className="block sm:inline">{message}</span>
  </div>
);

const VotePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteSuccess, setVoteSuccess] = useState(false);

  useEffect(() => {
    setCandidates(mockCandidates);
    const votedStatus = localStorage.getItem('user_has_voted');
    if (votedStatus === 'true') {
      setHasVoted(true);
    }
  }, []);

  const handleSelectCandidate = (candidateId) => {
    if (!hasVoted) {
      setSelectedCandidate(candidateId);
      setError(null);
    }
  };

  const handleSubmitVote = (e) => {
    e.preventDefault();
    if (!selectedCandidate) {
      setError("Please select a candidate before submitting.");
      return;
    }
    if (hasVoted) {
      setError("You have already cast your vote.");
      return;
    }

    setSubmitting(true);
    setError(null);

    setTimeout(() => {
      localStorage.setItem('user_has_voted', 'true');
      setHasVoted(true);
      setVoteSuccess(true);
      setSubmitting(false);
      setSelectedCandidate(null);
    }, 1500);
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

        {error && !voteSuccess && <ErrorMessage message={error} />}
        {voteSuccess && <SuccessMessage message="Your vote has been successfully recorded!" />}
        {hasVoted && !voteSuccess && <SuccessMessage message="You have already voted. Thank you!" />}

        <form onSubmit={handleSubmitVote}>
          <div className="space-y-4">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                onClick={() => handleSelectCandidate(candidate.id)}
                className={`
                  p-4 rounded-lg border transition-all duration-300 ease-in-out text-sm
                  flex flex-col sm:flex-row items-center gap-3
                  ${selectedCandidate === candidate.id ? 'border-orange-500 bg-[#4a1230]' : 'border-gray-700 bg-[#2c001b] hover:border-orange-500/70'}
                  ${hasVoted ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
                `}
              >
                <img
                  src={candidate.photoUrl}
                  alt={candidate.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/1f2937/f97316?text=${candidate.name.charAt(0)}`; }}
                />
                <div className="flex-grow text-center sm:text-left space-y-1">
                  <h2 className="text-lg font-semibold text-white">{candidate.name}</h2>
                  <p className="text-gray-300">{candidate.description}</p>
                  <p className="text-gray-400"><strong>Experience:</strong> {candidate.workExperience}</p>
                  <p className="italic text-orange-400">"{candidate.slogan}"</p>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition ${selectedCandidate === candidate.id ? 'border-orange-500 bg-orange-500' : 'border-gray-500'}`}>
                    {selectedCandidate === candidate.id && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!hasVoted && (
            <div className="mt-6">
              <button
                type="submit"
                disabled={submitting || !selectedCandidate}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                {submitting ? 'Submitting...' : 'Submit Vote'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default VotePage;
