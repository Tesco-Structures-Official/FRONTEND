import './FloatingContactButtons.css';

// Two sticky floating buttons, shown site-wide:
//   - WhatsApp  -> bottom-left
//   - Phone call -> bottom-right
const WHATSAPP_NUMBER = '919600652424';   // wa.me format (country code + number, no +/spaces)
const PHONE_NUMBER = '+919003328229';     // tel: format

const FloatingContactButtons = () => {
  return (
    <>
      {/* WhatsApp — bottom left */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-btn--whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="float-btn-ring" aria-hidden="true"></span>
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.463 1.71 6.41L3.2 28.8l6.57-1.72a12.74 12.74 0 006.23 1.62h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.752-9.052A12.71 12.71 0 0016.003 3.2zm0 23.36h-.004a10.6 10.6 0 01-5.4-1.48l-.387-.23-4.02 1.052 1.073-3.92-.252-.402a10.56 10.56 0 01-1.62-5.64c0-5.87 4.777-10.646 10.653-10.646a10.58 10.58 0 017.53 3.12 10.56 10.56 0 013.118 7.532c0 5.87-4.777 10.646-10.653 10.646zm5.84-7.97c-.32-.16-1.893-.934-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.573-1.588-.95-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.492.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.737-.987-2.377-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.823.763.33 1.36.527 1.825.674.767.244 1.464.21 2.015.127.615-.092 1.893-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
        </svg>
      </a>

      {/* Phone call — bottom right */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="float-btn float-btn--phone"
        aria-label="Call us"
      >
        <span className="float-btn-ring" aria-hidden="true"></span>
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>
    </>
  );
};

export default FloatingContactButtons;
