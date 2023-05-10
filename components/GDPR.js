import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const GDPRPopup = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
  };

  const handleDecline = () => {
    setAccepted(false);
    Cookies.set('cookie_consent', 'declined', { expires: 365 });
  };

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (consent === 'accepted') {
      setAccepted(true);
    } else if (consent === 'declined') {
      setAccepted(false);
    }
  }, []);

  return (
    <div className={`gdpr-popup ${accepted ? 'hidden' : ''}`}>
      <p>We use cookies to improve your experience on our website. By continuing to browse, you consent to our use of cookies.</p>
      <div className="gdpr-buttons">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default GDPRPopup;
