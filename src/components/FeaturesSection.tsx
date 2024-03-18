import React, { useState } from 'react';
import { FaLock, FaShieldAlt, FaVideo, FaImage, FaPhoneAlt, FaCoins } from 'react-icons/fa';

const Feature: React.FC<{ title: string; text: string; icon: JSX.Element }> = ({ title, text, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const featureStyle: React.CSSProperties = {
    background: isHovered ? 'linear-gradient(135deg, #1e4157, #0f2834)' : 'linear-gradient(135deg, #0f2834, #06151f)',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: isHovered ? '0px 15px 25px rgba(0, 0, 0, 0.6)' : '0px 10px 20px rgba(0, 0, 0, 0.4)',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    color: '#ffffff',
    textAlign: 'left',
    position: 'relative', // Added to contain icon and text
    overflow: 'hidden', // Added to hide overflowing icon
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '15px',
    transform: 'translateY(-50%)',
  };

  return (
    <div
      style={featureStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconStyle}>{icon}</div>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', marginLeft: '60px' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: '#fff', marginLeft: '60px' }}>{text}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const featuresContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    padding: '0 20px',
  };

  const sectionStyle: React.CSSProperties = {
    padding: '100px 20px',
    backgroundColor: '#0a1924',
    textAlign: 'center',
    color: '#fff',
  };

  const headerStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    color: '#fff',
    marginBottom: '50px',
    fontWeight: 'bold',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#ccc',
    marginBottom: '60px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <section id="features" style={sectionStyle}>
      <h2 style={headerStyle}>Sparkle Messenger Features</h2>
      <p style={textStyle}>
        Solchat is a user-friendly protocol that allows secure communication between wallets.
      </p>
      <div style={featuresContainerStyle}>
        <Feature
          title="Encryption"
          text="Messages are encrypted and stored securely on the Solana blockchain."
          icon={<FaLock size={40} />}
        />
        <Feature
          title="Security"
          text="Enhanced security with custom memos for transactions and use of burner wallets."
          icon={<FaShieldAlt size={40} />}
        />
        <Feature
          title="Video Calls"
          text="Seamless video calls between wallets using WebRTC technology."
          icon={<FaVideo size={40} />}
        />
        <Feature
          title="Pictures"
          text="Share and view images directly from on-chain storages like Arweave or IPFS."
          icon={<FaImage size={40} />}
        />
        <Feature
          title="Audio Calls"
          text="Crystal-clear audio calls with friends using peer-to-peer encryption."
          icon={<FaPhoneAlt size={40} />}
        />
        <Feature
          title="Payments"
          text="Send and receive SOL payments securely and instantly."
          icon={<FaCoins size={40} />}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
