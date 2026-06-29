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

var MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

var PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

var MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

var FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

var SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22,2 15,22 11,13 2,9"></polygon>
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

var Contact = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredNavLink, setHoveredNavLink] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredSocialLink, setHoveredSocialLink] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
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
    { name: 'Sermons', href: '#sermons', onClick: () => setCurrentPage('sermons'), icon: <VideoIcon /> },
    { name: 'Newsletter', href: '#newsletter', onClick: () => setCurrentPage('newsletter'), icon: <DocumentIcon /> },
    { name: 'Contact', href: '#contact', active: true, icon: <MailIcon /> }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    // Here you would normally send the form data to a server
    console.log('Form submitted:', formData);

    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setFormStatus(''), 5000);
  };

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

    contactHero: {
      height: isMobile ? '50vh' : '70vh',
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
        url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&q=90') center/cover no-repeat`,
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

    contactFormSection: {
      padding: isMobile ? '5rem 1rem' : '8rem 2rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
    },

    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },

    contactWrapper: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
      gap: isMobile ? '4rem' : '6rem',
      ...(isMobile && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      })
    },

    contactInfoSide: {
      marginBottom: isMobile ? '2rem' : 0,
      ...(isMobile && {
        width: '100%',
        maxWidth: '500px'
      })
    },

    infoTitle: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 800,
      marginBottom: '1.5rem',
      color: '#1a1a1a'
    },

    contactIntro: {
      fontSize: '1.1rem',
      color: '#555',
      lineHeight: 1.8,
      marginBottom: '3rem'
    },

    infoCards: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      marginBottom: '3rem'
    },

    infoCard: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem',
      padding: '2rem',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '2px solid rgba(36, 116, 206, 0.08)',
      ...(isMobile && {
        width: '100%'
      })
    },

    infoCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.12)',
      borderColor: 'rgba(36, 116, 206, 0.2)'
    },

    infoIcon: {
      background: 'linear-gradient(135deg, #2474CE, #1e5ba8)',
      color: 'white',
      padding: '15px',
      borderRadius: '15px',
      flexShrink: 0,
      boxShadow: '0 8px 25px rgba(36, 116, 206, 0.3)'
    },

    infoContent: {
      flex: 1
    },

    infoContentTitle: {
      fontSize: '1.2rem',
      fontWeight: 700,
      marginBottom: '0.5rem',
      color: '#1a1a1a'
    },

    infoContentText: {
      color: '#555',
      textDecoration: 'none',
      lineHeight: 1.6,
      fontSize: '1rem',
      display: 'block'
    },

    serviceTimes: {
      padding: '2rem',
      background: 'linear-gradient(135deg, rgba(36, 116, 206, 0.05), rgba(36, 116, 206, 0.02))',
      borderRadius: '20px',
      borderLeft: '5px solid #2474CE',
      ...(isMobile && {
        width: '100%'
      })
    },

    serviceTimesTitle: {
      fontSize: '1.4rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#2474CE'
    },

    serviceTimesText: {
      color: '#555',
      marginBottom: '0.5rem',
      fontSize: '1rem'
    },

    contactFormContainer: {
      background: 'white',
      padding: isMobile ? '3rem 2rem' : '4rem',
      borderRadius: '30px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      border: '2px solid rgba(36, 116, 206, 0.08)',
      ...(isMobile && {
        width: '100%',
        maxWidth: '500px'
      })
    },

    formIntro: {
      fontSize: '1.05rem',
      color: '#555',
      marginBottom: '2.5rem',
      lineHeight: 1.6
    },

    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },

    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },

    formLabel: {
      fontWeight: 600,
      marginBottom: '0.75rem',
      color: '#1a1a1a',
      fontSize: '1rem'
    },

    formInput: {
      padding: '1rem 1.25rem',
      border: '2px solid #e9ecef',
      borderRadius: '12px',
      fontSize: '1rem',
      fontFamily: "'Inter', sans-serif",
      transition: 'all 0.3s ease',
      background: '#f8f9fa',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    },

    formInputFocus: {
      borderColor: '#2474CE',
      background: 'white',
      boxShadow: '0 0 0 4px rgba(36, 116, 206, 0.1)'
    },

    formTextarea: {
      padding: '1rem 1.25rem',
      border: '2px solid #e9ecef',
      borderRadius: '12px',
      fontSize: '1rem',
      fontFamily: "'Inter', sans-serif",
      transition: 'all 0.3s ease',
      background: '#f8f9fa',
      outline: 'none',
      resize: 'vertical',
      minHeight: '150px',
      width: '100%',
      boxSizing: 'border-box'
    },

    formMessage: {
      padding: '1.25rem',
      borderRadius: '12px',
      fontWeight: 600,
      textAlign: 'center',
      animation: 'slideDown 0.3s ease'
    },

    formMessageSuccess: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      color: 'white'
    },

    formMessageError: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      color: 'white'
    },

    btn: {
      marginTop: '1rem',
      padding: '1.25rem 3rem',
      fontSize: '1.1rem',
      width: '100%',
      justifyContent: 'center',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
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

    mapSection: {
      padding: isMobile ? '5rem 1rem' : '8rem 2rem',
      background: 'white'
    },

    sectionHeader: {
      textAlign: 'center'
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

    mapEmbed: {
      marginTop: '3rem',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
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

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
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
      <section style={styles.contactHero}>
        <div style={styles.heroBackground}>
          <div style={styles.heroOverlay}></div>
        </div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Get In Touch</h1>
          <p style={styles.heroSubtitle}>
            We'd love to hear from you! Whether you have questions, prayer requests, 
            or just want to connect, reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section style={styles.contactFormSection}>
        <div style={styles.container}>
          <div style={styles.contactWrapper}>
            {/* Contact Information */}
            <div style={styles.contactInfoSide}>
              <h2 style={styles.infoTitle}>Contact Information</h2>
              <p style={styles.contactIntro}>
                Feel free to reach out to us through any of these channels. 
                We're here to help and answer any questions you may have.
              </p>

              <div style={styles.infoCards}>
                <div 
                  style={{
                    ...styles.infoCard,
                    ...(hoveredCard === 'location' && styles.infoCardHover)
                  }}
                  onMouseEnter={() => setHoveredCard('location')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={styles.infoIcon}>
                    <MapPinIcon />
                  </div>
                  <div style={styles.infoContent}>
                    <h3 style={styles.infoContentTitle}>Visit Us</h3>
                    <p style={styles.infoContentText}>
                      1 Ramrod Ave<br />Hallett Cove SA 5158
                    </p>
                  </div>
                </div>

                <div 
                  style={{
                    ...styles.infoCard,
                    ...(hoveredCard === 'phone' && styles.infoCardHover)
                  }}
                  onMouseEnter={() => setHoveredCard('phone')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={styles.infoIcon}>
                    <PhoneIcon />
                  </div>
                  <div style={styles.infoContent}>
                    <h3 style={styles.infoContentTitle}>Call Us</h3>
                    <a href="tel:0406295962" style={{
                      ...styles.infoContentText,
                      ...(hoveredCard === 'phone' && { color: '#2474CE' })
                    }}>
                      0406 295 962
                    </a>
                  </div>
                </div>

                <div 
                  style={{
                    ...styles.infoCard,
                    ...(hoveredCard === 'email' && styles.infoCardHover)
                  }}
                  onMouseEnter={() => setHoveredCard('email')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={styles.infoIcon}>
                    <MailIcon />
                  </div>
                  <div style={styles.infoContent}>
                    <h3 style={styles.infoContentTitle}>Email Us</h3>
                    <a href="mailto:hcbcc.office@gmail.com" style={{
                      ...styles.infoContentText,
                      ...(hoveredCard === 'email' && { color: '#2474CE' })
                    }}>
                      hcbcc.office@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div style={styles.serviceTimes}>
                <h3 style={styles.serviceTimesTitle}>Service Times</h3>
                <p style={styles.serviceTimesText}>
                  <strong>Sunday Worship:</strong> 10:00 AM
                </p>
                <p style={styles.serviceTimesText}>
                  <strong>Wednesday Bible Study:</strong> 7:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div style={styles.contactFormContainer}>
              <h2 style={styles.infoTitle}>Send Us a Message</h2>
              <p style={styles.formIntro}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} style={styles.contactForm}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.formLabel}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    style={{
                      ...styles.formInput,
                      ...(focusedInput === 'name' && styles.formInputFocus)
                    }}
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.formLabel}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    style={{
                      ...styles.formInput,
                      ...(focusedInput === 'email' && styles.formInputFocus)
                    }}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="phone" style={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0400 000 000"
                    style={{
                      ...styles.formInput,
                      ...(focusedInput === 'phone' && styles.formInputFocus)
                    }}
                    onFocus={() => setFocusedInput('phone')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.formLabel}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    rows="6"
                    style={{
                      ...styles.formTextarea,
                      ...(focusedInput === 'message' && styles.formInputFocus)
                    }}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput(null)}
                    required
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div style={{ ...styles.formMessage, ...styles.formMessageSuccess }}>
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div style={{ ...styles.formMessage, ...styles.formMessageError }}>
                    Please fill in all required fields.
                  </div>
                )}

                <button 
                  type="submit" 
                  style={{
                    ...styles.btn,
                    ...styles.btnPrimary,
                    ...(hoveredButton === 'submit' && styles.btnPrimaryHover)
                  }}
                  onMouseEnter={() => setHoveredButton('submit')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <SendIcon />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={styles.mapSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              Find Us
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
              Located in the heart of Hallett Cove, we're easy to find and always welcoming.
            </p>
          </div>

          <div style={styles.mapEmbed}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.207598909098!2d138.5158954119569!3d-35.07654537267501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0d8f7e3a7199d%3A0xbb55ae1be62b6c46!2s1%20Ramrod%20Ave%2C%20Hallett%20Cove%20SA%205158!5e0!3m2!1sen!2sau!4v1757777136309!5m2!1sen!2sau" 
              width="100%" 
              height="500" 
              style={{ border: 0, borderRadius: '25px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hallett Cove Baptist Church Location"
            />
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