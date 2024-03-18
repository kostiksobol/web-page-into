import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    ...heroButtonStyle,
    backgroundColor: isHovered ? '#0056b3' : '#007bff', // Change button color on hover
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale up the button on hover
  };

  return (
    <>
          <style>
        {`
          @media (max-width: 768px) {
            .hero-content {
              justify-content: center;
              flex-wrap: wrap;
            }
            
            .hero-content > div {
              flex-wrap: nowrap;
            }
          }
        `}
      </style>
    <section style={heroSectionStyle}>
      <div style={heroContentStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }} className="hero-content">
          <div style={{ flex: '1' }}>
            <h1 style={heroTitleStyle}>Sparkle Vara Messenger</h1>
            <p style={heroTextStyle}>Elevate Your Conversations: Seamless Communication on the Vara Blockchain with Sparkle</p>
            <button
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start Chatting
            </button>
          </div>
          <div>
            {/* Adjusted heroContentStyle to include logo.png as a background image */}
            <img src="/images/logo.png" alt="Logo" style={{ width: '530px', height: 'auto'}} />
          </div>
        </div>
      </div>
      {/* Moved heroImagesStyle div here to ensure chat_image.jpg appears below the text and button */}
      <div style={heroImagesStyle}>
        <img src="/images/chat_image.jpg" alt="Chat Image" style={chatImageStyle} />
      </div>
    </section>
    </>
  );
}

const heroSectionStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column', // Adjusted to stack content vertically
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  backgroundColor: '#0e1621', // Base color
};

const heroContentStyle: React.CSSProperties = {
  maxWidth: '70%',
  textAlign: 'center',
  zIndex: 2, // Ensuring content is above the background image
  color: '#fff',
  padding: '3rem', // Added padding to avoid text/button overlay directly on the logo
};

const heroTitleStyle: React.CSSProperties = {
  fontSize: '3.5rem',
  marginBottom: '20px',
  letterSpacing: '1px',
};

const heroTextStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '40px',
  lineHeight: '1.6',
};

const heroButtonStyle: React.CSSProperties = {
  padding: '15px 40px',
  fontSize: '1.2rem',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0px 8px 16px rgba(0, 123, 255, 0.3)',
};

const heroImagesStyle: React.CSSProperties = {
  width: '100%', // Adjusted for full width
  justifyContent: 'center',
  display: 'flex',
  marginTop: '50px', // Added space between content and chat image
};

const chatImageStyle: React.CSSProperties = {
  width: '80%',
  height: 'auto',
};

export default HeroSection;
