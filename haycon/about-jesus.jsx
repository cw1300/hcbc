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

var HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

var CrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M4 12h16"></path>
  </svg>
);

var BookOpenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
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

var AboutJesus = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredVerse, setHoveredVerse] = useState(null);
  const [hoveredNavLink, setHoveredNavLink] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
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
    { name: 'About Jesus', href: '#about-jesus', active: true, icon: <CrossIcon /> },
    { name: 'Sermons', href: '#sermons', onClick: () => setCurrentPage('sermons'), icon: <VideoIcon /> },
    { name: 'Newsletter', href: '#newsletter', onClick: () => setCurrentPage('newsletter'), icon: <DocumentIcon /> },
    { name: 'Contact', href: '#contact', onClick: () => setCurrentPage('contact'), icon: <MailIcon /> }
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

    hero: {
      height: '70vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      overflow: 'hidden',
      marginTop: '80px'
    },

    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `linear-gradient(135deg, 
        rgba(36, 116, 206, 0.95) 0%, 
        rgba(30, 91, 168, 0.9) 50%,
        rgba(25, 75, 140, 0.95) 100%),
        url('https://i.postimg.cc/5ycpbv9g/2p-Lfesi-O90-DRRIy-EEYt-IXdyw-QJklx-Th2-YFc-Mgo-Uo.jpg') center/cover no-repeat`,
      zIndex: 1
    },

    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.3) 100%)',
      zIndex: 2
    },

    heroContent: {
      position: 'relative',
      zIndex: 3,
      maxWidth: '800px',
      padding: '2rem'
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

    featuresSection: {
      padding: isMobile ? '4rem 1rem' : '6rem 2rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)'
    },

    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },

    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '2rem' : '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
      ...(isMobile && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      })
    },

    featureCard: {
      textAlign: 'center',
      padding: '3rem 2rem',
      background: 'white',
      borderRadius: '25px',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(36, 116, 206, 0.08)',
      ...(isMobile && {
        maxWidth: '400px',
        width: '100%'
      })
    },

    featureCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)'
    },

    featureIcon: {
      background: 'linear-gradient(135deg, #2474CE, #4a90e2)',
      color: 'white',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 2rem',
      boxShadow: '0 8px 25px rgba(36, 116, 206, 0.3)'
    },

    aboutSection: {
      padding: isMobile ? '5rem 1rem' : '10rem 2rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
      position: 'relative'
    },

    jesusContent: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '3rem' : '8rem',
      alignItems: 'center',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },

    jesusText: {
      animation: 'slideInLeft 1s ease-out 0.3s both'
    },

    jesusTitle: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 900,
      marginBottom: '3rem',
      color: '#1a1a1a',
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
      position: 'relative'
    },

    jesusTitleAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-20px',
      left: 0,
      width: '100px',
      height: '6px',
      background: 'linear-gradient(90deg, #2474CE, #4a90e2)',
      borderRadius: '3px'
    },

    jesusLead: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      color: '#555',
      marginBottom: '3rem',
      lineHeight: 1.8,
      fontWeight: 500,
      padding: '2rem',
      background: 'linear-gradient(135deg, rgba(36, 116, 206, 0.05), rgba(36, 116, 206, 0.02))',
      borderLeft: '5px solid #2474CE',
      borderRadius: '10px'
    },

    jesusParagraph: {
      color: '#555',
      marginBottom: '2.5rem',
      lineHeight: 1.9,
      fontSize: '1.15rem'
    },

    jesusImageSection: {
      position: 'relative',
      animation: 'slideInRight 1s ease-out 0.6s both'
    },

    jesusImageContainer: {
      background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
      borderRadius: '40px',
      padding: isMobile ? '3rem' : '4rem',
      boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(36, 116, 206, 0.1)',
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden'
    },

    jesusImage: {
      width: '100%',
      maxWidth: '450px',
      height: 'auto',
      borderRadius: '25px',
      objectFit: 'cover',
      boxShadow: '0 20px 60px rgba(36, 116, 206, 0.4)',
      margin: '0 auto 3rem auto',
      position: 'relative',
      zIndex: 2,
      display: 'block'
    },

    jesusCaption: {
      color: '#2474CE',
      fontStyle: 'italic',
      fontSize: '1.1rem',
      lineHeight: 1.7,
      margin: 0,
      fontWeight: 600,
      textShadow: '0 2px 10px rgba(36, 116, 206, 0.1)'
    },

    versesSection: {
      padding: isMobile ? '5rem 1rem' : '10rem 2rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative'
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

    versesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: isMobile ? '2rem' : '4rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      ...(isMobile && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      })
    },

    verseCard: {
      background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
      borderRadius: '30px',
      padding: isMobile ? '3rem' : '4rem',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(36, 116, 206, 0.08)',
      transition: 'all 0.5s ease',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...(isMobile && {
        maxWidth: '400px',
        width: '100%'
      })
    },

    verseCardHover: {
      transform: 'translateY(-15px) scale(1.02)',
      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(36, 116, 206, 0.2)'
    },

    verseText: {
      marginBottom: '3rem',
      position: 'relative',
      zIndex: 2,
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      lineHeight: 1.8,
      color: '#1a1a1a',
      fontStyle: 'italic',
      fontWeight: 500
    },

    verseReference: {
      borderTop: '3px solid #2474CE',
      paddingTop: '2rem',
      position: 'relative',
      zIndex: 2
    },

    verseReferenceText: {
      color: '#2474CE',
      fontWeight: 800,
      fontSize: '1.1rem',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    },

    ctaSection: {
      padding: isMobile ? '5rem 1rem' : '10rem 2rem',
      background: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },

    ctaContent: {
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },

    ctaTitle: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: 900,
      marginBottom: '3rem',
      color: '#1a1a1a',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },

    ctaText: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      marginBottom: '4rem',
      color: '#555',
      opacity: 0.95,
      lineHeight: 1.9
    },

    ctaButtons: {
      display: 'flex',
      gap: '3rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },

    btn: {
      padding: '16px 40px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '0.9rem',
      transition: 'all 0.4s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      border: '2px solid transparent',
      letterSpacing: '0.02em',
      textTransform: 'uppercase'
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

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(1deg); }
    }

    @keyframes shimmer {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
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
      <section style={styles.hero}>
        <div style={styles.heroBackground}>
          <div style={styles.heroOverlay}></div>
        </div>
        <div style={{ ...styles.heroContent, animation: 'fadeInUp 1.2s ease-out' }}>
          <h1 style={styles.heroTitle}>About Jesus Christ</h1>
          <p style={styles.heroSubtitle}>
            Discover the love, hope, and salvation found in Jesus Christ - 
            the Son of God who came to earth to save us and give us eternal life.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.featureCard,
                  ...(hoveredFeature === index && styles.featureCardHover)
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jesus Section */}
      <section style={styles.aboutSection}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(36, 116, 206, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(36, 116, 206, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div style={styles.container}>
          <div style={styles.jesusContent}>
            <div style={styles.jesusText}>
              <h2 style={styles.jesusTitle}>
                Who Is Jesus?
                <span style={styles.jesusTitleAfter}></span>
              </h2>
              <p style={styles.jesusLead}>
                Jesus Christ is the Son of God, fully divine and fully human, who came to earth 
                over 2,000 years ago to bridge the gap between God and humanity.
              </p>
              <p style={styles.jesusParagraph}>
                Born of the virgin Mary in Bethlehem, Jesus lived a perfect, sinless life. He taught 
                with authority, performed miracles, and showed compassion to all people. Most 
                importantly, He willingly gave His life on the cross to pay the penalty for our sins.
              </p>
              <p style={styles.jesusParagraph}>
                On the third day, Jesus rose from the dead, conquering sin and death forever. This 
                resurrection proves His power over death and offers the same hope to all who believe 
                in Him. Through Jesus, we can have a personal relationship with God and the promise 
                of eternal life.
              </p>
            </div>

            <div style={styles.jesusImageSection}>
              <div style={styles.jesusImageContainer}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(36, 116, 206, 0.03) 0%, transparent 70%)',
                  animation: 'float 6s ease-in-out infinite'
                }}></div>

                <img 
                  src="https://i.postimg.cc/m2MCLmQF/Screenshot-2025-10-06-at-1-15-44-PM.png" 
                  alt="Jesus Christ" 
                  style={styles.jesusImage}
                />
                <div>
                  <p style={styles.jesusCaption}>
                    "Come to me, all you who are weary and burdened, and I will give you rest." - Matthew 11:28
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Verses Section */}
      <section style={styles.versesSection}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 10% 20%, rgba(36, 116, 206, 0.03) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(36, 116, 206, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              What Scripture Says
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
              God's Word reveals the truth about Jesus and His love for us
            </p>
          </div>

          <div style={styles.versesGrid}>
            {verses.map((verse, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.verseCard,
                  ...(hoveredVerse === index && styles.verseCardHover)
                }}
                onMouseEnter={() => setHoveredVerse(index)}
                onMouseLeave={() => setHoveredVerse(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: '-100%',
                  left: '-100%',
                  width: '300%',
                  height: '300%',
                  background: 'linear-gradient(45deg, transparent, rgba(36, 116, 206, 0.05), transparent)',
                  transition: 'all 0.5s ease',
                  transform: 'rotate(-45deg)',
                  ...(hoveredVerse === index && {
                    top: '-50%',
                    left: '-50%'
                  })
                }}></div>

                <div style={styles.verseText}>
                  <p>"{verse.text}"</p>
                </div>
                <div style={styles.verseReference}>
                  <span style={styles.verseReferenceText}>{verse.reference}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={styles.ctaSection}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          animation: 'shimmer 4s ease-in-out infinite'
        }}></div>

        <div style={styles.container}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Learn More?</h2>
            <p style={styles.ctaText}>
              We would love to help you discover more about Jesus and what it means 
              to have a relationship with Him. Come visit us this Sunday or reach out 
              to us with any questions.
            </p>
            <div style={styles.ctaButtons}>
              <a 
                href="#contact" 
                style={{
                  ...styles.btn,
                  ...styles.btnPrimary,
                  ...(hoveredButton === 'cta' && styles.btnPrimaryHover)
                }}
                onMouseEnter={() => setHoveredButton('cta')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              >
                Visit Us This Sunday
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