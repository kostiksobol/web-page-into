import React from 'react';

// EndingSection component
const EndingSection: React.FC = () => {
  return (
    <footer style={endingSectionStyle}>
      <div style={contentContainerStyle}>
        <h2 style={headingStyle}>Sparkle: Decentralized Messenger on Vara Network</h2>
        <p style={paragraphStyle}>
          Empowering communication on the Vara Network - Sparkle, where Web3 meets seamless text, voice, and video interactions.
          Experience the future with low gas fees, on-chain storage, and top-notch privacy.
        </p>
        <div style={linksContainerStyle}>
          <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
          <a href="/terms-of-service" style={linkStyle}>Terms of Service</a>
          <a href="/cookies-settings" style={linkStyle}>Cookies Settings</a>
        </div>
        <p style={copyrightStyle}>&copy; {new Date().getFullYear()} Solchat. All rights reserved.</p>
      </div>
    </footer>
  );
};

// CSS styles
const endingSectionStyle: React.CSSProperties = {
  backgroundColor: '#0a1924', // Dark blue background color
  padding: '80px 0',
  textAlign: 'center',
};

const contentContainerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
};

const headingStyle: React.CSSProperties = {
  fontSize: '2rem',
  color: '#fff', // White text color
  marginBottom: '20px',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#c4c4c4', // Light gray text color
  marginBottom: '40px',
};

const linksContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const linkStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#007bff', // Blue link color
  textDecoration: 'none',
  margin: '0 20px',
  transition: 'color 0.3s ease',
};

const copyrightStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#6c757d', // Gray text color
};

export default EndingSection;
