import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
   <section
  id="about"
  ref={sectionRef}
  role="region"
  aria-labelledby="about-heading"
  className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat py-20"
  style={{
    backgroundImage: `linear-gradient(rgba(255,108,55,0.35), rgba(224,83,31,0.45)), url("https://www.pewresearch.org/wp-content/uploads/sites/20/2022/10/polling-mini-course_featured.png")`,
    backgroundColor: "#E0531F",
  }}
>
  <div
    className={`container mx-auto px-6 text-center text-white transition-opacity duration-1000 ease-in-out transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`}
  >
    <h2
      id="about-heading"
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      Democracy in Action
    </h2>

    <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
      We believe that every citizen deserves a platform to participate in the democratic process. Our secure, transparent voting system ensures that your voice is heard and your vote counts. Join thousands of engaged citizens who are already making a difference in their communities through informed participation and civic engagement.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {["Secure", "Transparent", "Accessible"].map((title, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-500 ease-in-out hover:-translate-y-2"
        >
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p>
            {title === "Secure" &&
              "State‑of‑the‑art encryption and security measures protect your vote."}
            {title === "Transparent" &&
              "Full transparency in the voting process with real‑time results."}
            {title === "Accessible" &&
              "Easy‑to‑use platform accessible to all eligible voters."}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default AboutSection;
