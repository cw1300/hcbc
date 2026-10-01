var App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  switch (currentPage) {
    case 'sermons':
      return <Sermons setCurrentPage={setCurrentPage} />;
    case 'about-jesus':
      return <AboutJesus setCurrentPage={setCurrentPage} />;
    case 'contact':
      return <Contact setCurrentPage={setCurrentPage} />;
    case 'newsletter':
      return <Newsletter setCurrentPage={setCurrentPage} />;
    default:
      return <LandingPage setCurrentPage={setCurrentPage} />;
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
