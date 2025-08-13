// Pronto Waste Removal - Ultra Premium Landing Page

const Landing = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    const [activeService, setActiveService] = React.useState(0);
    const [bookingStep, setBookingStep] = React.useState(0);
    const [selectedService, setSelectedService] = React.useState(null);
    const [formData, setFormData] = React.useState({});
    const [particles, setParticles] = React.useState([]);
    const [showBooking, setShowBooking] = React.useState(false);
    const [loadingProgress, setLoadingProgress] = React.useState(0);

    React.useEffect(() => {
        // Initial loading animation
        const loadTimer = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(loadTimer);
                    return 100;
                }
                return prev + 2;
            });
        }, 20);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Generate floating particles
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                });
            }
            setParticles(newParticles);
        };
        generateParticles();

        // Auto-rotate services
        const interval = setInterval(() => {
            setActiveService(prev => (prev + 1) % 4);
        }, 4000);

        // Booking process animation
        const bookingInterval = setInterval(() => {
            setBookingStep(prev => (prev + 1) % 5);
        }, 2000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
            clearInterval(bookingInterval);
            clearInterval(loadTimer);
        };
    }, []);

    const services = [
        { 
            icon: '🏗️', 
            title: 'Construction', 
            desc: 'Heavy debris & materials',
            price: 'From $299',
            features: ['Same day service', 'Heavy machinery', 'Site cleanup']
        },
        { 
            icon: '🏠', 
            title: 'Residential', 
            desc: 'Home & garden waste',
            price: 'From $149',
            features: ['Furniture removal', 'Garden waste', 'House cleanouts']
        },
        { 
            icon: '🏢', 
            title: 'Commercial', 
            desc: 'Office & retail spaces',
            price: 'From $399',
            features: ['After hours service', 'Regular contracts', 'Recycling reports']
        },
        { 
            icon: '♻️', 
            title: 'Eco Disposal', 
            desc: 'Green waste solutions',
            price: 'From $199',
            features: ['100% recycled', 'Certificates provided', 'Carbon neutral']
        }
    ];

    const bookingSteps = [
        { step: 1, title: 'Select Service', icon: '📋', color: '#dc2626' },
        { step: 2, title: 'Choose Date', icon: '📅', color: '#ef4444' },
        { step: 3, title: 'Get Quote', icon: '💰', color: '#f87171' },
        { step: 4, title: 'Confirm', icon: '✓', color: '#fca5a5' },
        { step: 5, title: 'Service Done', icon: '🎉', color: '#ffffff' }
    ];

    // Loading Screen
    if (loadingProgress < 100) {
        return (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#000000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
            }}>
                <div style={{
                    fontSize: '4rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #ffffff 0%, #dc2626 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '2rem',
                    animation: 'pulse 1s ease infinite',
                }}>
                    PRONTO
                </div>
                <div style={{
                    width: '300px',
                    height: '2px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                }}>
                    <div style={{
                        width: `${loadingProgress}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 100%)',
                        transition: 'width 0.3s ease',
                        boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
                    }}/>
                </div>
                <div style={{
                    marginTop: '1rem',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '0.9rem',
                    letterSpacing: '2px',
                }}>
                    LOADING {loadingProgress}%
                </div>
            </div>
        );
    }

    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        background: scrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(220, 38, 38, 0.2)' : 'none',
        zIndex: 1000,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
    };

    return (
        <>
            {/* Floating Particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    style={{
                        position: 'fixed',
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        background: '#dc2626',
                        borderRadius: '50%',
                        opacity: 0.3,
                        pointerEvents: 'none',
                        zIndex: 1,
                        animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
                    }}
                />
            ))}

            {/* Navigation */}
            <nav style={navStyle}>
                <div className="container" style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    <img 
                        src="https://i.postimg.cc/tRVtBfs9/Screenshot-2025-08-13-at-12-59-00-AM.png" 
                        alt="Pronto"
                        style={{
                            height: '70px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1) rotate(-5deg)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1) rotate(0)'}
                    />

                    <div style={{ 
                        display: 'flex', 
                        gap: '2rem', 
                        alignItems: 'center',
                    }}>
                        {['Services', 'Process', 'Gallery', 'Contact'].map((item, idx) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                style={{
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    padding: '0.5rem 1rem',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#dc2626';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = '#ffffff';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                {item}
                                <span style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    background: '#dc2626',
                                    transform: 'translateX(-100%)',
                                    transition: 'transform 0.3s ease',
                                }}/>
                            </a>
                        ))}
                        <button
                            onClick={() => setShowBooking(true)}
                            style={{
                                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '0.8rem 2rem',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                borderRadius: '30px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 5px 20px rgba(220, 38, 38, 0.3)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.5)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 5px 20px rgba(220, 38, 38, 0.3)';
                            }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)',
                overflow: 'hidden',
            }}>
                {/* Animated Background Mesh */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.15) 0%, transparent 50%)`,
                    pointerEvents: 'none',
                    transition: 'background 0.3s ease',
                }}/>

                {/* 3D Grid */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px',
                    transform: `perspective(1000px) rotateX(60deg) translateY(-50%) translateZ(0)`,
                    transformOrigin: 'center',
                    opacity: 0.5,
                }}/>

                <div style={{
                    textAlign: 'center',
                    zIndex: 1,
                    maxWidth: '1200px',
                    padding: '0 2rem',
                }}>
                    {/* Animated Title */}
                    <div style={{
                        marginBottom: '2rem',
                        animation: 'fadeInDown 1s ease',
                    }}>
                        <h1 style={{
                            fontSize: 'clamp(4rem, 10vw, 8rem)',
                            fontWeight: '900',
                            letterSpacing: '-4px',
                            marginBottom: '0',
                            position: 'relative',
                            display: 'inline-block',
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #dc2626 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block',
                                animation: 'gradientShift 3s ease infinite',
                            }}>
                                PRONTO
                            </span>
                        </h1>
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: '300',
                            letterSpacing: '15px',
                            textTransform: 'uppercase',
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginTop: '-1rem',
                            animation: 'fadeInUp 1s ease 0.3s both',
                        }}>
                            Waste Removal
                        </div>
                    </div>

                    {/* Animated Tagline */}
                    <p style={{
                        fontSize: '1.3rem',
                        color: 'rgba(255, 255, 255, 0.5)',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.8',
                        animation: 'fadeInUp 1s ease 0.6s both',
                    }}>
                        Brisbane's most trusted waste management. 
                        <span style={{ color: '#dc2626', fontWeight: '600' }}> Lightning fast. </span>
                        Crystal clean. 
                        <span style={{ color: '#dc2626', fontWeight: '600' }}> Zero hassle.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        justifyContent: 'center',
                        animation: 'fadeInUp 1s ease 0.9s both',
                    }}>
                        <button 
                            onClick={() => setShowBooking(true)}
                            style={{
                                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '1.3rem 3.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                borderRadius: '50px',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-5px) scale(1.05)';
                                e.target.style.boxShadow = '0 25px 50px rgba(220, 38, 38, 0.4)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0) scale(1)';
                                e.target.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.3)';
                            }}
                        >
                            <span style={{ position: 'relative', zIndex: 1 }}>Get Instant Quote</span>
                        </button>

                        <button 
                            style={{
                                background: 'transparent',
                                color: '#ffffff',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                padding: '1.3rem 3.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                borderRadius: '50px',
                                transition: 'all 0.4s ease',
                                backdropFilter: 'blur(10px)',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.borderColor = '#dc2626';
                                e.target.style.background = 'rgba(220, 38, 38, 0.1)';
                                e.target.style.transform = 'translateY(-3px)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                e.target.style.background = 'transparent';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Watch Video
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '4rem',
                        marginTop: '5rem',
                        animation: 'fadeInUp 1s ease 1.2s both',
                    }}>
                        {[
                            { value: '24/7', label: 'Available' },
                            { value: '30min', label: 'Response' },
                            { value: '5★', label: 'Rating' },
                        ].map((stat, idx) => (
                            <div key={idx} style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2rem',
                                    fontWeight: '800',
                                    color: '#dc2626',
                                    marginBottom: '0.3rem',
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: 'rgba(255, 255, 255, 0.4)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animated Scroll Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s ease-in-out infinite',
                }}>
                    <div style={{
                        width: '35px',
                        height: '60px',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '30px',
                        position: 'relative',
                        cursor: 'pointer',
                    }}>
                        <div style={{
                            width: '6px',
                            height: '15px',
                            background: 'linear-gradient(180deg, #dc2626 0%, transparent 100%)',
                            borderRadius: '3px',
                            position: 'absolute',
                            top: '10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            animation: 'scrollWheel 1.5s ease-in-out infinite',
                        }}/>
                    </div>
                </div>
            </section>

            {/* Booking Process Visualization */}
            <section id="process" className="section-padding" style={{ 
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        letterSpacing: '-2px',
                    }}>
                        How It <span style={{ color: '#dc2626' }}>Works</span>
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: '1.2rem',
                        marginBottom: '5rem',
                    }}>
                        From booking to completion in 5 simple steps
                    </p>

                    {/* Animated Process Flow */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        position: 'relative',
                    }}>
                        {/* Connection Line */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10%',
                            right: '10%',
                            height: '2px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            zIndex: 0,
                        }}>
                            <div style={{
                                width: `${(bookingStep + 1) * 20}%`,
                                height: '100%',
                                background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 100%)',
                                transition: 'width 0.5s ease',
                                boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
                            }}/>
                        </div>

                        {bookingSteps.map((step, idx) => (
                            <div
                                key={idx}
                                style={{
                                    textAlign: 'center',
                                    zIndex: 1,
                                    flex: 1,
                                    opacity: idx <= bookingStep ? 1 : 0.3,
                                    transform: idx <= bookingStep ? 'scale(1)' : 'scale(0.9)',
                                    transition: 'all 0.5s ease',
                                }}
                            >
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    margin: '0 auto 1rem',
                                    background: idx <= bookingStep 
                                        ? `linear-gradient(135deg, ${step.color} 0%, ${step.color}aa 100%)`
                                        : 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    border: idx === bookingStep ? '3px solid #dc2626' : 'none',
                                    boxShadow: idx === bookingStep ? '0 0 40px rgba(220, 38, 38, 0.5)' : 'none',
                                    animation: idx === bookingStep ? 'pulse 2s ease infinite' : 'none',
                                    position: 'relative',
                                }}>
                                    {step.icon}
                                    {idx === bookingStep && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-5px',
                                            right: '-5px',
                                            width: '20px',
                                            height: '20px',
                                            background: '#dc2626',
                                            borderRadius: '50%',
                                            animation: 'pulse 1s ease infinite',
                                        }}/>
                                    )}
                                </div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    color: idx <= bookingStep ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                                    marginBottom: '0.3rem',
                                    fontWeight: '700',
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'rgba(255, 255, 255, 0.4)',
                                }}>
                                    Step {step.step}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Interactive Demo Button */}
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <button
                            onClick={() => setShowBooking(true)}
                            style={{
                                background: 'rgba(220, 38, 38, 0.1)',
                                color: '#dc2626',
                                border: '2px solid #dc2626',
                                padding: '1rem 2.5rem',
                                fontSize: '1rem',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                borderRadius: '30px',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = '#dc2626';
                                e.target.style.color = '#ffffff';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'rgba(220, 38, 38, 0.1)';
                                e.target.style.color = '#dc2626';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Try Interactive Booking
                        </button>
                    </div>
                </div>
            </section>

            {/* Premium Services Grid */}
            <section id="services" className="section-padding" style={{ 
                background: '#000000',
                position: 'relative',
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        textAlign: 'center',
                        marginBottom: '5rem',
                        letterSpacing: '-2px',
                    }}>
                        Premium <span style={{ color: '#dc2626' }}>Services</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                    }}>
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: activeService === idx 
                                        ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)'
                                        : 'rgba(255, 255, 255, 0.02)',
                                    border: activeService === idx 
                                        ? '2px solid #dc2626' 
                                        : '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '20px',
                                    padding: '2.5rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transform: activeService === idx ? 'scale(1.05)' : 'scale(1)',
                                }}
                                onMouseEnter={() => setActiveService(idx)}
                            >
                                {/* Animated Background Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-100%',
                                    left: '-100%',
                                    width: '300%',
                                    height: '300%',
                                    background: 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
                                    opacity: activeService === idx ? 1 : 0,
                                    transition: 'opacity 0.5s ease',
                                    animation: activeService === idx ? 'rotate 10s linear infinite' : 'none',
                                }}/>

                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{
                                        fontSize: '3rem',
                                        marginBottom: '1.5rem',
                                        filter: activeService === idx ? 'grayscale(0)' : 'grayscale(1)',
                                        transition: 'filter 0.3s ease',
                                    }}>
                                        {service.icon}
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        marginBottom: '0.5rem',
                                        color: activeService === idx ? '#dc2626' : '#ffffff',
                                        transition: 'color 0.3s ease',
                                    }}>
                                        {service.title}
                                    </h3>

                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.5)',
                                        marginBottom: '1rem',
                                    }}>
                                        {service.desc}
                                    </p>

                                    <div style={{
                                        fontSize: '2rem',
                                        fontWeight: '800',
                                        color: '#dc2626',
                                        marginBottom: '1.5rem',
                                    }}>
                                        {service.price}
                                    </div>

                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                    }}>
                                        {service.features.map((feature, fidx) => (
                                            <li key={fidx} style={{
                                                padding: '0.5rem 0',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                opacity: activeService === idx ? 1 : 0.5,
                                                transform: activeService === idx ? 'translateX(0)' : 'translateX(-10px)',
                                                transition: `all 0.3s ease ${fidx * 0.1}s`,
                                            }}>
                                                <span style={{
                                                    color: '#dc2626',
                                                    marginRight: '0.5rem',
                                                }}>→</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => {
                                            setSelectedService(service);
                                            setShowBooking(true);
                                        }}
                                        style={{
                                            marginTop: '1.5rem',
                                            width: '100%',
                                            background: activeService === idx 
                                                ? 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)'
                                                : 'transparent',
                                            color: activeService === idx ? '#ffffff' : '#dc2626',
                                            border: activeService === idx ? 'none' : '2px solid #dc2626',
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            fontWeight: '700',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        Select This
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Gallery */}
            <section id="gallery" className="section-padding" style={{ 
                background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        textAlign: 'center',
                        marginBottom: '5rem',
                        letterSpacing: '-2px',
                    }}>
                        Our <span style={{ color: '#dc2626' }}>Work</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '2rem',
                        maxWidth: '1000px',
                        margin: '0 auto',
                    }}>
                        {[
                            { 
                                img: 'https://i.postimg.cc/t4Bt7nSg/Screenshot-2025-08-13-at-1-23-55-AM.png',
                                title: 'Heavy Duty Fleet',
                                desc: 'State-of-the-art equipment',
                                stats: ['50+ Trucks', '24/7 Ready', 'GPS Tracked']
                            },
                            { 
                                img: 'https://i.postimg.cc/zBzr7Mw7/Screenshot-2025-08-13-at-1-25-38-AM.png',
                                title: 'Professional Service',
                                desc: 'Trained & certified team',
                                stats: ['100+ Staff', 'Fully Insured', '5★ Rated']
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    position: 'relative',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    height: '500px',
                                    cursor: 'pointer',
                                    group: true,
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.querySelector('.overlay').style.opacity = '1';
                                    e.currentTarget.querySelector('.image').style.transform = 'scale(1.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.querySelector('.overlay').style.opacity = '0.7';
                                    e.currentTarget.querySelector('.image').style.transform = 'scale(1)';
                                }}
                            >
                                <img 
                                    className="image"
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                    }}
                                />

                                <div 
                                    className="overlay"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 100%)',
                                        opacity: 0.7,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                />

                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '2rem',
                                    color: '#ffffff',
                                    zIndex: 1,
                                }}>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        marginBottom: '0.5rem',
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        marginBottom: '1.5rem',
                                    }}>
                                        {item.desc}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                    }}>
                                        {item.stats.map((stat, sidx) => (
                                            <div key={sidx} style={{
                                                padding: '0.5rem 1rem',
                                                background: 'rgba(220, 38, 38, 0.2)',
                                                border: '1px solid #dc2626',
                                                borderRadius: '20px',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                            }}>
                                                {stat}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section-padding" style={{ 
                background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        letterSpacing: '-2px',
                    }}>
                        Why Choose <span style={{ color: '#dc2626' }}>Pronto</span>
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: '1.2rem',
                        marginBottom: '5rem',
                        maxWidth: '600px',
                        margin: '0 auto 5rem',
                    }}>
                        Brisbane's most trusted waste removal service with a difference
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '3rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}>
                        {[
                            {
                                icon: '🇦🇺',
                                title: 'Aussie Owned & Operated',
                                desc: 'Local Brisbane family business supporting our community since 2010',
                                features: ['Local jobs', 'Community focused', 'Brisbane proud'],
                                color: '#dc2626',
                                delay: 0
                            },
                            {
                                icon: '🏭',
                                title: 'Multi-Industry Expertise',
                                desc: 'Serving construction, retail, hospitality, healthcare & government sectors',
                                features: ['Certified contractors', 'Industry compliance', 'Tailored solutions'],
                                color: '#ef4444',
                                delay: 0.2
                            },
                            {
                                icon: '⚡',
                                title: 'Lightning Fast Response',
                                desc: 'Emergency same-day service with real-time tracking and updates',
                                features: ['30min callback', 'GPS tracking', 'Live updates'],
                                color: '#f87171',
                                delay: 0.4
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="why-card"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '25px',
                                    padding: '3rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                    animation: `fadeInUp ${0.8 + item.delay}s ease both`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = `linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.05) 100%)`;
                                    e.currentTarget.style.borderColor = item.color;
                                    e.currentTarget.style.borderWidth = '2px';
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}33`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderWidth = '1px';
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{
                                        fontSize: '4rem',
                                        marginBottom: '1.5rem',
                                        transition: 'transform 0.3s ease',
                                        display: 'inline-block',
                                    }}>
                                        {item.icon}
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        marginBottom: '1rem',
                                        color: '#ffffff',
                                        transition: 'color 0.3s ease',
                                    }}>
                                        {item.title}
                                    </h3>

                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        marginBottom: '2rem',
                                        lineHeight: '1.6',
                                        fontSize: '1.1rem',
                                    }}>
                                        {item.desc}
                                    </p>

                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.8rem',
                                    }}>
                                        {item.features.map((feature, fidx) => (
                                            <div 
                                                key={fidx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    opacity: 0.7,
                                                    transition: `all 0.3s ease ${fidx * 0.1}s`,
                                                }}
                                            >
                                                <div style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    background: item.color,
                                                    borderRadius: '50%',
                                                    marginRight: '1rem',
                                                }}/>
                                                <span style={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    fontSize: '1rem',
                                                }}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div style={{
                        marginTop: '5rem',
                        padding: '3rem',
                        background: 'rgba(220, 38, 38, 0.05)',
                        borderRadius: '20px',
                        border: '1px solid rgba(220, 38, 38, 0.2)',
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '2rem',
                            textAlign: 'center',
                        }}>
                            {[
                                { number: '10,000+', label: 'Happy Customers', icon: '😊' },
                                { number: '99.9%', label: 'On-Time Service', icon: '⏰' },
                                { number: '$5M', label: 'Insurance Coverage', icon: '🛡️' },
                                { number: '50+', label: 'Team Members', icon: '👥' },
                                { number: '24/7', label: 'Emergency Service', icon: '🚨' },
                            ].map((stat, idx) => (
                                <div key={idx} style={{
                                    opacity: 0,
                                    animation: `fadeInUp 0.5s ease ${1 + idx * 0.1}s forwards`,
                                }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '900',
                                        background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        marginBottom: '0.3rem',
                                    }}>
                                        {stat.number}
                                    </div>
                                    <div style={{
                                        color: 'rgba(255, 255, 255, 0.5)',
                                        fontSize: '0.9rem',
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase',
                                    }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding" style={{ 
                background: '#000000',
                position: 'relative',
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        textAlign: 'center',
                        marginBottom: '5rem',
                        letterSpacing: '-2px',
                    }}>
                        Get In <span style={{ color: '#dc2626' }}>Touch</span>
                    </h2>

                    <div style={{
                        maxWidth: '1100px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                        gap: '2rem',
                    }}>
                        {[
                            { 
                                icon: '📍', 
                                title: 'Location', 
                                info: 'Wishart, Brisbane, QLD',
                                sub: 'Australia, Queensland',
                                action: 'Get Directions'
                            },
                            { 
                                icon: '📞', 
                                title: 'Phone', 
                                info: '0419 504 885',
                                sub: 'Available 24/7',
                                action: 'Call Now'
                            },
                            { 
                                icon: '✉️', 
                                title: 'Email', 
                                info: 'admin@prontowastegroup.com',
                                sub: 'Response within 1 hour',
                                action: 'Send Email'
                            },
                        ].map((contact, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '20px',
                                    padding: '2.5rem',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.borderColor = '#dc2626';
                                    e.currentTarget.style.background = 'rgba(220, 38, 38, 0.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                }}
                            >
                                <div style={{ 
                                    fontSize: '3rem', 
                                    marginBottom: '1.5rem',
                                    animation: `float ${3 + idx}s ease-in-out infinite`,
                                }}>
                                    {contact.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.3rem',
                                    color: '#dc2626',
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontWeight: '700',
                                }}>
                                    {contact.title}
                                </h3>

                                <p style={{
                                    color: '#ffffff',
                                    fontSize: '1.2rem',
                                    marginBottom: '0.5rem',
                                    fontWeight: '600',
                                }}>
                                    {contact.info}
                                </p>

                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.4)',
                                    fontSize: '0.9rem',
                                    marginBottom: '1.5rem',
                                }}>
                                    {contact.sub}
                                </p>

                                <button style={{
                                    background: 'transparent',
                                    color: '#dc2626',
                                    border: '2px solid #dc2626',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '25px',
                                    fontWeight: '700',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.9rem',
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = '#dc2626';
                                    e.target.style.color = '#ffffff';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = '#dc2626';
                                }}>
                                    {contact.action}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
                borderTop: '1px solid rgba(220, 38, 38, 0.1)',
                padding: '3rem 0',
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div>
                        <img 
                            src="https://i.postimg.cc/tRVtBfs9/Screenshot-2025-08-13-at-12-59-00-AM.png" 
                            alt="Pronto"
                            style={{
                                height: '60px',
                                marginBottom: '1rem',
                            }}
                        />
                        <p style={{ 
                            color: 'rgba(255, 255, 255, 0.4)', 
                            fontSize: '0.9rem',
                        }}>
                            © 2025 Pronto Waste Removal. All rights reserved.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                    }}>
                        {['Privacy', 'Terms', 'Sitemap'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                style={{
                                    color: 'rgba(255, 255, 255, 0.4)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseOver={(e) => e.target.style.color = '#dc2626'}
                                onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.4)'}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>

            {/* Booking Modal */}
            {showBooking && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.3s ease',
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 100%)',
                        border: '2px solid #dc2626',
                        borderRadius: '30px',
                        padding: '3rem',
                        maxWidth: '600px',
                        width: '90%',
                        position: 'relative',
                        animation: 'slideInUp 0.5s ease',
                    }}>
                        <button
                            onClick={() => setShowBooking(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'transparent',
                                border: 'none',
                                color: '#ffffff',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'rotate(90deg)'}
                            onMouseOut={(e) => e.target.style.transform = 'rotate(0)'}
                        >
                            ×
                        </button>

                        <h3 style={{
                            fontSize: '2.5rem',
                            fontWeight: '800',
                            marginBottom: '2rem',
                            background: 'linear-gradient(135deg, #ffffff 0%, #dc2626 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Quick Booking
                        </h3>

                        <p style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginBottom: '2rem',
                            fontSize: '1.1rem',
                        }}>
                            Get your waste removed today! Fill in the details below for an instant quote.
                        </p>

                        <button style={{
                            width: '100%',
                            background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                            color: '#ffffff',
                            border: 'none',
                            padding: '1.5rem',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderRadius: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            Start Booking Process
                        </button>
                    </div>
                </div>
            )}

            {/* Custom CSS animations */}
            <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(-10px); }
                }

                @keyframes scrollWheel {
                    0% { transform: translateX(-50%) translateY(0); opacity: 1; }
                    100% { transform: translateX(-50%) translateY(20px); opacity: 0; }
                }

                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes slideInUp {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </>
    );
};

// Render the component
ReactDOM.render(<Landing />, document.getElementById('root'));