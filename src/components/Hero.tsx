
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-primary-light overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-transparent" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary font-inter">
            Expert Property Documentation Services
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            Securing Your Property
            <br />
            <span className="text-gold">With Legal Expertise</span>
          </h1>
          
          <p className="text-text-light text-lg md:text-xl mb-8 font-inter max-w-2xl mx-auto">
            Specializing in property registry, deed of mortgage, and reconveyance documentation.
            Professional guidance through every step of your property documentation journey.
          </p>
          
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all transform hover:scale-105 font-inter"
          >
            Start Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
