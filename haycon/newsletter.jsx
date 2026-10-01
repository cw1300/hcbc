var Newsletter = ({ setCurrentPage }) => {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [error, setError] = useState('');
  const [hoveredBubble, setHoveredBubble] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const isMobile = useIsMobile();

  const HARDCODED_CODE = 'HBC123';

  useEffect(() => {
    // Check if user was previously authenticated (storage can be blocked, e.g. private browsing)
    try {
      if (localStorage.getItem('newsletterAuth') === 'true') {
        setIsAuthenticated(true);
      }
    } catch (err) {
      // Ignore - the visitor just enters the code again
    }
  }, []);

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (codeInput === HARDCODED_CODE) {
      setIsAuthenticated(true);
      try {
        localStorage.setItem('newsletterAuth', 'true');
      } catch (err) {
        // Ignore - access still works for this visit
      }
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
      title: "Newsletter - 27/8/2025",
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

  const openPDF = (newsletter) => setSelectedPDF(newsletter);
  const closePDF = () => setSelectedPDF(null);

  // Lock page scroll and allow Escape to close while a newsletter is open
  useEffect(() => {
    if (!selectedPDF) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePDF();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPDF]);

  // Inline styles
  const styles = {
    page: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: 1.6,
      color: '#1a1a1a',
      backgroundColor: '#ffffff',
      overflowX: 'hidden',
      width: '100%',
      minHeight: '100vh'
    },

    // Authentication styles
    authOverlay: {
      position: 'fixed',
      top: '80px',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(41, 128, 185, 0.95) 0%, rgba(52, 73, 94, 0.95) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      padding: '20px'
    },

    authContainer: {
      background: 'white',
      borderRadius: '16px',
      padding: '48px 40px',
      maxWidth: '450px',
      width: '100%',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
      animation: 'fadeInUp 0.5s ease-out'
    },

    authIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80px',
      height: '80px',
      margin: '0 auto 24px',
      background: 'linear-gradient(135deg, #2980b9 0%, #3498db 100%)',
      borderRadius: '50%',
      color: 'white'
    },

    authTitle: {
      fontSize: '28px',
      fontWeight: 700,
      color: '#2c3e50',
      marginBottom: '12px'
    },

    authDescription: {
      fontSize: '16px',
      color: '#7f8c8d',
      marginBottom: '32px',
      lineHeight: 1.6
    },

    authForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },

    authInput: {
      width: '100%',
      padding: '16px 20px',
      fontSize: '16px',
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      outline: 'none',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      letterSpacing: '2px',
      fontWeight: 600,
      textTransform: 'uppercase',
      boxSizing: 'border-box'
    },

    authInputFocus: {
      borderColor: '#3498db',
      boxShadow: '0 0 0 4px rgba(52, 152, 219, 0.1)'
    },

    authError: {
      color: '#e74c3c',
      fontSize: '14px',
      margin: '-8px 0 0 0',
      fontWeight: 500,
      animation: 'shake 0.4s ease-in-out'
    },

    authButton: {
      width: '100%',
      padding: '16px 24px',
      fontSize: '16px',
      fontWeight: 600,
      color: 'white',
      background: 'linear-gradient(135deg, #2980b9 0%, #3498db 100%)',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },

    authButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(52, 152, 219, 0.3)'
    },

    // Newsletter hero styles
    newsletterHero: {
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
        url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=1080&fit=crop&q=90') center/cover no-repeat`,
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

    // Newsletter content styles
    newsletterContent: {
      padding: isMobile ? '5rem 1rem' : '8rem 2rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      minHeight: '400px'
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

    newslettersGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? '2rem' : '3rem',
      maxWidth: '1400px',
      margin: '3rem auto 0',
      ...(isMobile && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      })
    },

    newsletterBubble: {
      background: 'white',
      borderRadius: '25px',
      padding: '3rem 2rem',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)',
      border: '2px solid rgba(36, 116, 206, 0.08)',
      position: 'relative',
      overflow: 'hidden',
      ...(isMobile && {
        maxWidth: '400px',
        width: '100%'
      })
    },

    newsletterBubbleHover: {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
      borderColor: 'rgba(36, 116, 206, 0.3)'
    },

    newsletterIcon: {
      background: 'linear-gradient(135deg, #2474CE, #1e5ba8)',
      color: 'white',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      boxShadow: '0 8px 25px rgba(36, 116, 206, 0.3)',
      position: 'relative',
      zIndex: 2
    },

    newsletterTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: '0.5rem',
      position: 'relative',
      zIndex: 2
    },

    newsletterDate: {
      color: '#555',
      fontSize: '1rem',
      marginBottom: '1rem',
      position: 'relative',
      zIndex: 2
    },

    newsletterCta: {
      color: '#2474CE',
      fontWeight: 600,
      fontSize: '0.95rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      position: 'relative',
      zIndex: 2
    },

    // PDF Modal styles
    pdfModal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '2rem',
      animation: 'fadeIn 0.3s ease'
    },

    pdfModalContent: {
      background: 'white',
      borderRadius: '20px',
      width: '100%',
      maxWidth: '1200px',
      height: isMobile ? '85vh' : '90vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
      animation: 'slideUp 0.3s ease'
    },

    pdfCloseBtn: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: '#2474CE',
      color: 'white',
      border: 'none',
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(36, 116, 206, 0.4)'
    },

    pdfCloseBtnHover: {
      background: '#1e5ba8',
      transform: 'rotate(90deg) scale(1.1)'
    },

    pdfModalTitle: {
      padding: isMobile ? '1.5rem 3rem 1rem 1.5rem' : '2rem 2rem 1rem',
      fontSize: isMobile ? '1.4rem' : '1.8rem',
      fontWeight: 700,
      color: '#1a1a1a',
      borderBottom: '2px solid #e9ecef'
    },
  };

  // Show authentication screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div style={styles.page}>
        {/* Navigation */}
        <SiteNav activePage="newsletter" setCurrentPage={setCurrentPage} />

        {/* Authentication Screen */}
        <div style={styles.authOverlay}>
          <div style={styles.authContainer}>
            <div style={styles.authIcon}>
              <LockIcon />
            </div>
            <h2 style={styles.authTitle}>Newsletter Access</h2>
            <p style={styles.authDescription}>
              Please enter the access code to view our church newsletters.
            </p>
            <form onSubmit={handleCodeSubmit} style={styles.authForm}>
              <input
                type="text"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
                placeholder="Enter access code"
                aria-label="Access code"
                style={{
                  ...styles.authInput,
                  ...(isCodeFocused && styles.authInputFocus)
                }}
                onFocus={() => setIsCodeFocused(true)}
                onBlur={() => setIsCodeFocused(false)}
                autoFocus
              />
              {error && <p style={styles.authError}>{error}</p>}
              <button
                type="submit"
                style={{
                  ...styles.authButton,
                  ...(hoveredButton === 'auth' && styles.authButtonHover)
                }}
                onMouseEnter={() => setHoveredButton('auth')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Submit Code
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <SiteFooter />
      </div>
    );
  }

  // Show newsletter content if authenticated
  return (
    <div style={styles.page}>
      {/* Navigation */}
      <SiteNav activePage="newsletter" setCurrentPage={setCurrentPage} />

      {/* Hero Section */}
      <section style={styles.newsletterHero}>
        <div style={styles.heroBackground}>
          <div style={styles.heroOverlay}></div>
        </div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Newsletter</h1>
          <p style={styles.heroSubtitle}>
            Stay connected with our church family and receive updates on upcoming events,
            messages, and news from Hallett Cove Baptist Church.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={styles.newsletterContent}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              Past Newsletters
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
              Catch up on our latest church newsletters and stay informed about what's happening in our community.
            </p>
          </div>

          <div style={styles.newslettersGrid}>
            {newsletters.map((newsletter) => (
              <div
                key={newsletter.id}
                style={{
                  ...styles.newsletterBubble,
                  ...(hoveredBubble === newsletter.id && styles.newsletterBubbleHover)
                }}
                onMouseEnter={() => setHoveredBubble(newsletter.id)}
                onMouseLeave={() => setHoveredBubble(null)}
                onClick={() => openPDF(newsletter)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(36, 116, 206, 0.05), transparent)',
                  opacity: hoveredBubble === newsletter.id ? 1 : 0,
                  transition: 'opacity 0.4s ease'
                }}></div>

                <div style={styles.newsletterIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <h3 style={styles.newsletterTitle}>{newsletter.title}</h3>
                <p style={styles.newsletterDate}>{newsletter.date}</p>
                <div style={styles.newsletterCta}>Click to View</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedPDF && (
        <div style={styles.pdfModal} onClick={closePDF}>
          <div style={styles.pdfModalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close newsletter"
              style={{
                ...styles.pdfCloseBtn,
                ...(hoveredButton === 'close' && styles.pdfCloseBtnHover)
              }}
              onMouseEnter={() => setHoveredButton('close')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={closePDF}
            >
              <XIcon />
            </button>
            <h3 style={styles.pdfModalTitle}>{selectedPDF.title}</h3>
            <iframe
              src={selectedPDF.url}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0 0 20px 20px', flex: 1 }}
              title={selectedPDF.title}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <SiteFooter />
    </div>
  );
};
