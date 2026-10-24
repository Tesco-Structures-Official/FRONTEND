import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const categories = [
  { name: 'All', count: 55 },
  { name: 'PEB Structures', count: 11 },
  { name: 'Civil Works', count: 10 },
  { name: 'Roofing Systems', count: 12 },
  { name: 'Tensile Design', count: 12 }
];

const Blog = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter criteria map
  const filterPosts = (posts) => {
    return posts.filter(post => {
      // Category match
      const categoryMap = {
        'Civil Works': 'Civil Engineering',
        'Roofing Systems': 'Roofing',
        'Tensile Design': 'Tensile Structures'
      };
      
      const categoryMatch = selectedFilter === 'All' || post.category === categoryMap[selectedFilter] || post.category === selectedFilter;
      
      // Search text match
      const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return categoryMatch && searchMatch;
    });
  };

  const filteredPosts = filterPosts(blogPosts);

  return (
    <div className="blog-page-container">
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="blog-badge">Our Blog</div>
        <h1 className="blog-title">Insights, updates, and expert knowledge in construction and engineering.</h1>
      </section>

      {/* Main Content Layout */}
      <div className="blog-main-layout">
        
        {/* Left Columns: Filter tabs + Post Grid */}
        <div className="blog-content-left">
          
          {/* Mobile/Tablet/Desktop Tabs */}
          <div className="blog-filter-tabs">
            {['All', 'PEB', 'Civil', 'Roofing', 'Tensile'].map((filter) => {
              // Map button tabs to core filter category selection
              const targetCategoryMap = {
                'All': 'All',
                'PEB': 'PEB Structures',
                'Civil': 'Civil Works',
                'Roofing': 'Roofing Systems',
                'Tensile': 'Tensile Design'
              };
              const mappedFilter = targetCategoryMap[filter];
              return (
                <button
                  key={filter}
                  className={`filter-tab-btn ${selectedFilter === mappedFilter ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedFilter(mappedFilter);
                    setCurrentPage(1);
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Posts Grid */}
          <div className="blog-posts-grid">
            {filteredPosts.map((post) => (
              post.slug ? (
                <Link className="blog-card blog-card--clickable" key={post.id} to={`/blog/${post.slug}`}>
                  <div className="blog-card-img-wrapper">
                    <img src={post.image} alt={post.title} className="blog-card-img" />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-category">{post.category.toUpperCase()}</span>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-desc">{post.desc}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-date">{post.date}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <article className="blog-card" key={post.id}>
                  <div className="blog-card-img-wrapper">
                    <img src={post.image} alt={post.title} className="blog-card-img" />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-category">{post.category.toUpperCase()}</span>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-desc">{post.desc}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-date">{post.date}</span>
                      <a href={post.link} className="blog-card-readmore">Read More &rarr;</a>
                    </div>
                  </div>
                </article>
              )
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="no-posts-found">No articles matching your criteria were found.</div>
            )}
          </div>



        </div>

        {/* Right Column: Search + Categories */}
        <aside className="blog-sidebar">
          
          {/* Search Box */}
          <div className="sidebar-widget search-widget">
            <h3>Search</h3>
            <div className="search-input-wrapper">
              <input 
                type="text" 
                placeholder="Keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="search-icon" size={18} />
            </div>
          </div>

          {/* Categories list */}
          <div className="sidebar-widget categories-widget">
            <h3>Categories</h3>
            <ul className="categories-list">
              {categories.map((cat) => (
                <li 
                  key={cat.name} 
                  className={selectedFilter === cat.name ? 'active' : ''}
                  onClick={() => {
                    setSelectedFilter(cat.name);
                    setCurrentPage(1);
                  }}
                >
                  <span className="cat-name">{cat.name}</span>
                  <span className="cat-count">{cat.count.toString().padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default Blog;
