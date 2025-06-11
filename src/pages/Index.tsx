
import React, { useState } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import NewsletterForm from '../components/NewsletterForm';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { TrendingUp, Zap, Shield } from 'lucide-react';

const Index: React.FC = () => {
  const { blogPosts, searchTerm, setSearchTerm, featuredPost, regularPosts, loading } = useBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const filteredRegularPosts = selectedCategory
    ? regularPosts.filter(post => post.category === selectedCategory)
    : regularPosts;

  const filteredFeaturedPost = selectedCategory
    ? (featuredPost && featuredPost.category === selectedCategory ? featuredPost : null)
    : featuredPost;

  return (
    <Layout>
      <HeroSection />

      {/* Search Section */}
      <section className="py-8 border-b border-primary/10">
        <div className="container mx-auto px-4">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            resultsCount={filteredPosts.length}
          />
        </div>
      </section>

      {/* Category Filter */}
      {!loading && (
        <section className="py-6 border-b border-primary/10">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Filter by Category
              </h3>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          </div>
        </section>
      )}

      {/* Featured Post Section */}
      {filteredFeaturedPost && !searchTerm && !loading && (
        <section className="py-12 border-b border-primary/10">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 glow-text flex items-center">
                <TrendingUp className="h-8 w-8 mr-3 text-primary" />
                Featured Article
              </h2>
              <p className="text-muted-foreground">Latest insights from the cybersecurity frontlines</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <BlogCard post={filteredFeaturedPost} index={0} />
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              <Zap className="h-8 w-8 mr-3 text-primary" />
              {searchTerm ? 'Search Results' : selectedCategory ? `${selectedCategory} Posts` : 'Recent Posts'}
            </h2>
            <p className="text-muted-foreground">
              {searchTerm 
                ? `Showing results for "${searchTerm}"`
                : selectedCategory
                ? `All posts in ${selectedCategory}`
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
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm ? filteredPosts : filteredRegularPosts).map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : searchTerm || selectedCategory ? (
            <div className="text-center py-12">
              <div className="cyber-card p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm 
                    ? 'Try searching with different keywords or browse all posts.'
                    : 'No posts found in this category.'
                  }
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
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
      {!searchTerm && !selectedCategory && !loading && (
        <section className="py-16 border-t border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Index;
