'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    setCookieConsent(consent);
    
    // Only show banner if no choice has been made
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setCookieConsent('accepted');
    setShowConsent(false);
    
    // Dispatch event for other components to listen to
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: 'accepted' }));
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setCookieConsent('rejected');
    setShowConsent(false);
    
    // Dispatch event for other components to listen to
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: 'rejected' }));
  };

  // Don't render if user has made a choice or if banner is hidden
  if (!showConsent || cookieConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">Cookie Consent</h3>
            <p className="text-gray-600 mt-1">
              We use cookies to improve your experience on our website. By continuing to browse, you agree to our 
              {' '}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
              {' '}
              and 
              {' '}
              <a href="/terms-conditions" className="text-primary hover:underline">Terms of Service</a>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium"
            >
              Reject All
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-white bg-primary hover:bg-primary/90 rounded-md transition-colors duration-200 font-medium"
            >
              Accept All
            </button>
          </div>
          
          <button
            onClick={() => setShowConsent(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}