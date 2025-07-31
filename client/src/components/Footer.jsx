const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left ">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">VoteHub</h3>
            <p className="text-accent-foreground/80 mb-4 max-w-md">
              Empowering democracy through secure, transparent, and accessible voting
              solutions for the modern citizen.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start ">
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-[#ff6c37] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-[#ff6c37] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-accent-foreground/80 hover:text-[#ff6c37] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-accent-foreground/80 hover:text-[#ff6c37] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent-foreground/80 hover:text-[#ff6c37] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent-foreground/80 hover:text-[#ff6c37] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>support@votehub.com</li>
              <li>1-800-VOTE-HUB</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60">
            &copy; 2024 VoteHub. All rights reserved. Securing democracy, one vote at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;