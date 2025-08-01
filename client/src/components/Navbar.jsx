import { Button } from "@components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogOut";


const Navbar = () => {
  const {user} = useAuth()

   const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-3 py-4 flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-bold text-primary">
          VoteHub
        </Link>

        
        <div className="flex items-center gap-3.5">
          <div className="hidden md:flex items-center gap-3.5">
            <NavLink
              to="/"
              className={({isActive}) => `text-foreground hover:text-[#3a001e] transition-colors font-medium ${isActive? "text-[#3a001e]":""}`}
            >
              HOME
            </NavLink>
            <a
              href="#about"
              className="text-foreground hover:text-[#3a001e] transition-colors font-medium"
            >
              ABOUT
            </a>
          </div>

          { user ?(
                 <Button onClick={handleLogout} variant="ghost" className="text-[#fff6f1]  rounded-full border-3 border-[#3a001e] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ">
              LOG OUT
            </Button>
          ):(
            <div className="flex items-center gap-3">
             <NavLink to="/signin">
              <Button  variant="ghost" className="text-[#fff6f1]  rounded-full border-3 border-[#3a001e] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ">
              SIGN IN
            </Button>
            </NavLink>
            <NavLink to="/register">
              <Button variant="register" className="bg-transparent border-3 border-[#3a001e] hover:bg-[#3a001e] text-[#fff6f1] font-medium transition-all duration-300 ease-in-outshadow-lg hover:shadow-xl hover:scale-105 ">
              REGISTER
            </Button>
            </NavLink>
          </div>
          )}
        </div>
      </div>
    </nav>
    </>
    
  );
};

export default Navbar;
