import React, { useState } from 'react';
import { Menu, X, Zap, Moon, Sun, Heart, Edit2, Trash2, Search, Tag } from 'lucide-react';

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }
  
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 3px solid #2563eb;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .navbar-light {
    background: white;
    color: #111;
  }
  
  .navbar-dark {
    background: #111827;
    color: white;
  }
  
  .nav-container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(to right, #2563eb, #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .nav-menu {
    display: none;
    gap: 2rem;
    align-items: center;
    list-style: none;
  }
  
  .nav-menu.show {
    display: flex;
  }
  
  @media (min-width: 768px) {
    .nav-menu {
      display: flex !important;
    }
  }
  
  .nav-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s;
    padding: 0.5rem;
  }
  
  .nav-btn:hover {
    color: #2563eb;
  }
  
  .nav-btn.active {
    color: #2563eb;
    border-bottom: 2px solid #2563eb;
  }
  
  .mobile-menu-btn {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  @media (min-width: 768px) {
    .mobile-menu-btn {
      display: none;
    }
  }
  
  .hero {
    position: relative;
    height: 24rem;
    margin-bottom: 4rem;
    border-radius: 12px;
    overflow: hidden;
    background: url('https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=400&fit=crop');
    background-size: cover;
    background-position: center;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(0, 0, 0, 0.7));
  }
  
  .hero-content {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }
  
  .hero h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .hero p {
    font-size: 1.25rem;
    color: #93c5fd;
    margin-bottom: 1.5rem;
  }
  
  .hero-btn {
    background: #2563eb;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .hero-btn:hover {
    background: #1d4ed8;
  }
  
  .container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .title-line {
    height: 4px;
    width: 5rem;
    background: #2563eb;
    margin-bottom: 2rem;
  }
  
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .blog-card {
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .blog-card-light {
    background: white;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border: 1px solid #e5e7eb;
  }
  
  .blog-card-dark {
    background: #111827;
    border: 1px solid rgba(37, 99, 235, 0.3);
  }
  
  .blog-card:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }
  
  .blog-img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  .blog-card:hover .blog-img {
    transform: scale(1.05);
  }
  
  .blog-content {
    padding: 1.25rem;
  }
  
  .blog-tags {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }
  
  .tag {
    font-size: 0.75rem;
    background: rgba(37, 99, 235, 0.2);
    color: #2563eb;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
  
  .blog-title {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .blog-excerpt {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .blog-meta {
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
  }
  
  .blog-light .blog-excerpt {
    color: #4b5563;
  }
  
  .blog-dark .blog-excerpt {
    color: #9ca3af;
  }
  
  .blog-light .blog-meta {
    color: #6b7280;
  }
  
  .blog-dark .blog-meta {
    color: #9ca3af;
  }
  
  .btn {
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .btn-primary {
    background: #2563eb;
    color: white;
  }
  
  .btn-primary:hover {
    background: #1d4ed8;
  }
  
  .btn-secondary {
    background: #e5e7eb;
    color: #111;
    border: 2px solid #2563eb;
  }
  
  .btn-secondary:hover {
    background: #2563eb;
    color: white;
  }
  
  .btn-like {
    background: #ef4444;
    color: white;
  }
  
  .btn-like:hover {
    background: #dc2626;
  }
  
  .btn-edit {
    background: #eab308;
    color: white;
  }
  
  .btn-edit:hover {
    background: #ca8a04;
  }
  
  .btn-delete {
    background: #b91c1c;
    color: white;
  }
  
  .btn-delete:hover {
    background: #991b1b;
  }
  
  .filter-section {
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .filter-light {
    background: white;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .filter-dark {
    background: #111827;
    border: 1px solid rgba(37, 99, 235, 0.3);
  }
  
  .search-box {
    position: relative;
    margin-bottom: 1.5rem;
  }
  
  .search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border-radius: 8px;
    border: 2px solid #d1d5db;
    font-size: 1rem;
  }
  
  .search-input:focus {
    outline: none;
    border-color: #2563eb;
  }
  
  .dark .search-input {
    background: #1f2937;
    color: white;
    border-color: rgba(37, 99, 235, 0.3);
  }
  
  .filter-label {
    font-weight: bold;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s;
  }
  
  .filter-btn-active {
    background: #2563eb;
    color: white;
  }
  
  .filter-btn-inactive-light {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
  }
  
  .filter-btn-inactive-dark {
    background: #1f2937;
    color: #d1d5db;
    border: 1px solid rgba(37, 99, 235, 0.3);
  }
  
  .article {
    border-radius: 8px;
    overflow: hidden;
  }
  
  .article-light {
    background: white;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .article-dark {
    background: #111827;
    border: 1px solid rgba(37, 99, 235, 0.3);
  }
  
  .article-img {
    width: 100%;
    height: 24rem;
    object-fit: cover;
  }
  
  .article-body {
    padding: 2rem;
  }
  
  .article-h1 {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  
  .article-meta {
    display: flex;
    gap: 1.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid;
    font-size: 0.875rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  
  .article-light .article-meta {
    border-color: #e5e7eb;
    color: #6b7280;
  }
  
  .article-dark .article-meta {
    border-color: rgba(37, 99, 235, 0.3);
    color: #9ca3af;
  }
  
  .article-text {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  
  .article-light .article-text {
    color: #374151;
  }
  
  .article-dark .article-text {
    color: #d1d5db;
  }
  
  .article-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .footer {
    margin-top: 4rem;
    background: #111827;
    color: white;
    padding: 2rem 1rem;
    border-top: 1px solid rgba(37, 99, 235, 0.3);
    text-align: center;
  }
  
  .footer p {
    color: #9ca3af;
  }
  
  .main {
    flex-grow: 1;
    min-height: calc(100vh - 200px);
  }
  
  .back-link {
    color: #2563eb;
    cursor: pointer;
    margin-bottom: 2rem;
    font-weight: 600;
    transition: all 0.3s;
  }
  
  .back-link:hover {
    color: #1d4ed8;
  }
  
  .view-all-btn {
    text-align: center;
    margin: 2rem 0;
  }
  
  .form {
    border-radius: 8px;
    padding: 2rem;
    max-width: 48rem;
  }
  
  .form-light {
    background: white;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .form-dark {
    background: #111827;
    border: 1px solid rgba(37, 99, 235, 0.3);
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .form-input, .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: 8px;
    border: 2px solid #d1d5db;
    font-size: 1rem;
    font-family: inherit;
  }
  
  .dark .form-input, .dark .form-textarea {
    background: #1f2937;
    color: white;
    border-color: rgba(37, 99, 235, 0.3);
  }
  
  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: #2563eb;
  }
  
  .form-buttons {
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
  }
  
  .form-buttons button {
    flex: 1;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default function BlogApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Impact of AI on Jobs: What You Need to Know',
      excerpt: 'Exploring how artificial intelligence is reshaping the job market and creating new opportunities.',
      content: 'Artificial Intelligence is revolutionizing the workplace. While some jobs may become automated, new roles are emerging in AI development, data science, and machine learning. The key is upskilling and adapting to technological changes.',
      image: 'https://imgs.search.brave.com/TXhnv5aTvLxAjHS-d4jAsVMeyAG6nlZEZQol9s3OiA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFoZXJhbGQu/Y29tL0Fzc2V0cy9B/cnRpY2xlVXBsb2Fk/LzIwMjUxMjI4MTI0/OTU4NTYwX2Rvd25s/b2FkLSg5OCkuamZp/Zg',
      author: 'Tech Expert',
      date: '2026-01-15',
      tags: ['AI', 'Technology', 'Career'],
    },
    {
      id: 2,
      title: 'Machine Learning: The Future of Technology',
      excerpt: 'Understanding how machine learning algorithms are transforming industries globally.',
      content: 'Machine Learning enables computers to learn from data without explicit programming. Applications range from recommendation systems on Netflix to autonomous vehicles. Understanding ML concepts like supervised learning, unsupervised learning, and neural networks is crucial.',
      image: 'https://imgs.search.brave.com/tvf-PXkQUwLg7iacAxXt2Dc8yUF6k9zJ22Kg0IOmblg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXNp/Z25pbmRjLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvQWRvYmVT/dG9ja180MzcwMzYw/NzItMS5qcGVn',
      author: 'ML Engineer',
      date: '2026-01-10',
      tags: ['AI', 'Technology', 'ML'],
    },
    {
      id: 3,
      title: 'Cloud Computing: Revolutionizing IT Infrastructure',
      excerpt: 'How cloud services are changing the way businesses manage their IT infrastructure.',
      content: 'Cloud computing has transformed how businesses operate. AWS, Azure, and Google Cloud offer scalable solutions without heavy infrastructure investment. From startups to enterprises, everyone benefits from cloud services. Learn about IaaS, PaaS, and SaaS models.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      author: 'Cloud Architect',
      date: '2026-01-05',
      tags: ['Technology', 'Cloud', 'Infrastructure'],
    }
  ]);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(null);

  const allTags = ['All', ...new Set(blogs.flatMap(b => b.tags))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || blog.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleAddBlog = () => {
    if (formData.title && formData.excerpt && formData.content && formData.tags.length > 0) {
      const newBlog = {
        id: Date.now(),
        ...formData,
        likes: 0,
        date: new Date().toISOString().split('T')[0]
      };
      setBlogs([newBlog, ...blogs]);
      setCurrentPage('home');
    } else {
      alert('Please fill all fields and select at least one tag');
    }
  };

  const handleUpdateBlog = () => {
    if (formData.title && formData.excerpt && formData.content) {
      setBlogs(blogs.map(b => b.id === editingId ? { ...b, ...formData } : b));
      setCurrentPage(`blog-${editingId}`);
    }
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Delete this blog?')) {
      setBlogs(blogs.filter(b => b.id !== id));
      setCurrentPage('home');
    }
  };

  const handleLike = (id) => {
    setBlogs(blogs.map(b => b.id === id ? { ...b, likes: (b.likes || 0) + 1 } : b));
  };

  const openEditForm = (blog) => {
    setFormData(blog);
    setEditingId(blog.id);
    setCurrentPage('edit');
  };

  const openCreateForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
      author: 'Tech Writer',
      tags: []
    });
    setEditingId(null);
    setCurrentPage('create');
  };

  const toggleTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter(t => t !== tag) : [...prev.tags, tag]
    }));
  };

  return (
    <div style={{ background: darkMode ? '#030712' : 'white', color: darkMode ? 'white' : '#111', minHeight: '100vh' }} className={darkMode ? 'dark' : ''}>
      <style>{styles}</style>

      {/* NAVBAR */}
      <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => setCurrentPage('home')}>
            <Zap size={28} style={{ color: '#2563eb' }} />
            Personal Blog
          </div>

          <ul className={`nav-menu ${mobileMenuOpen ? 'show' : ''}`} style={{ background: darkMode ? '#111827' : 'white' }}>
            {['home', 'blogs', 'create'].map(item => (
              <li key={item}>
                <button
                  className={`nav-btn ${currentPage === item ? 'active' : ''}`}
                  onClick={() => { setCurrentPage(item); setMobileMenuOpen(false); }}
                  style={{ color: darkMode && currentPage !== item ? '#d1d5db' : 'inherit' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-btn">
            <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="main">
        <div className="container">
          {/* HOME PAGE */}
          {currentPage === 'home' && (
            <div style={{ paddingTop: '3rem' }}>
              <div className="hero">
                <div className="hero-content">
                  <div>
                    <h1>Personal Blog</h1>
                    <p>AI, Machine Learning & Cloud Computing</p>
                    <button className="hero-btn" onClick={() => setCurrentPage('blogs')}>Explore Articles</button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="section-title">Latest Posts</h2>
                <div className="title-line"></div>

                <div className="blog-grid">
                  {blogs.slice(0, 3).map(blog => (
                    <div key={blog.id} className={`blog-card ${darkMode ? 'blog-card-dark blog-dark' : 'blog-card-light blog-light'}`} onClick={() => setCurrentPage(`blog-${blog.id}`)}>
                      <img src={blog.image} alt={blog.title} className="blog-img" />
                      <div className="blog-content">
                        <div className="blog-tags">
                          {blog.tags.slice(0, 2).map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-excerpt">{blog.excerpt}</p>
                        <div className="blog-meta">
                          <span>{blog.author}</span>
                          <span>{blog.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="view-all-btn">
                  <button className="btn btn-secondary" onClick={() => setCurrentPage('blogs')}>View All Posts</button>
                </div>
              </div>
            </div>
          )}

          {/* BLOGS PAGE */}
          {currentPage === 'blogs' && (
            <div style={{ paddingTop: '3rem' }}>
              <h1 className="section-title">All Articles</h1>

              <div className={`filter-section ${darkMode ? 'filter-dark' : 'filter-light'}`}>
                <div className="search-box">
                  <Search size={18} style={{ position: 'absolute', left: '1rem', top: '0.75rem', color: '#9ca3af' }} />
                  <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />
                </div>

                <div className="filter-label"><Tag size={18} /> Filter by Tag</div>
                <div className="filter-buttons">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      className={`filter-btn ${selectedTag === tag ? 'filter-btn-active' : darkMode ? 'filter-btn-inactive-dark' : 'filter-btn-inactive-light'}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {filteredBlogs.length > 0 ? (
                <div className="blog-grid">
                  {filteredBlogs.map(blog => (
                    <div key={blog.id} className={`blog-card ${darkMode ? 'blog-card-dark blog-dark' : 'blog-card-light blog-light'}`} onClick={() => setCurrentPage(`blog-${blog.id}`)}>
                      <img src={blog.image} alt={blog.title} className="blog-img" />
                      <div className="blog-content">
                        <div className="blog-tags">
                          {blog.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-excerpt">{blog.excerpt}</p>
                        <div className="blog-meta">
                          <span>{blog.date}</span>
                          <span style={{ display: 'flex', gap: '0.25rem' }}><Heart size={14} style={{ color: '#ef4444' }} /> {blog.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ textAlign: 'center', padding: '3rem 0', color: darkMode ? '#9ca3af' : '#6b7280' }}>No articles found</p>
              )}
            </div>
          )}

          {/* BLOG DETAILS */}
          {currentPage.startsWith('blog-') && (() => {
            const blog = blogs.find(b => b.id === parseInt(currentPage.split('-')[1]));
            return blog ? (
              <div style={{ paddingTop: '3rem' }}>
                <div className="back-link" onClick={() => setCurrentPage('blogs')}>← Back to Articles</div>

                <article className={`article ${darkMode ? 'article-dark' : 'article-light'}`}>
                  <img src={blog.image} alt={blog.title} className="article-img" />
                  <div className="article-body">
                    <div className="blog-tags">
                      {blog.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <h1 className="article-h1">{blog.title}</h1>
                    <div className="article-meta">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                      <span style={{ display: 'flex', gap: '0.25rem' }}><Heart size={16} style={{ color: '#ef4444' }} /> {blog.likes} Likes</span>
                    </div>
                    <p className="article-text">{blog.content}</p>

                    <div className="article-buttons">
                      <button className="btn btn-like" onClick={() => handleLike(blog.id)}><Heart size={18} /> Like</button>
                      <button className="btn btn-edit" onClick={() => openEditForm(blog)}><Edit2 size={18} /> Edit</button>
                      <button className="btn btn-delete" onClick={() => handleDeleteBlog(blog.id)}><Trash2 size={18} /> Delete</button>
                    </div>
                  </div>
                </article>
              </div>
            ) : null;
          })()}

          {/* CREATE BLOG */}
          {currentPage === 'create' && (
            <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
              <h1 className="section-title">Create New Article</h1>
              <div className={`form ${darkMode ? 'form-dark' : 'form-light'}`}>
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-input" placeholder="Article title..." value={formData?.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                </div>

                <div className="form-group">
                  <label className="form-label">Excerpt</label>
                  <textarea className="form-textarea" rows="2" placeholder="Brief summary..." value={formData?.excerpt || ''} onChange={(e) => setFormData({...formData, excerpt: e.target.value})}></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Content</label>
                  <textarea className="form-textarea" rows="8" placeholder="Full article content..." value={formData?.content || ''} onChange={(e) => setFormData({...formData, content: e.target.value})}></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Image URL</label>
                  <input type="url" className="form-input" placeholder="https://example.com/image.jpg" value={formData?.image || ''} onChange={(e) => setFormData({...formData, image: e.target.value})} />
                  {formData?.image && <img src={formData.image} alt="Preview" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginTop: '1rem' }} onError={(e) => e.target.style.display = 'none'} />}
                </div>

                <div className="form-group">
                  <label className="form-label">Author</label>
                  <input type="text" className="form-input" placeholder="Your name..." value={formData?.author || ''} onChange={(e) => setFormData({...formData, author: e.target.value})} />
                </div>

                <div className="form-group">
                  <label className="form-label">Tags</label>
                  <div className="filter-buttons">
                    {['AI', 'Technology', 'Career', 'Security', 'Hacking', 'ML', 'Blockchain', 'Web3', 'Cloud', 'Infrastructure'].map(tag => (
                      <button key={tag} type="button" className={`filter-btn ${formData?.tags?.includes(tag) ? 'filter-btn-active' : darkMode ? 'filter-btn-inactive-dark' : 'filter-btn-inactive-light'}`} onClick={() => toggleTag(tag)}>
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-buttons">
                  <button className="btn btn-primary" onClick={handleAddBlog}>Publish Article</button>
                  <button className="btn btn-secondary" onClick={() => setCurrentPage('home')}>Cancel</button>
                </div>
              </div>
            </div>
          )}

          {/* EDIT BLOG */}
          {currentPage === 'edit' && formData && (
            <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
              <h1 className="section-title">Edit Article</h1>
              <div className={`form ${darkMode ? 'form-dark' : 'form-light'}`}>
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-input" value={formData?.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                </div>

                <div className="form-group">
                  <label className="form-label">Excerpt</label>
                  <textarea className="form-textarea" rows="2" value={formData?.excerpt || ''} onChange={(e) => setFormData({...formData, excerpt: e.target.value})}></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Content</label>
                  <textarea className="form-textarea" rows="8" value={formData?.content || ''} onChange={(e) => setFormData({...formData, content: e.target.value})}></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Image URL</label>
                  <input type="url" className="form-input" value={formData?.image || ''} onChange={(e) => setFormData({...formData, image: e.target.value})} />
                  {formData?.image && <img src={formData.image} alt="Preview" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginTop: '1rem' }} onError={(e) => e.target.style.display = 'none'} />}
                </div>

                <div className="form-group">
                  <label className="form-label">Author</label>
                  <input type="text" className="form-input" value={formData?.author || ''} onChange={(e) => setFormData({...formData, author: e.target.value})} />
                </div>

                <div className="form-buttons">
                  <button className="btn btn-primary" onClick={handleUpdateBlog}>Update Article</button>
                  <button className="btn btn-secondary" onClick={() => setCurrentPage(`blog-${editingId}`)}>Cancel</button>
                </div>
              </div>
            </div>
          )}

          {/* ABOUT PAGE */}
          {currentPage === 'about' && (
            <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
              <h1 className="section-title">About TechHub</h1>
              <div className={`form ${darkMode ? 'form-dark' : 'form-light'}`}>
                <p>TechHub is your go-to platform for cutting-edge articles on AI, Cybersecurity, Hacking, and emerging technologies. We bring you insights from industry experts and tech enthusiasts.</p>
                <br />
                <p>Subscribe to stay updated with the latest trends shaping the tech world.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Personal Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
