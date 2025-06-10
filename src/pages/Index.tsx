
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import { useBlogPosts } from '../hooks/useBlogPosts';

const Index: React.FC = () => {
  const { blogPosts, searchTerm, setSearchTerm, featuredPost, regularPosts, loading } = useBlogPosts();

  return (
    <Layout>
      <HeroSection />

      {/* Search Section */}
      <section className="py-8 border-b border-primary/10">
        <div className="container mx-auto px-4">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            resultsCount={blogPosts.length}
          />
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredPost && !searchTerm && !loading && (
        <section className="py-12 border-b border-primary/10">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 glow-text">Featured Article</h2>
              <p className="text-muted-foreground">Latest insights from the cybersecurity frontlines</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <BlogCard post={featuredPost} index={0} />
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
              {searchTerm ? 'Search Results' : 'Recent Posts'}
            </h2>
            <p className="text-muted-foreground">
              {searchTerm 
                ? `Showing results for "${searchTerm}"`
                : 'Stay updated with the latest cybersecurity trends and techniques'
              }
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="cyber-card p-6 animate-pulse">
                  <div className="h-6 bg-primary/10 rounded mb-4"></div>
                  <div className="h-8 bg-primary/10 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/10 rounded"></div>
                    <div className="h-4 bg-primary/10 rounded"></div>
                    <div className="h-4 bg-primary/10 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm ? blogPosts : regularPosts).map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : searchTerm ? (
            <div className="text-center py-12">
              <div className="cyber-card p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-4">
                  Try searching with different keywords or browse all posts.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="cyber-button"
                >
                  Show All Posts
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Newsletter Section */}
      {!searchTerm && !loading && (
        <section className="py-16 border-t border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="cyber-card p-8 animate-fade-in-up">
                <h3 className="text-2xl font-bold mb-4 glow-text">Stay Secure, Stay Informed</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest cybersecurity insights, vulnerability reports, and security best practices 
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-background border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                  <button className="cyber-button whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, only quality security content. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Index;
