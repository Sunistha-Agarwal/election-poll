import React, { useState } from 'react';

const CandidateCard = ({ candidate, onRemove }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-[#ff6c37] gap-4">
    <div className="flex items-center gap-4">
      <img src={candidate.imageUrl} alt={candidate.name} className="w-16 h-16 rounded-full object-cover border-2 border-pink-300/50" />
      <div>
        <h3 className="text-xl font-bold text-white">{candidate.name}</h3>
        <p className="text-sm text-gray-300">{candidate.description}</p>
        <p className="text-xs text-gray-400 mt-1">Experience: {candidate.experience}</p>
        <p className="text-sm text-pink-200 italic mt-2">"{candidate.motto}"</p>
      </div>
    </div>
    <button
      onClick={() => onRemove(candidate.id)}
      className="bg-red-600 text-white px-4 py-2 w-full sm:w-auto rounded-lg hover:bg-red-700 transition-colors duration-300 flex-shrink-0"
    >
      Remove
    </button>
  </div>
);

const AdminDashboard = () => {
  const initialCandidates = [
    {
      id: 1,
      name: 'Ananya Verma',
      description: 'Urban planner advocating smart cities and green innovation.',
      experience: 'Co-founder of EcoFuture India, urban sustainability researcher.',
      motto: 'Smart Cities, Smart Future',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Rahul Iyer',
      description: 'Youth leader promoting education access and skill training.',
      experience: 'Founded LearnUp, a rural education startup.',
      motto: 'Empower Through Education',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Meera Joshi',
      description: 'Social worker focused on gender equality and legal aid.',
      experience: 'Legal advisor at India Youth Rights Forum.',
      motto: 'Justice for Every Voice',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    },
  ];

  const [candidates, setCandidates] = useState(initialCandidates);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: '',
    description: '',
    experience: '',
    motto: '',
    imageUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCandidate = (e) => {
    e.preventDefault();
    if (newCandidate.name && newCandidate.description) {
      const candidateToAdd = {
        id: Date.now(),
        ...newCandidate,
        imageUrl: newCandidate.imageUrl || `https://api.dicebear.com/8.x/initials/svg?seed=${newCandidate.name}`
      };
      setCandidates([...candidates, candidateToAdd]);
      setNewCandidate({ name: '', description: '', experience: '', motto: '', imageUrl: '' });
      setIsFormVisible(false);
    }
  };

  const handleRemoveCandidate = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
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
              {candidates.length > 0 ? (
                candidates.map((candidate) => (
                  <CandidateCard key={candidate.id} candidate={candidate} onRemove={handleRemoveCandidate} />
                ))
              ) : (
                <p className="text-center text-gray-300 p-6">No candidates found. Please add one.</p>
              )}
            </div>
          </div>

          <hr className="border-[#ff6c37]/60 my-8"/>
          
          {!isFormVisible ? (
            <div className="text-center">
              <button
                onClick={() => setIsFormVisible(true)}
                className="bg-[#ff7c2b] text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-lg"
              >
                Add New Candidate
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-orange-300 mb-4">Add New Candidate</h2>
              <form onSubmit={handleAddCandidate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={newCandidate.name} onChange={handleInputChange} placeholder="Full Name" required className="col-span-1 md:col-span-2 bg-black/30 text-white p-3 rounded-lg border border-transparent focus:border-orange-400 focus:ring-0 outline-none" />
                <input type="text" name="description" value={newCandidate.description} onChange={handleInputChange} placeholder="Short Description / Bio" required className="col-span-1 md:col-span-2 bg-black/30 text-white p-3 rounded-lg border border-transparent focus:border-orange-400 focus:ring-0 outline-none" />
                <input type="text" name="experience" value={newCandidate.experience} onChange={handleInputChange} placeholder="Experience Details" className="col-span-1 md:col-span-2 bg-black/30 text-white p-3 rounded-lg border border-transparent focus:border-orange-400 focus:ring-0 outline-none" />
                <input type="text" name="motto" value={newCandidate.motto} onChange={handleInputChange} placeholder="Motto (e.g., 'Change for the better')" className="col-span-1 md:col-span-2 bg-black/30 text-white p-3 rounded-lg border border-transparent focus:border-orange-400 focus:ring-0 outline-none" />
                <input type="text" name="imageUrl" value={newCandidate.imageUrl} onChange={handleInputChange} placeholder="Image URL (Optional)" className="col-span-1 md:col-span-2 bg-black/30 text-white p-3 rounded-lg border border-transparent focus:border-orange-400 focus:ring-0 outline-none" />
                
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 mt-2">
                    <button type="button" onClick={() => setIsFormVisible(false)} className="w-full bg-gray-600 text-white font-bold p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                        Cancel
                    </button>
                    <button type="submit" className="w-full bg-green-600 text-white font-bold p-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                        Confirm & Add Candidate
                    </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
