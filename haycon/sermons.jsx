var { useState, useEffect } = React;

// Icon Components
var MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

var XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

var YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

var PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5,3 19,12 5,21"></polygon>
  </svg>
);

var ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

var FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Mobile Nav Icons
var HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

var CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M4 12h16"></path>
  </svg>
);

var VideoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

var DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

var MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

var Sermons = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredNavLink, setHoveredNavLink] = useState(null);
  const [hoveredSocialLink, setHoveredSocialLink] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Fix body margins
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', onClick: () => setCurrentPage('home'), icon: <HomeIcon /> },
    { name: 'About Jesus', href: '#about-jesus', onClick: () => setCurrentPage('about-jesus'), icon: <CrossIcon /> },
    { name: 'Sermons', href: '#sermons', active: true, icon: <VideoIcon /> },
    { name: 'Newsletter', href: '#newsletter', onClick: () => setCurrentPage('newsletter'), icon: <DocumentIcon /> },
    { name: 'Contact', href: '#contact', onClick: () => setCurrentPage('contact'), icon: <MailIcon /> }
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

  // Inline styles
  const styles = {
    page: {
      paddingTop: '80px',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: 1.6,
      color: '#1a1a1a',
      backgroundColor: '#ffffff',
      overflowX: 'hidden',
      width: '100%'
    },

    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: '#2474CE',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      padding: 0,
      ...(isScrolled && {
        background: '#2474CE',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
      })
    },

    navContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '1rem' : '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'white',
      textDecoration: 'none',
      letterSpacing: '-0.02em'
    },

    logoImg: {
      height: isMobile ? '40px' : '50px',
      width: 'auto',
      filter: 'brightness(0) invert(1)'
    },

    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '3rem',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      ...(isMobile && {
        position: 'fixed',
        top: 0,
        right: isMenuOpen ? 0 : '-100%',
        height: '100vh',
        width: '90%',
        maxWidth: '350px',
        background: '#2474CE',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '6rem 2rem 2rem',
        boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.1)',
        transition: 'right 0.4s ease'
      })
    },

    navLink: {
      textDecoration: 'none',
      color: isMobile ? 'white' : 'rgba(255, 255, 255, 0.9)',
      fontWeight: 600,
      fontSize: isMobile ? '1.2rem' : '1rem',
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: isMobile ? '1rem 0' : '0.5rem 0',
      ...(isMobile && {
        width: '100%',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      })
    },

    navLinkActive: {
      color: 'white'
    },

    mobileMenuToggle: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
      padding: '8px'
    },

    sermonsHero: {
      height: isMobile ? '50vh' : '70vh',
      background: `linear-gradient(135deg, 
        rgba(36, 116, 206, 0.95) 0%, 
        rgba(30, 91, 168, 0.9) 50%,
        rgba(25, 75, 140, 0.95) 100%),
        url('https://i.postimg.cc/gkcYYgzB/Screenshot-2025-09-14-at-12-50-12-AM.png') center/cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      marginTop: '80px'
    },

    sermonsHeroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      padding: '2rem',
      animation: 'fadeInUp 1.2s ease-out'
    },

    heroTitle: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 800,
      marginBottom: '1rem',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      letterSpacing: '-0.03em'
    },

    heroSubtitle: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      opacity: 0.95,
      fontWeight: 400,
      lineHeight: 1.6
    },

    sermonsSection: {
      padding: isMobile ? '5rem 1rem' : '6rem 2rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
    },

    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },

    sectionHeader: {
      textAlign: 'center',
      marginBottom: '5rem'
    },

    sectionTitle: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      fontWeight: 800,
      marginBottom: '1.5rem',
      color: '#1a1a1a',
      letterSpacing: '-0.03em',
      position: 'relative'
    },

    sectionSubtitle: {
      fontSize: '1.2rem',
      color: '#555',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.8
    },

    sermonsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: isMobile ? '2rem' : '3rem',
      maxWidth: '1400px',
      margin: '0 auto 4rem',
      ...(isMobile && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      })
    },

    sermonCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.4s ease',
      border: '2px solid rgba(36, 116, 206, 0.08)',
      ...(isMobile && {
        maxWidth: '400px',
        width: '100%'
      })
    },

    sermonCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
      borderColor: 'rgba(36, 116, 206, 0.2)'
    },

    sermonThumbnail: {
      position: 'relative',
      height: '250px',
      overflow: 'hidden',
      cursor: 'pointer'
    },

    thumbnailImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },

    thumbnailImageHover: {
      transform: 'scale(1.05)'
    },

    playOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },

    playOverlayHover: {
      opacity: 1
    },

    playButton: {
      width: '80px',
      height: '80px',
      background: '#2474CE',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      transform: 'scale(1)',
      transition: 'transform 0.3s ease'
    },

    playButtonHover: {
      transform: 'scale(1.1)'
    },

    sermonContent: {
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      height: '200px'
    },

    sermonTitle: {
      fontSize: '1.3rem',
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: 'auto',
      lineHeight: 1.4,
      flex: 1,
      display: 'flex',
      alignItems: 'flex-start'
    },

    sermonActions: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'auto'
    },

    btn: {
      padding: '8px 16px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '0.8rem',
      transition: 'all 0.4s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      border: '2px solid transparent',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      width: '180px',
      justifyContent: 'center'
    },

    btnPrimary: {
      background: 'linear-gradient(135deg, #2474CE, #1e5ba8)',
      color: 'white',
      boxShadow: '0 8px 30px rgba(36, 116, 206, 0.4)'
    },

    btnPrimaryHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 15px 40px rgba(36, 116, 206, 0.5)',
      background: 'linear-gradient(135deg, #1e5ba8, #1a4f8a)'
    },

    youtubeFollow: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '3rem 2rem',
      background: 'linear-gradient(135deg, #2474CE, #1e5ba8)',
      borderRadius: '25px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },

    youtubeFollowContent: {
      position: 'relative',
      zIndex: 2
    },

    youtubeTitle: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '1rem',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
    },

    youtubeText: {
      fontSize: '1.1rem',
      opacity: 0.9,
      marginBottom: '2rem',
      lineHeight: 1.6
    },

    btnYoutubeOutline: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white',
      padding: '14px 30px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      boxShadow: 'none',
      borderRadius: '50px',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.4s ease'
    },

    btnYoutubeOutlineHover: {
      background: 'white',
      color: '#2474CE',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
    },

    footer: {
      background: '#2474CE',
      color: 'white',
      padding: '5rem 2rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },

    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },

    footerLogo: {
      height: '70px',
      width: 'auto',
      filter: 'brightness(0) invert(1) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3))'
    },

    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginBottom: '3rem'
    },

    socialLink: {
      background: 'rgba(255, 255, 255, 0.15)',
      color: 'white',
      padding: '18px',
      borderRadius: '50%',
      textDecoration: 'none',
      transition: 'all 0.4s ease',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    socialLinkHover: {
      background: 'white',
      color: '#2474CE',
      transform: 'translateY(-5px) scale(1.1)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
    }
  };

  // Animation styles
  const animationStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-x: hidden;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <div style={styles.page}>
      <style>{animationStyles}</style>

      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <a 
            href="#home" 
            style={styles.logo}
            onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
          >
            <img src="https://i.postimg.cc/WzGWJQRk/hcbc-removebg-preview.png" alt="HCBC Logo" style={styles.logoImg} />
            {!isMobile && <span>Hallett Cove Baptist Church</span>}
          </a>

          <ul style={styles.navLinks}>
            {navItems.map((item, index) => (
              <li key={index} style={{ margin: 0, width: isMobile ? '100%' : 'auto' }}>
                <a 
                  href={item.href} 
                  style={{
                    ...styles.navLink,
                    ...(item.active && styles.navLinkActive),
                    ...(hoveredNavLink === index && !isMobile && { color: 'white' })
                  }}
                  onMouseEnter={() => setHoveredNavLink(index)}
                  onMouseLeave={() => setHoveredNavLink(null)}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {isMobile && item.icon}
                  {item.name}
                  {item.active && !isMobile && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '6px',
                      height: '6px',
                      background: 'white',
                      borderRadius: '50%'
                    }}></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button 
            style={styles.mobileMenuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.sermonsHero}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.3) 100%)',
          zIndex: 1
        }}></div>

        <div style={styles.sermonsHeroContent}>
          <h1 style={styles.heroTitle}>Sermons</h1>
          <p style={styles.heroSubtitle}>Listen to God's Word proclaimed through our recent messages</p>
        </div>
      </section>

      {/* Sermons Grid */}
      <section style={styles.sermonsSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              Recent Messages
              <span style={{
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '5px',
                background: 'linear-gradient(90deg, #2474CE, #4a90e2)',
                borderRadius: '3px'
              }}></span>
            </h2>
            <p style={styles.sectionSubtitle}>
              Click on any sermon to watch it here, or visit our YouTube channel for our complete sermon library.
            </p>
          </div>

          <div style={styles.sermonsGrid}>
            {sermons.map((sermon, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.sermonCard,
                  ...(hoveredCard === index && styles.sermonCardHover)
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.sermonThumbnail}>
                  <img 
                    src={sermon.thumbnail} 
                    alt={sermon.title}
                    style={{
                      ...styles.thumbnailImage,
                      ...(hoveredCard === index && styles.thumbnailImageHover)
                    }}
                  />
                  <div style={{
                    ...styles.playOverlay,
                    ...(hoveredCard === index && styles.playOverlayHover)
                  }}>
                    <div style={{
                      ...styles.playButton,
                      ...(hoveredCard === index && styles.playButtonHover)
                    }}>
                      <PlayIcon />
                    </div>
                  </div>
                </div>
                <div style={styles.sermonContent}>
                  <h3 style={styles.sermonTitle}>{sermon.title}</h3>
                  <div style={styles.sermonActions}>
                    <a 
                      href={sermon.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        ...styles.btn,
                        ...styles.btnPrimary,
                        ...(hoveredButton === `sermon-${index}` && styles.btnPrimaryHover)
                      }}
                      onMouseEnter={() => setHoveredButton(`sermon-${index}`)}
                      onMouseLeave={() => setHoveredButton(null)}
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
          <div style={styles.youtubeFollow}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="3" fill="rgba(255,255,255,0.05)"/><circle cx="40" cy="80" r="2" fill="rgba(255,255,255,0.08)"/></svg>')`,
              pointerEvents: 'none'
            }}></div>

            <div style={styles.youtubeFollowContent}>
              <h3 style={styles.youtubeTitle}>Follow us on YouTube</h3>
              <p style={styles.youtubeText}>Subscribe to our channel for all our latest sermons and church updates</p>
              <a 
                href="https://www.youtube.com/@hallettcovebaptistchurch7462/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  ...styles.btnYoutubeOutline,
                  ...(hoveredButton === 'youtube' && styles.btnYoutubeOutlineHover)
                }}
                onMouseEnter={() => setHoveredButton('youtube')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Visit Our Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <img src="https://i.postimg.cc/WzGWJQRk/hcbc-removebg-preview.png" alt="HCBC Logo" style={styles.footerLogo} />
            </div>

            <p style={{
              marginBottom: '3rem',
              opacity: 0.9,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}>
              Hallett Cove Baptist Church - Bringing people to Jesus and being transformed 
              into His passionate disciples. Join our loving church family.
            </p>

            <div style={styles.socialLinks}>
              <a 
                href="https://www.facebook.com/hallettcovebaptist/" 
                style={{
                  ...styles.socialLink,
                  ...(hoveredSocialLink === 'facebook' && styles.socialLinkHover)
                }}
                onMouseEnter={() => setHoveredSocialLink('facebook')}
                onMouseLeave={() => setHoveredSocialLink(null)}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '2rem',
            opacity: 0.8,
            fontSize: '1rem'
          }}>
            <p>&copy; 2025 Hallett Cove Baptist Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};