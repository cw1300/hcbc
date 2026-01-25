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

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5,3 19,12 5,21"></polygon>
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const BookOpenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const ShoppingBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const BabyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12h.01"></path>
    <path d="M15 12h.01"></path>
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
  </svg>
);

// Mobile Nav Icons
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M4 12h16"></path>
  </svg>
);

const VideoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const EventModal = ({ event, onClose }) => {
  const [language, setLanguage] = useState('en');

  if (!event) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1
        }}>
          <XIcon />
        </button>
        <div style={{ padding: '40px 30px 30px' }}>
          {event.chinese && (
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <button onClick={() => setLanguage('en')} style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                background: language === 'en' ? '#8b5cf6' : '#f3f4f6',
                color: language === 'en' ? 'white' : '#666',
                cursor: 'pointer',
                fontWeight: '600'
              }}>English</button>
              <button onClick={() => setLanguage('zh')} style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                background: language === 'zh' ? '#8b5cf6' : '#f3f4f6',
                color: language === 'zh' ? 'white' : '#666',
                cursor: 'pointer',
                fontWeight: '600'
              }}>中文</button>
            </div>
          )}
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '15px',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '15px'
          }}>{event.category}</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#1f2937' }}>
            {event.chinese && language === 'zh' ? event.chinese.title : event.title}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', marginBottom: '20px' }}>
            <ClockIcon />
            <span>{event.date} at {event.time}</span>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
            {event.chinese && language === 'zh' ? event.chinese.details : event.details}
          </p>
        </div>
      </div>
    </div>
  );
};

