var CHURCH_EMAIL = 'hcbcc.office@gmail.com';

var Contact = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const isMobile = useIsMobile();

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

    // The site has no server to send mail from, so open the visitor's email app
    // with the message filled in, addressed to the church office.
    const bodyLines = [`Name: ${formData.name}`, `Email: ${formData.email}`];
    if (formData.phone) bodyLines.push(`Phone: ${formData.phone}`);
    bodyLines.push('', formData.message);

    const subject = `Website enquiry from ${formData.name}`;
    window.location.href = `mailto:${CHURCH_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 8000);
  };

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
  };

  return (
    <div style={styles.page}>
      {/* Navigation */}
      <SiteNav activePage="contact" setCurrentPage={setCurrentPage} />

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
                    Your email app should now open with your message ready to send.
                    If it doesn't, please email us at {CHURCH_EMAIL}.
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
      <SiteFooter />
    </div>
  );
};
