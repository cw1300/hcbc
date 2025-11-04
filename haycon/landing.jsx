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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About Jesus', href: '#about-jesus', onClick: () => setCurrentPage('about-jesus') },
    { name: 'Sermons', href: '#sermons', onClick: () => setCurrentPage('sermons') },
    { name: 'Newsletter', href: '#newsletter', onClick: () => setCurrentPage('newsletter') },
    { name: 'Contact', href: '#contact', onClick: () => setCurrentPage('contact') }
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
      time: '7:00 PM',
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
    <div className="landing-page">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo">
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

      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome Home</h1>
            <p className="hero-subtitle">
              Bringing people to Jesus and being transformed into his passionate disciples.
              Join our loving church family at Hallett Cove Baptist Church.
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">
              <PlayIcon />
              Watch Online
            </a>
            <a href="#events" className="btn btn-outline">
              <CalendarIcon />
              Join Us Sunday
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
        </div>
      </section>

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

      <section id="about" className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2>One Church, One Mission</h2>
              <p className="lead">
                At Hallett Cove Baptist Church, we believe that God has called us to be a beacon of hope 
                in our community. We're passionate about creating an environment where people can encounter 
                the love of Jesus Christ and grow in their faith journey.
              </p>
              <p>
                Our heart is to welcome everyone - regardless of where you are in life - and help you 
                discover the incredible plan God has for you. We're more than just a church; we're a 
                family committed to loving God and loving people.
              </p>
              <a href="#contact" className="btn btn-primary">Visit Us This Sunday</a>
            </div>
            <div className="pastor-section">
              <div className="pastor-card">
                <div className="pastor-image-container">
                  <img 
                    src="https://i.postimg.cc/5NGYCj38/image0-scaled-1-150x150.jpg" 
                    alt="Pastor David Chambers" 
                    className="pastor-image"
                  />
                </div>
                <div className="pastor-info">
                  <h3 className="pastor-name">Pastor David Chambers</h3>
                  <p className="pastor-title">Senior Pastor</p>
                  <p className="pastor-bio">
                    Pastor David has been faithfully serving our community for over 15 years. His heart 
                    for teaching God's Word and caring for people has helped shape HCBC into the loving 
                    church family it is today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="events-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Join Us This Week</h2>
            <p className="section-subtitle">
              We have something for everyone! Come and be part of our church community 
              through worship, study, fellowship, and service.
            </p>
          </div>
          <div className="events-grid">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="event-card"
                onClick={() => setSelectedEvent(event)}
                style={{ cursor: 'pointer' }}
              >
                <div className="event-image-container">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div className="event-overlay">
                    <span className="event-category">{event.category}</span>
                  </div>
                </div>
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-time">
                    <ClockIcon />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">
              We'd love to meet you! Here's how you can connect with us and find our church home.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPinIcon />
                </div>
                <div className="contact-details">
                  <h3>Our Location</h3>
                  <p>1 Ramrod Ave<br />Hallett Cove SA 5158</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <PhoneIcon />
                </div>
                <div className="contact-details">
                  <h3>Call Us</h3>
                  <a href="tel:0406295962">0406 295 962</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MailIcon />
                </div>
                <div className="contact-details">
                  <h3>Email Us</h3>
                  <a href="mailto:hcbcc.office@gmail.com">hcbcc.office@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.207598909098!2d138.5158954119569!3d-35.07654537267501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0d8f7e3a7199d%3A0xbb55ae1be62b6c46!2s1%20Ramrod%20Ave%2C%20Hallett%20Cove%20SA%205158!5e0!3m2!1sen!2sau!4v1757777136309!5m2!1sen!2sau" 
                width="100%" 
                height="600" 
                style={{border: 0, borderRadius: '25px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hallett Cove Baptist Church Location"
              />
            </div>
          </div>
        </div>
      </section>

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