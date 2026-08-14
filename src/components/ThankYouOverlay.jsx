import { useEffect, useState } from 'react';
import './ThankYouOverlay.css';

const ThankYouOverlay = ({ seconds = 4, redirectTo = '/contact' }) => {
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const tick = setInterval(() => {
      setLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    const go = setTimeout(() => {
      window.location.href = redirectTo;
    }, seconds * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(go);
      document.body.style.overflow = prevOverflow;
    };
  }, [seconds, redirectTo]);

  return (
    <div className="ty-overlay" role="dialog" aria-live="polite" aria-label="Submission received">
      <div className="ty-card">
        <div className="ty-card-bg"></div>
        <div className="ty-card-inner">
          <img src="/ts-logo.png" alt="Tesco Structures" className="ty-logo" />
          <h2 className="ty-title">Thank You!</h2>
          <p className="ty-text">
            Your submission has been received. Our team at Tesco Structures will
            review your request and get back to you shortly.
          </p>
          <p className="ty-count">
            You will be redirected to the previous page in <strong>{left}s</strong>...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouOverlay;
