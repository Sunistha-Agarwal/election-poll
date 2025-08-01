import { Button } from "@components/ui/button";
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(58, 0, 30, 0.4), rgba(48, 30, 28, 0.6)), url("https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo=")`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white hero-pop">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce-in">
          Your Voice Matters
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Join the movement to shape our future. Exercise your democratic right and
          make your voice heard in the decisions that matter most to our community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NavLink to='/castyourvote'>
            <Button
            size="lg"
            className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            CAST YOUR VOTE NOW
          </Button>
          </NavLink>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-secondary hover:text-accent px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            REGISTER NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
