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

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const CrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M4 12h16"></path>
  </svg>
);

const BookOpenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const AboutJesus = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', onClick: () => setCurrentPage('home') },
    { name: 'About Jesus', href: '#about-jesus', active: true },
    { name: 'Sermons', href: '#sermons', onClick: () => setCurrentPage('sermons') },
    { name: 'Newsletter', href: '#newsletter', onClick: () => setCurrentPage('newsletter') },
    { name: 'Contact', href: '#contact', onClick: () => setCurrentPage('contact') }
  ];

  const features = [
    {
      icon: <HeartIcon />,
      title: "God's Love",
      description: "Jesus demonstrated the ultimate love by giving His life for us, showing that God loves each person deeply and personally."
    },
    {
      icon: <CrossIcon />,
      title: "Salvation", 
      description: "Through His death and resurrection, Jesus made a way for us to be forgiven and have eternal life with God."
    },
    {
      icon: <BookOpenIcon />,
      title: "God's Word",
      description: "Jesus is the living Word of God, revealing God's character and His plan for humanity throughout all of Scripture."
    }
  ];

  const verses = [
    {
      text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      reference: "John 3:16"
    },
    {
      text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
      reference: "John 14:6"
    },
    {
      text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
      reference: "Romans 5:8"
    }
  ];

  return (
    <div className="about-jesus-page">
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
      <section className="about-jesus-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>About Jesus Christ</h1>
            <p className="hero-subtitle">
              Discover the love, hope, and salvation found in Jesus Christ - 
              the Son of God who came to earth to save us and give us eternal life.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jesus Section */}
      <section className="jesus-about-section">
        <div className="container">
          <div className="jesus-content">
            <div className="jesus-text">
              <h2>Who Is Jesus?</h2>
              <p className="lead">
                Jesus Christ is the Son of God, fully divine and fully human, who came to earth 
                over 2,000 years ago to bridge the gap between God and humanity.
              </p>
              <p>
                Born of the virgin Mary in Bethlehem, Jesus lived a perfect, sinless life. He taught 
                with authority, performed miracles, and showed compassion to all people. Most 
                importantly, He willingly gave His life on the cross to pay the penalty for our sins.
              </p>
              <p>
                On the third day, Jesus rose from the dead, conquering sin and death forever. This 
                resurrection proves His power over death and offers the same hope to all who believe 
                in Him. Through Jesus, we can have a personal relationship with God and the promise 
                of eternal life.
              </p>
            </div>

            <div className="jesus-image-section">
              <div className="jesus-image-container">
                <img 
                  src="https://i.postimg.cc/m2MCLmQF/Screenshot-2025-10-06-at-1-15-44-PM.png" 
                  alt="Jesus Christ" 
                  className="jesus-image"
                />
                <div className="jesus-image-caption">
                  <p>"Come to me, all you who are weary and burdened, and I will give you rest." - Matthew 11:28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Verses Section */}
      <section className="verses-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Scripture Says</h2>
            <p className="section-subtitle">
              God's Word reveals the truth about Jesus and His love for us
            </p>
          </div>

          <div className="verses-grid">
            {verses.map((verse, index) => (
              <div key={index} className="verse-card">
                <div className="verse-text">
                  <p>"{verse.text}"</p>
                </div>
                <div className="verse-reference">
                  <span>{verse.reference}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Learn More?</h2>
            <p>
              We would love to help you discover more about Jesus and what it means 
              to have a relationship with Him. Come visit us this Sunday or reach out 
              to us with any questions.
            </p>
            <div className="cta-buttons">
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              >
                Visit Us This Sunday
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