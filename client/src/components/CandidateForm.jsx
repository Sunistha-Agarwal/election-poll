import React from "react";

const CandidateForm = () => {

  

  return (
   <div
  className="text-[#3a001e] min-h-screen pt-28 px-6 pb-12 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(rgba(58, 0, 30, 0.4), rgba(48, 30, 28, 0.6)), url("https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo=")`
  }}>

  
      <div className="text-center mb-10">
        <h2 className="text-4xl font-serif font-stretch-100% bg-[#ff6c37] border-2 border-[#3a001e] text-[#fff6f1] inline-block px-8 py-4 rounded-lg shadow-2xl">
          CANDIDATE'S FORM
        </h2>
      </div>

      <form className="max-w-3xl mx-auto bg-[#3a001e] border border-amber-100 text-[#fff6f1]  p-8 rounded-2xl shadow-lg">
        <div className="mb-7">
          <label className="block mb-2 font-bold  ">Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full p-2 rounded bg-[#fff6f1] text-[#3a001e] border border-[#e0531f]"
          />
        </div>

        <div className="mb-7">
          <label className="block mb-2 font-bold">Description</label>
          <textarea
            placeholder="Brief description"
            className="w-full p-2 rounded bg-[#fff6f1] text-[#3a001e] border border-[#e0531f]"
          />
        </div>

        <div className="mb-7">
          <label className="block mb-2 font-bold ">Work Experience</label>
          <textarea
            placeholder="Your past roles or leadership experience"
            className="w-full p-2 rounded bg-[#fff6f1] text-[#3a001e] border border-[#e0531f]"
          />
        </div>

        <div className="mb-7">
          <label className="block mb-2 font-bold ">Slogan (if any)</label>
          <input
            type="text"
            placeholder="Optional campaign slogan"
            className="w-full p-2 rounded bg-[#fff6f1] text-[#3a001e] border border-[#e0531f]"
          />
        </div>

        <div className="mb-8">
          <label className="block mb-2 font-bold">Photo</label>
          <input
            type="file"
            className="w-full p-2 rounded bg-white border border-[#e0531f]"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-[#ff6c37] text-white px-6 py-2 rounded hover:bg-[#e0531f] hover:text-[#3a001e] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateForm;