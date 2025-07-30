import React from "react";

const SignIn = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(58, 0, 30, 0.4), rgba(48, 30, 28, 0.6)), url("https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo=")`,
      }}
    >
      <div className="bg-[#fff6f1] border-2 border-[#3a001e] text-[#3a001e] rounded-2xl shadow-lg w-full max-w-md p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center">Sign In</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Type your email"
              className="w-full mt-1 px-4 py-2 rounded-md border border-[#e0531f] focus:outline-none focus:ring-2 focus:ring-[#ff6c37] bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Type your password"
              className="w-full mt-1 px-4 py-2 rounded-md border border-[#e0531f] focus:outline-none focus:ring-2 focus:ring-[#ff6c37] bg-white"
            />
          </div>

          <div className="text-right text-sm">
            <a href="#" className="text-[#e0531f] hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#ff6c37] to-[#e0531f] hover:opacity-90 text-white hover:text-[#3a001e] py-2 rounded-full font-semibold transition duration-300">
          SIGN IN
        </button>

        {/* <div className="text-center text-sm text-[#3a001e]">Or Sign In Using</div> */}

        {/* <div className="flex justify-center gap-4"> */}
          {/* <button className="bg-white hover:bg-[#ff6c37]/20 transition p-2 rounded-full border border-[#ff6c37]"> */}
            {/* <img */}
              {/* src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" */}
              {/* alt="Google" */}
              {/* className="w-5 h-5" */}
            {/* /> */}
          {/* </button> */}
        {/* </div> */}

        <div className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-[#e0531f] hover:underline">
            REGISTER NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
