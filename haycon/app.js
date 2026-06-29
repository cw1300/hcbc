var { useState, useEffect } = React;

var App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
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

  return renderPage();
};

ReactDOM.render(<App />, document.getElementById('root'));