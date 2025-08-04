import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';
import './main.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/privacy') {
      setCurrentPage('privacy');
    } else if (path === '/terms') {
      setCurrentPage('terms');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    } else {
      setCurrentPage('home');
    }

    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/privacy') {
        setCurrentPage('privacy');
      } else if (path === '/terms') {
        setCurrentPage('terms');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', path);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'contact':
        return <ContactUs />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;