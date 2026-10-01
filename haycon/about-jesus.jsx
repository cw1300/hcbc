var AboutJesus = ({ setCurrentPage }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredVerse, setHoveredVerse] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <HeartIcon />,
      title: "God's Love",
      description: "Jesus demonstrated the ultimate love by giving His life for us, showing that God loves each person deeply and personally."
    },
    {
      icon: <CrossIcon size={24} />,
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
  };

  return (
    <div style={styles.page}>
      {/* Navigation */}
      <SiteNav activePage="about-jesus" setCurrentPage={setCurrentPage} />

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
                onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
              >
                Visit Us This Sunday
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
