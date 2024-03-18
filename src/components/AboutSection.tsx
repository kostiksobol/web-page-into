import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section id="about" style={aboutSectionStyle}>
      <div style={contentContainerStyle}>
        <div style={imageContainerStyle}>
          <img src="/images/about_image.webp" alt="About Image" style={imageStyle} />
        </div>
        <div style={textContentStyle}>
          <h2 style={aboutTitleStyle}>About Sparkle Messenger</h2>
          <p style={aboutTextStyle}>
            Solchat is a communication protocol on the Solana blockchain, offering text, voice, and video calls similar to Web2,
            but in a Web3 environment. It utilizes Solana's low gas fees and stores messages and group chats on-chain.
            Privacy is a priority, with encrypted interactions and peer-to-peer audio/video calls via WebRTC to enhance security.
          </p>
          <div style={highlightedPhrasesStyle}>
            <span style={highlightedPhraseStyle}>
              <FaCheckCircle style={iconStyle} size={24} color="#007bff" /> Versatile Communication Protocol
            </span>
            <br />
            <span style={highlightedPhraseStyle}>
              <FaCheckCircle style={iconStyle} size={24} color="#007bff" /> Efficient Utilization of Solana's Features
            </span>
            <br />
            <span style={highlightedPhraseStyle}>
              <FaCheckCircle style={iconStyle} size={24} color="#007bff" /> Enhanced Security and Privacy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutSectionStyle: React.CSSProperties = {
  padding: '100px 20px',
  backgroundColor: '#0a1924',
  textAlign: 'center',
  color: '#fff',
};

const contentContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const imageContainerStyle: React.CSSProperties = {
  flex: '1',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '12px',
};

const textContentStyle: React.CSSProperties = {
  flex: '1',
  marginLeft: '40px',
};

const aboutTitleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  marginBottom: '30px',
  fontWeight: 'bold',
};

const aboutTextStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '30px',
};

const highlightedPhrasesStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column', // Each phrase on a new line
  alignItems: 'center',
};

const highlightedPhraseStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  margin: '10px 0', // Added margin between phrases
  backgroundColor: '#004080', // Dark blue background color
  color: '#fff', // White text color
  borderRadius: '20px',
  fontWeight: 'bold',
};

const iconStyle: React.CSSProperties = {
  marginRight: '8px',
};

export default AboutSection;
