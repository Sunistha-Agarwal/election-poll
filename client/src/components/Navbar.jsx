import { Button } from "@components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-3 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          VoteHub
        </div>

        
        <div className="flex items-center gap-3.5">
          <div className="hidden md:flex items-center gap-3.5">
            <a
              href="#home"
              className="text-foreground hover:text-[#3a001e] transition-colors font-medium"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-[#3a001e] transition-colors font-medium"
            >
              ABOUT
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-[#fff6f1]  rounded-full border-3 border-[#3a001e] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ">
              SIGN IN
            </Button>
            <Button variant="register" className="bg-transparent border-3 border-[#3a001e] hover:bg-[#3a001e] text-[#fff6f1] font-medium transition-all duration-300 ease-in-outshadow-lg hover:shadow-xl hover:scale-105 ">
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