const LandingPage = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
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

  // Inline styles
  const styles = {
    globalContainer: {
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
      height: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      overflow: 'hidden'
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
        url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=1080&fit=crop&q=90') center/cover no-repeat`,
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
      maxWidth: '1000px',
      padding: '2rem'
    },

    heroTitle: {
      fontSize: isMobile ? '2.2rem' : '5rem',
      fontWeight: 800,
      marginBottom: '1.5rem',
      lineHeight: 1.1,
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      letterSpacing: '-0.03em'
    },

    heroSubtitle: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      marginBottom: '3rem',
      opacity: 0.95,
      fontWeight: 400,
      lineHeight: 1.7,
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },

    heroButtons: {
      display: 'flex',
      gap: isMobile ? '1rem' : '2rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '4rem',
      ...(isMobile && {
        flexDirection: 'column',
        alignItems: 'center'
      })
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

    btnOutline: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(10px)'
    },

    btnOutlineHover: {
      background: 'white',
      color: '#2474CE',
      transform: 'translateY(-4px)',
      boxShadow: '0 15px 40px rgba(255, 255, 255, 0.3)'
    },

    heroScroll: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 3,
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '0.9rem'
    },

    featuresSection: {
      padding: isMobile ? '4rem 1rem' : '6rem 2rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)'
    },

    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '2rem' : '3rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },

    featureCard: {
      textAlign: 'center',
      padding: '3rem 2rem',
      background: 'white',
      borderRadius: '25px',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(36, 116, 206, 0.08)'
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

    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#1a1a1a'
    },

    featureDescription: {
      color: '#555',
      lineHeight: 1.7
    },

    welcomeSection: {
      padding: isMobile ? '5rem 1rem' : '8rem 2rem',
      background: 'white'
    },

    welcomeContent: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '3rem' : '6rem',
      alignItems: 'center',
      maxWidth: '1400px',
      margin: '0 auto'
    },

    welcomeText: {
      animation: 'slideInLeft 1s ease-out 0.3s both'
    },

    welcomeTitle: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: 800,
      marginBottom: '2rem',
      color: '#1a1a1a',
      letterSpacing: '-0.03em',
      lineHeight: 1.2
    },

    welcomeLead: {
      fontSize: '1.3rem',
      color: '#555',
      marginBottom: '2rem',
      lineHeight: 1.7,
      fontWeight: 500
    },

    welcomeParagraph: {
      color: '#555',
      marginBottom: '2rem',
      lineHeight: 1.8,
      fontSize: '1.1rem'
    },

    pastorCard: {
      background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
      borderRadius: '30px',
      padding: '3rem',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      border: '2px solid rgba(36, 116, 206, 0.1)'
    },

    pastorImage: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '5px solid #2474CE',
      boxShadow: '0 10px 30px rgba(36, 116, 206, 0.3)'
    },

    eventsSection: {
      padding: isMobile ? '5rem 1rem' : '8rem 2rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
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

    eventsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: isMobile ? '2rem' : '3rem',
      maxWidth: '1400px',
      margin: '0 auto'
    },

    eventCard: {
      background: 'white',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.5s ease',
      cursor: 'pointer',
      border: '1px solid rgba(0, 0, 0, 0.04)'
    },

    eventCardHover: {
      transform: 'translateY(-15px) scale(1.02)',
      boxShadow: '0 30px 70px rgba(0, 0, 0, 0.2)'
    },

    eventImageContainer: {
      position: 'relative',
      height: '250px',
      overflow: 'hidden'
    },

    eventImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },

    eventImageHover: {
      transform: 'scale(1.1)'
    },

    eventContent: {
      padding: '2.5rem'
    },

    contactSection: {
      padding: isMobile ? '5rem 1rem' : '8rem 2rem',
      background: 'white'
    },

    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '3rem' : '6rem',
      maxWidth: '1400px',
      margin: '0 auto',
      marginTop: '3rem',
      ...(isMobile && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      })
    },

    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      ...(isMobile && {
        width: '100%',
        maxWidth: '500px'
      })
    },

    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '2rem',
      padding: '2.5rem',
      background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
      borderRadius: '25px',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.4s ease',
      border: '2px solid rgba(36, 116, 206, 0.08)',
      ...(isMobile && {
        width: '100%'
      })
    },

    contactItemHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
      borderColor: 'rgba(36, 116, 206, 0.2)'
    },

    contactIcon: {
      background: 'linear-gradient(135deg, #2474CE, #1e5ba8)',
      color: 'white',
      padding: '18px',
      borderRadius: '15px',
      flexShrink: 0,
      boxShadow: '0 8px 25px rgba(36, 116, 206, 0.3)'
    },

    mapContainer: {
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      height: '500px',
      background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
      position: 'relative',
      border: '2px solid rgba(36, 116, 206, 0.1)',
      ...(isMobile && {
        width: '100%',
        maxWidth: '500px'
      })
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

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
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
  `;

  const navItems = [
    { name: 'Home', href: '#home', active: true, icon: <HomeIcon /> },
    { name: 'About Jesus', href: '#about-jesus', onClick: () => setCurrentPage('about-jesus'), icon: <CrossIcon /> },
    { name: 'Sermons', href: '#sermons', onClick: () => setCurrentPage('sermons'), icon: <VideoIcon /> },
    { name: 'Newsletter', href: '#newsletter', onClick: () => setCurrentPage('newsletter'), icon: <DocumentIcon /> },
    { name: 'Contact', href: '#contact', onClick: () => setCurrentPage('contact'), icon: <MailIcon /> }
  ];

  const events = [
    {
      title: 'Sunday Worship Service',
      time: '10:00 AM',
      date: 'Every Sunday',
      image: 'https://i.postimg.cc/Dyf5WkfW/Sunday-Service.jpg',
      category: 'Worship',
      description: 'Join us for inspiring worship, biblical teaching, and fellowship every Sunday morning.',
      details: 'Our Sunday Worship Service is the heartbeat of our church community. Each week, we gather together to celebrate God\'s goodness, worship through music, and hear practical biblical teaching. The service includes contemporary worship, prayer, and a relevant message from God\'s Word. We also have children\'s programs running during the service. Whether you\'re a longtime believer or just exploring Christianity, you\'ll find a warm welcome here.'
    },
    {
      title: 'Bible Study & Prayer',
      time: '',
      date: 'Wednesdays',
      image: 'https://i.postimg.cc/ZRFFRj17/Bible-Study.jpg',
      category: 'Study',
      description: 'Dive deeper into God\'s Word with our midweek Bible study and prayer meeting.',
      details: 'Our Wednesday evening gathering is a special time for the church family to come together for deeper study of Scripture and united prayer. We explore God\'s Word book by book, verse by verse, allowing time for questions, discussion, and application to our daily lives. The evening also includes dedicated time for prayer, where we bring our needs, concerns, and thanksgivings before the Lord together.'
    },
    {
      title: 'Prayer Group',
      time: '9:30 AM - 10:30 AM',
      date: 'Tuesdays',
      image: 'https://i.postimg.cc/KzXJ414k/Prayer-Group.jpg',
      category: 'Prayer',
      description: 'A dedicated time for corporate prayer, intercession, and seeking God\'s presence together.',
      details: 'Our Tuesday morning Prayer Group is a powerful time of coming together to seek God\'s face and intercede for our church, community, and world. We believe in the power of prayer and have seen God move in incredible ways through our times of united prayer. This gathering is open to anyone who wants to develop their prayer life and join with others in bringing needs before the Lord. We pray for personal needs, church vision, community concerns, and global missions.'
    },
    {
      title: 'Blokes Time Out',
      time: 'Varies',
      date: '4th Monday of Every Month',
      image: 'https://i.postimg.cc/YC9XPcJk/Blokes-night-out.jpg',
      category: 'Fellowship',
      description: 'A monthly gathering for men to connect, relax, and build genuine friendships.',
      details: 'Blokes Time Out is a casual monthly event designed specifically for men to take a break from the busyness of life and connect with other guys in a relaxed, judgment-free environment. Each month we do something different - whether it\'s a BBQ, watching sports, going fishing, working on a community project, or just hanging out over coffee. There\'s no pressure, no agenda - just good company and the opportunity to be yourself. All ages of men are welcome.'
    },
    {
      title: 'Women\'s Fellowship',
      time: '10:00 AM',
      date: '3rd Friday/Saturday of Every Month',
      image: 'https://i.postimg.cc/7hnBFqxj/Ladies-Fellowship.jpg',
      category: 'Fellowship',
      description: 'A supportive community for women to grow in faith and friendship.',
      details: 'Women\'s Fellowship is a vibrant community of women from all walks of life who gather monthly to encourage one another, grow in faith, and build lasting friendships. Each gathering includes time for connection over refreshments, a devotional or teaching time, prayer, and often a creative activity or discussion. This is a safe space where women can be real about their struggles and celebrations, share wisdom and life experiences, and find support in their spiritual journey. The day varies between Fridays and Saturdays to accommodate different schedules.'
    },
    {
      title: 'Chinese Fellowship Service',
      time: '1:30 PM',
      date: 'Sundays',
      image: 'https://i.postimg.cc/8PkfdT6V/Chinese-Church-2.jpg',
      category: 'Worship',
      description: 'A worship service conducted in Mandarin Chinese for our Chinese-speaking community.',
      details: 'Our Chinese Fellowship Service is a warm and welcoming gathering for Mandarin-speaking believers and those interested in Chinese culture. The service is conducted primarily in Mandarin and includes worship through traditional and contemporary Chinese Christian songs, prayer, Bible teaching, and fellowship. This service provides a spiritual home for Chinese-speaking Christians and celebrates our cultural heritage while focusing on the universal message of Jesus Christ.',
      chinese: {
        title: '中文团契礼拜',
        details: '我们的中文团契礼拜是一个温暖欢迎的聚会，专为讲普通话的信徒和对中国文化感兴趣的人士而设。礼拜主要以普通话进行，包括传统和当代中国基督教歌曲的敬拜、祷告、圣经教导和团契交流。这个礼拜为讲中文的基督徒提供了一个属灵的家园，也为那些更习惯用母语敬拜的人搭建了桥梁。我们在庆祝文化传统的同时，专注于耶稣基督的普世信息。'
      }
    },
    {
      title: 'Op Shop',
      time: '9:30 AM - 12:30 PM',
      date: 'Tuesday & Wednesday',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&q=90',
      category: 'Community',
      description: 'Quality second-hand goods at great prices while supporting our community outreach programs.',
      details: 'Our Op Shop is more than just a thrift store - it\'s a ministry that serves our local community by providing affordable clothing, household items, books, and more. All proceeds go towards supporting our church\'s outreach programs and helping those in need. The Op Shop is also a great place to volunteer and meet new people while making a difference in the community. We accept donations during opening hours and are always grateful for quality items.'
    },
    {
      title: 'Kids Space',
      time: 'During Sunday Service',
      date: 'Every Sunday',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop&q=90',
      category: 'Kids Ministry',
      description: 'Fun, safe, and engaging programs for children to learn about God\'s love.',
      details: 'Kids Space is our vibrant children\'s ministry designed for ages 3-12. Every Sunday, while adults are in the main service, children enjoy age-appropriate Bible lessons, interactive games, crafts, and worship songs designed just for them. Our trained and background-checked volunteers create a safe, fun environment where kids can learn about Jesus, make friends, and grow in their faith. We have separate programs for preschoolers and primary school children to ensure content is perfectly suited to their developmental stage.'
    }
  ];

  const features = [
    {
      icon: <HeartIcon />,
      title: 'Loving Community',
      description: 'Experience genuine love and support in our church family.'
    },
    {
      icon: <BookOpenIcon />,
      title: 'Biblical Teaching',
      description: 'Grow in your faith through solid, biblical teaching and preaching.'
    },
    {
      icon: <UsersIcon />,
      title: 'Life Groups',
      description: 'Connect with others through small groups and meaningful relationships.'
    }
  ];

  return (
    <div style={styles.globalContainer}>
      <style>{animationStyles}</style>

      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <a href="#home" style={styles.logo}>
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

      <section id="home" style={styles.hero}>
        <div style={styles.heroBackground}>
          <div style={styles.heroOverlay}></div>
        </div>
        <div style={{ ...styles.heroContent, animation: 'fadeInUp 1.2s ease-out' }}>
          <div>
            <h1 style={styles.heroTitle}>Welcome Home</h1>
            <p style={styles.heroSubtitle}>
              Bringing people to Jesus and being transformed into his passionate disciples.
              Join our loving church family at Hallett Cove Baptist Church.
            </p>
          </div>
          <div style={styles.heroButtons}>
            <a 
              href="#about" 
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
                ...(hoveredButton === 'primary' && styles.btnPrimaryHover)
              }}
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <PlayIcon />
              Watch Online
            </a>
            <a 
              href="#events" 
              style={{
                ...styles.btn,
                ...styles.btnOutline,
                ...(hoveredButton === 'outline' && styles.btnOutlineHover)
              }}
              onMouseEnter={() => setHoveredButton('outline')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <CalendarIcon />
              Join Us Sunday
            </a>
          </div>
        </div>
        <div style={{ ...styles.heroScroll, animation: 'bounce 2s infinite' }}>
          <span>Scroll to explore</span>
        </div>
      </section>

      <section style={styles.featuresSection}>
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
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={styles.welcomeSection}>
        <div style={styles.welcomeContent}>
          <div style={styles.welcomeText}>
            <h2 style={styles.welcomeTitle}>One Church, One Mission</h2>
            <p style={styles.welcomeLead}>
              At Hallett Cove Baptist Church, we believe that God has called us to be a beacon of hope 
              in our community. We're passionate about creating an environment where people can encounter 
              the love of Jesus Christ and grow in their faith journey.
            </p>
            <p style={styles.welcomeParagraph}>
              Our heart is to welcome everyone - regardless of where you are in life - and help you 
              discover the incredible plan God has for you. We're more than just a church; we're a 
              family committed to loving God and loving people.
            </p>
            <a 
              href="#contact" 
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
                ...(hoveredButton === 'visit' && styles.btnPrimaryHover)
              }}
              onMouseEnter={() => setHoveredButton('visit')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Visit Us This Sunday
            </a>
          </div>
          <div style={{ animation: 'slideInRight 1s ease-out 0.6s both' }}>
            <div style={styles.pastorCard}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <img 
                  src="https://i.postimg.cc/5NGYCj38/image0-scaled-1-150x150.jpg" 
                  alt="Pastor David Chambers" 
                  style={styles.pastorImage}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  Pastor David Chambers
                </h3>
                <p style={{ color: '#2474CE', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Senior Pastor
                </p>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1rem' }}>
                  Pastor David has been faithfully serving our community for over 15 years. His heart 
                  for teaching God's Word and caring for people has helped shape HCBC into the loving 
                  church family it is today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" style={styles.eventsSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Join Us This Week
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
            We have something for everyone! Come and be part of our church community 
            through worship, study, fellowship, and service.
          </p>
        </div>
        <div style={styles.eventsGrid}>
          {events.map((event, index) => (
            <div 
              key={index} 
              style={{
                ...styles.eventCard,
                ...(hoveredCard === index && styles.eventCardHover)
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedEvent(event)}
            >
              <div style={styles.eventImageContainer}>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  style={{
                    ...styles.eventImage,
                    ...(hoveredCard === index && styles.eventImageHover)
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  zIndex: 2
                }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #2474CE, #1e5ba8)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '30px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 6px 20px rgba(36, 116, 206, 0.4)'
                  }}>
                    {event.category}
                  </span>
                </div>
              </div>
              <div style={styles.eventContent}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a', lineHeight: 1.3 }}>
                  {event.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: '#888', fontWeight: 600 }}>
                  <ClockIcon />
                  <span>{event.date} at {event.time}</span>
                </div>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1rem' }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}

      <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Visit Us
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
            We'd love to meet you! Here's how you can connect with us and find our church home.
          </p>
        </div>
        <div style={styles.contactGrid}>
          <div style={styles.contactInfo}>
            <div 
              style={{
                ...styles.contactItem,
                ...(hoveredCard === 'contact1' && styles.contactItemHover)
              }}
              onMouseEnter={() => setHoveredCard('contact1')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.contactIcon}>
                <MapPinIcon />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  Our Location
                </h3>
                <p style={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                  1 Ramrod Ave<br />Hallett Cove SA 5158
                </p>
              </div>
            </div>
            <div 
              style={{
                ...styles.contactItem,
                ...(hoveredCard === 'contact2' && styles.contactItemHover)
              }}
              onMouseEnter={() => setHoveredCard('contact2')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.contactIcon}>
                <PhoneIcon />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  Call Us
                </h3>
                <a href="tel:0406295962" style={{ color: '#555', textDecoration: 'none', lineHeight: 1.7, fontSize: '1.1rem' }}>
                  0406 295 962
                </a>
              </div>
            </div>
            <div 
              style={{
                ...styles.contactItem,
                ...(hoveredCard === 'contact3' && styles.contactItemHover)
              }}
              onMouseEnter={() => setHoveredCard('contact3')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.contactIcon}>
                <MailIcon />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  Email Us
                </h3>
                <a href="mailto:hcbcc.office@gmail.com" style={{ color: '#555', textDecoration: 'none', lineHeight: 1.7, fontSize: '1.1rem' }}>
                  hcbcc.office@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div style={styles.mapContainer}>
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