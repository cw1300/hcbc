// "Every Sunday at 10:00 AM"; drops the "at ..." part when an event has no set time
var formatEventTime = (event) => (event.time ? `${event.date} at ${event.time}` : event.date);

var EventModal = ({ event, onClose }) => {
  const [language, setLanguage] = useState('en');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
        <button type="button" onClick={onClose} aria-label="Close" style={{
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
            <span>{formatEventTime(event)}</span>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
            {event.chinese && language === 'zh' ? event.chinese.details : event.details}
          </p>
        </div>
      </div>
    </div>
  );
};

var LandingPage = ({ setCurrentPage }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const isMobile = useIsMobile();

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
  };

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
      <SiteNav activePage="home" setCurrentPage={setCurrentPage} />

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
              href="#sermons"
              onClick={(e) => { e.preventDefault(); setCurrentPage('sermons'); }}
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
                  <span>{formatEventTime(event)}</span>
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

      <SiteFooter />
    </div>
  );
};
