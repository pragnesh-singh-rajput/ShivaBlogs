
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Book, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="About - ShivaBlogs"
        description="Learn about ShivaBlogs - a cybersecurity blog by Pragnesh Singh Rajput sharing practical insights, security techniques, and technology knowledge."
        keywords="about shivablogs, cybersecurity blog, Pragnesh Singh Rajput, security insights"
        url="https://shivablogs.com/about"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
                About ShivaBlogs
              </h1>
              <p className="text-xl text-muted-foreground">
                Sharing cybersecurity knowledge to build a more secure digital world.
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <section className="cyber-card p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 mr-4">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">What This Blog Is About</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ShivaBlogs is my platform for sharing practical cybersecurity insights, advanced techniques, 
                  and real-world experiences from the field. Whether you're a security professional, developer, 
                  or simply interested in digital security, you'll find valuable content here.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I focus on making complex security concepts accessible and providing actionable guidance 
                  that you can apply in your own work or personal projects.
                </p>
              </section>

              <section className="cyber-card p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold mb-6">What You'll Find Here</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Technical Deep Dives:</strong> In-depth analysis of vulnerabilities and security techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Practical Guides:</strong> Step-by-step tutorials and implementation guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Industry Insights:</strong> Commentary on emerging threats and security trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Tool Reviews:</strong> Evaluation of security tools and technologies</span>
                  </li>
                </ul>
              </section>

              {/* Call to Action */}
              <section className="cyber-card p-8 animate-fade-in-up text-center" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl font-bold mb-4">Want to Know More?</h2>
                <p className="text-muted-foreground mb-6">
                  For detailed information about my professional background and experience, 
                  visit my portfolio website.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="cyber-button">
                    <a 
                      href="https://pragneshsingh.works/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Portfolio
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#newsletter" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Subscribe to Newsletter
                    </a>
                  </Button>
                </div>
              </section>

              {/* Disclaimer */}
              <section className="cyber-card p-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-lg font-semibold mb-3">Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  All content is for educational purposes only. Security techniques should only be used 
                  in authorized environments with proper permission. Always ensure you have explicit 
                  authorization before conducting any security testing.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
