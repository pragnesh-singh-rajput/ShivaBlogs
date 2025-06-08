
import React from 'react';
import Layout from '../components/Layout';
import { Book, Search } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
                About CyberSec Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sharing knowledge and insights from the frontlines of cybersecurity to help build a more secure digital world.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              <section className="cyber-card p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 mr-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  As a cybersecurity professional, I've witnessed firsthand the evolving threat landscape and the constant 
                  challenge of staying ahead of malicious actors. This blog serves as a platform to share practical insights, 
                  advanced techniques, and real-world experiences from the field of cybersecurity and technology.
                </p>
              </section>

              <section className="cyber-card p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 mr-4">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">What You'll Find Here</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technical Deep Dives</h3>
                    <p>In-depth analysis of vulnerabilities, exploitation techniques, and defensive strategies.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Industry Insights</h3>
                    <p>Commentary on emerging threats, security trends, and the evolving cybersecurity landscape.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Practical Guides</h3>
                    <p>Step-by-step tutorials and best practices for implementing security controls.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technology Reviews</h3>
                    <p>Evaluation of security tools, frameworks, and emerging technologies.</p>
                  </div>
                </div>
              </section>

              <section className="cyber-card p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Penetration Testing',
                    'Vulnerability Assessment',
                    'Incident Response',
                    'Security Architecture',
                    'Cloud Security',
                    'Network Security',
                    'Application Security',
                    'Digital Forensics',
                    'Threat Intelligence',
                    'Risk Management',
                    'Compliance & Governance',
                    'Security Automation'
                  ].map((skill, index) => (
                    <div 
                      key={skill}
                      className="p-3 bg-primary/5 rounded-lg border border-primary/20 text-center hover:bg-primary/10 transition-colors"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="cyber-card p-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <h2 className="text-2xl font-bold mb-6">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content shared on this blog is for educational purposes only. The techniques and tools discussed 
                  should only be used in authorized environments with proper permission. The author assumes no responsibility 
                  for any misuse of the information provided. Always ensure you have explicit written authorization before 
                  conducting any security testing activities.
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
