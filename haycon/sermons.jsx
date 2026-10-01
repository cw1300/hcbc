var Sermons = ({ setCurrentPage }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const isMobile = useIsMobile();

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
  };

  return (
    <div style={styles.page}>
      {/* Navigation */}
      <SiteNav activePage="sermons" setCurrentPage={setCurrentPage} />

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
              Click on any sermon to watch it, or visit our YouTube channel for our complete sermon library.
            </p>
          </div>

          <div style={styles.sermonsGrid}>
            {sermons.map((sermon, index) => (
              <div
                key={sermon.id}
                style={{
                  ...styles.sermonCard,
                  ...(hoveredCard === index && styles.sermonCardHover)
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <a
                  href={sermon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch "${sermon.title}" on YouTube`}
                  style={{ ...styles.sermonThumbnail, display: 'block' }}
                >
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
                </a>
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
      <SiteFooter />
    </div>
  );
};
