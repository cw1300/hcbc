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

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LockIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const Newsletter = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [error, setError] = useState('');

  const HARDCODED_CODE = 'HBC123';

  useEffect(() => {
    // Check if user was previously authenticated
    const authStatus = localStorage.getItem('newsletterAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (codeInput === HARDCODED_CODE) {
      setIsAuthenticated(true);
      localStorage.setItem('newsletterAuth', 'true');
      setError('');
    } else {
      setError('Incorrect code. Please try again.');
      setCodeInput('');
    }
  };

  // Newsletter PDFs
  const newsletters = [
    {
      id: 1,
      title: "Newsletter - 1/10/2025",
      date: "2025",
      url: "https://drive.google.com/file/d/12extwQmxxMk8tHMrslmP8OeVNhQ0Co21/preview"
    },
    {
      id: 2,
      title: "Newsletter - 17/9/2025",
      date: "2025",
      url: "https://drive.google.com/file/d/14-2_bMJRbBX2UBR99ivDigSt1PmX52j-/preview"
    },
    {
      id: 3,
      title: "Newsletter - 10/9/2025",
      date: "2025",
      url: "https://drive.google.com/file/d/1DMV3ieKyu78ONf1Q5Nj1VUsvnF0k50jQ/preview"
    },
    {
      id: 4,
      title: "Newsletter - 27/8/25",
      date: "2025",
      url: "https://drive.google.com/file/d/1KASSr8sw92C3htSZOyI_3rYQq9rY6aN5/preview"
    },
    {
      id: 5,
      title: "Newsletter - 20/8/2025",
      date: "2025",
      url: "https://drive.google.com/file/d/1PcX9z1-joHGFWmeSv0iH6CKdI4EwTjEp/preview"
    },
    {
      id: 6,
      title: "Newsletter - 13/8/2025",
      date: "2025",
      url: "https://drive.google.com/file/d/16bEzJqdxMogeAtPzJtiaT2NHnMu3Vugw/preview"
    }
  ];

  const openPDF = (newsletter) => {
    setSelectedPDF(newsletter);
    document.body.style.overflow = 'hidden';
  };

  const closePDF = () => {
    setSelectedPDF(null);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { name: 'Home', href: '#home', onClick: () => setCurrentPage('home') },
    { name: 'About Jesus', href: '#about-jesus', onClick: () => setCurrentPage('about-jesus') },
    { name: 'Sermons', href: '#sermons', onClick: () => setCurrentPage('sermons') },
    { name: 'Newsletter', href: '#newsletter', active: true },
    { name: 'Contact', href: '#contact', onClick: () => setCurrentPage('contact') }
  ];

  // Show authentication screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="newsletter-page">
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

        {/* Authentication Screen */}
        <div className="auth-overlay">
          <div className="auth-container">
            <div className="auth-icon">
              <LockIcon />
            </div>
            <h2 className="auth-title">Newsletter Access</h2>
            <p className="auth-description">
              Please enter the access code to view our church newsletters.
            </p>
            <form onSubmit={handleCodeSubmit} className="auth-form">
              <input
                type="text"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
                placeholder="Enter access code"
                className="auth-input"
                autoFocus
              />
              {error && <p className="auth-error">{error}</p>}
              <button type="submit" className="auth-button">
                Submit Code
              </button>
            </form>
          </div>
        </div>

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
  }

  // Show newsletter content if authenticated
  return (
    <div className="newsletter-page">
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
      <section className="newsletter-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Newsletter</h1>
            <p className="hero-subtitle">
              Stay connected with our church family and receive updates on upcoming events, 
              messages, and news from Hallett Cove Baptist Church.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="newsletter-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Past Newsletters</h2>
            <p className="section-subtitle">
              Catch up on our latest church newsletters and stay informed about what's happening in our community.
            </p>
          </div>

          <div className="newsletters-grid">
            {newsletters.map((newsletter) => (
              <div 
                key={newsletter.id} 
                className="newsletter-bubble"
                onClick={() => openPDF(newsletter)}
              >
                <div className="newsletter-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <h3 className="newsletter-title">{newsletter.title}</h3>
                <p className="newsletter-date">{newsletter.date}</p>
                <div className="newsletter-cta">Click to View</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedPDF && (
        <div className="pdf-modal" onClick={closePDF}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pdf-close-btn" onClick={closePDF}>
              <XIcon />
            </button>
            <h3 className="pdf-modal-title">{selectedPDF.title}</h3>
            <iframe 
              src={selectedPDF.url}
              width="100%" 
              height="100%" 
              style={{border: 0}}
              title={selectedPDF.title}
            />
          </div>
        </div>
      )}

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