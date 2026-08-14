import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Calendar } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
import { getPostBySlug } from '../data/blogPosts';
import Seo from '../components/Seo';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="blogpost-notfound">
        <h1>Article not found</h1>
        <Link to="/blog" className="blogpost-back-link">&larr; Back to Blog</Link>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="blogpost-page">

      {(post.metaTitle || post.canonical) && (
        <Seo
          title={post.metaTitle || `${post.title} | Tesco Structures`}
          description={post.metaDescription || post.desc}
          canonical={post.canonical}
          ogType="article"
          ogTitle={post.metaTitle || post.title}
          ogUrl={post.canonical}
          ogImage={post.innerImage ? `https://www.tescostructures.com${post.innerImage}` : undefined}
          ogDescription={post.metaDescription || post.desc}
          twitterCard="summary_large_image"
          twitterTitle={post.metaTitle || post.title}
          twitterDescription={post.metaDescription || post.desc}
          twitterImage={post.innerImage ? `https://www.tescostructures.com${post.innerImage}` : undefined}
          schemas={post.schemas || []}
        />
      )}

      {/* Curved hero banner — the inner image fills the background behind the title */}
      <section
        className={`blogpost-hero ${post.innerImage ? 'blogpost-hero--image' : ''}`}
        style={post.innerImage ? { backgroundImage: `url(${post.innerImage})` } : undefined}
      >
        <div className="blogpost-hero-overlay"></div>
        <div className="blogpost-hero-inner">
          <h1 className="blogpost-hero-title">{post.title}</h1>
        </div>
      </section>

      <div className="blogpost-container">

        {/* Meta bar: category + date on the left, share on the right */}
        <div className="blogpost-meta-card">
          <div className="blogpost-meta-left">
            <span className="blogpost-meta-cat">{post.category}</span>
            <span className="blogpost-meta-dot">·</span>
            <span className="blogpost-meta-date">
              <Calendar size={15} /> {post.date}
            </span>
          </div>
          <div className="blogpost-share">
            <span className="blogpost-share-label">Share</span>
            <a
              href="mailto:salestescostructures@gmail.com"
              aria-label="Email us"
              className="blogpost-share-icon"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/109563823/"
              target="_blank"
              rel="noreferrer"
              aria-label="Tesco Structures on LinkedIn"
              className="blogpost-share-icon"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.instagram.com/tesco_structures/"
              target="_blank"
              rel="noreferrer"
              aria-label="Tesco Structures on Instagram"
              className="blogpost-share-icon"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Article body */}
        {post.html ? (
          <article
            className="blogpost-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        ) : (
          <article className="blogpost-body">
            {(post.body || []).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>
        )}

        <button className="blogpost-back-btn" onClick={() => navigate('/blog')}>
          <ArrowLeft size={16} /> Back to all articles
        </button>

      </div>
    </div>
  );
};

export default BlogPost;
