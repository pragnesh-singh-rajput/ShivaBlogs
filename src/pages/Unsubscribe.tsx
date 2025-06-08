import React from 'react';
import Layout from '../components/Layout';
import UnsubscribeForm from '../components/UnsubscribeForm';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Unsubscribe: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Unsubscribe - ShivaBlogs Newsletter"
        description="Unsubscribe from ShivaBlogs cybersecurity newsletter"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Back Navigation */}
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            {/* Unsubscribe Form */}
            <UnsubscribeForm className="animate-fade-in-up" />

            {/* Additional Information */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                Having trouble? Contact us at{' '}
                <a 
                  href="mailto:support@shivablogs.com" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  support@shivablogs.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Unsubscribe;