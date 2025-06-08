
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="matrix-text animate-pulse-glow">Cyber</span>
              <span className="text-foreground">Security</span>
              <br />
              <span className="text-foreground">& Tech</span> 
              <span className="glow-text"> Insights</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Exploring the latest in cybersecurity, ethical hacking, and technology. 
              Knowledge sharing to build a more secure digital world.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Penetration Testing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Vulnerability Research</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Security Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <span>Digital Forensics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-32 bg-gradient-to-b from-primary/20 to-transparent animate-matrix-rain"></div>
        <div className="absolute top-40 right-20 w-1 h-24 bg-gradient-to-b from-primary/15 to-transparent animate-matrix-rain" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-20 bg-gradient-to-b from-primary/10 to-transparent animate-matrix-rain" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-1/3 w-1 h-28 bg-gradient-to-b from-primary/25 to-transparent animate-matrix-rain" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
