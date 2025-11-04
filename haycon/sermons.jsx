const { useState, useEffect } = React;

// Icon Components
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5,3 19,12 5,21"></polygon>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Sermons = ({ setCurrentPage }) => { // Make sure setCurrentPage is received as a prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed navigation items with proper onClick handlers
  const navItems = [
    { name: 'Home', href: '#home', onClick: () => setCurrentPage('home') },
    { name: 'About Jesus', href: '#about-jesus', onClick: () => setCurrentPage('about-jesus') },
    { name: 'Sermons', href: '#sermons', active: true }, // This one is active on sermons page
    { name: 'Newsletter', href: '#newsletter', onClick: () => setCurrentPage('newsletter') },
    { name: 'Contact', href: '#contact', onClick: () => setCurrentPage('contact') }
  ];

  const sermons = [
    {
      id: "pZQbNE5JqLo",
      title: "1 Cor. 2:1-6 Christ and Him Crucified",
      url: "https://www.youtube.com/watch?v=pZQbNE5JqLo",
      thumbnail: "https://img.youtube.com/vi/pZQbNE5JqLo/maxresdefault.jpg"
    },
    {
      id: "0HLNWeN-cio",
      title: "1 Corinthians 1:4-15 \"Who Do You Follow?\" (22Jun25)",
      url: "https://www.youtube.com/watch?v=0HLNWeN-cio",
      thumbnail: "https://img.youtube.com/vi/0HLNWeN-cio/maxresdefault.jpg"
    },
    {
      id: "i6eWptaPIyI",
      title: "PSALM 2 - 15JUN25",
      url: "https://www.youtube.com/watch?v=i6eWptaPIyI",
      thumbnail: "https://img.youtube.com/vi/i6eWptaPIyI/maxresdefault.jpg"
    },
    {
      id: "Wj4Bhvg6_5w",
      title: "Luke 18:1-8 The Parable of the Persistent Widow and the Unjust",
      url: "https://www.youtube.com/watch?v=Wj4Bhvg6_5w",
      thumbnail: "https://img.youtube.com/vi/Wj4Bhvg6_5w/maxresdefault.jpg"
    },
    {
      id: "KIuEFNDNNE8",
      title: "David Wright's reflections on faith in Aboriginal culture",
      url: "https://www.youtube.com/watch?v=KIuEFNDNNE8",
      thumbnail: "https://img.youtube.com/vi/KIuEFNDNNE8/maxresdefault.jpg"
    },
    {
      id: "AqNRuBMEDyw",
      title: "Matthew 2:1-12 Epiphany - Calling Three Kings of Orient!",
      url: "https://www.youtube.com/watch?v=AqNRuBMEDyw",
      thumbnail: "https://img.youtube.com/vi/AqNRuBMEDyw/maxresdefault.jpg"
    }
  ];

  return (
    <div className="sermons-page">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>
            <img src="https://i.postimg.cc/WzGWJQRk/hcbc-removebg-preview.png" alt="HCBC Logo" />
            <span>Hallett Cove Baptist Church</span>
          </a>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className={`nav-link ${item.active ? 'active' : ''}`}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="sermons-hero">
        <div className="sermons-hero-content">
          <h1>Sermons</h1>
          <p>Listen to God's Word proclaimed through our recent messages</p>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="sermons-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recent Messages</h2>
            <p className="section-subtitle">
              Click on any sermon to watch it here, or visit our YouTube channel for our complete sermon library.
            </p>
          </div>

          <div className="sermons-grid">
            {sermons.map((sermon, index) => (
              <div key={index} className="sermon-card">
                <div className="sermon-thumbnail">
                  <img src={sermon.thumbnail} alt={sermon.title} />
                  <div className="play-overlay">
                    <div className="play-button">
                      <PlayIcon />
                    </div>
                  </div>
                </div>
                <div className="sermon-content">
                  <h3 className="sermon-title">{sermon.title}</h3>
                  <div className="sermon-actions">
                    <a 
                      href={sermon.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary sermon-btn sermon-btn-center"
                    >
                      <PlayIcon />
                      Watch Here
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Follow us on YouTube */}
          <div className="youtube-follow">
            <div className="youtube-follow-content">
              <h3>Follow us on YouTube</h3>
              <p>Subscribe to our channel for all our latest sermons and church updates</p>
              <a 
                href="https://www.youtube.com/@hallettcovebaptistchurch7462/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-youtube-outline"
              >
                Visit Our Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="https://i.postimg.cc/WzGWJQRk/hcbc-removebg-preview.png" alt="HCBC Logo" />
            </div>

            <p className="footer-description">
              Hallett Cove Baptist Church - Bringing people to Jesus and being transformed 
              into His passionate disciples. Join our loving church family.
            </p>

            <div className="social-links">
              <a href="https://www.facebook.com/hallettcovebaptist/" className="social-link" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Hallett Cove Baptist Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};