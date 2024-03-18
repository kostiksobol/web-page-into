import React, { useState, useEffect } from 'react';
import { FaInfoCircle, FaStar, FaRoad, FaFileAlt } from 'react-icons/fa'; // Import icons

const Navbar: React.FC = () => {
  const [logoScale, setLogoScale] = useState<number>(1);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoScale(1.1);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const logoStyleWithAnimation: React.CSSProperties = {
    ...logoImageStyle,
    transform: `scale(${logoScale})`,
    transition: 'transform 0.5s ease',
  };

  const getLinkStyle = (linkName: string): React.CSSProperties => ({
    ...linkStyle,
    backgroundColor: hoveredLink === linkName ? '#333' : 'transparent',
    color: hoveredLink === linkName ? '#fff' : '#ccc',
    boxShadow: hoveredLink === linkName ? '0px 0px 5px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
  });

  return (
    <nav style={{ ...navbarContainerStyle, backgroundColor: '#0e1621' }}> {/* Changed background color */}
      <div style={navbarLogoStyle}>
        <img src="/images/logo.png" alt="Navbar Logo" style={logoStyleWithAnimation} />
        <span style={logoTextStyle}>Sparkle Vara Messenger</span>
      </div>
      <ul style={navbarLinksStyle}>
        {[
          { name: 'About', icon: <FaInfoCircle />, text: 'About' },
          { name: 'Features', icon: <FaStar />, text: 'Features' },
          { name: 'Roadmap', icon: <FaRoad />, text: 'Roadmap' },
          { name: 'Whitepaper', icon: <FaFileAlt />, text: 'Whitepaper' }
        ].map(({ name, icon, text }) => (
          <li key={name}
              onMouseEnter={() => setHoveredLink(name)}
              onMouseLeave={() => setHoveredLink(null)}
          >
            <a href={`#${name.toLowerCase()}`} style={getLinkStyle(name)}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {icon}
                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>{text}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const navbarContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#0e1621', // Base color
  color: '#ccc',
  margin: '0',
  borderBottom: '1px solid #333',
  flexWrap: 'wrap',
  // Using a linear gradient to create a convex effect
  background: 'linear-gradient(145deg, rgba(14, 22, 33, 0.9), rgba(14, 22, 33, 1), rgba(14, 22, 33, 0.9))',
  // Additional styling to enhance the 3D effect without affecting the frame
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Soft shadow for depth (optional and subtle
};

const navbarLogoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px', // Add some spacing between logo and links on smaller screens
};

const logoImageStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  marginRight: '10px',
  transition: 'transform 0.5s ease',
};

const logoTextStyle: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
};

const navbarLinksStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  margin: '0',
  padding: '0',
};

const linkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: '20px',
  marginBottom: '10px', // Add some spacing between links on smaller screens
  cursor: 'pointer',
  padding: '8px 12px', // Adjusted padding for better hover area
  borderRadius: '5px',
};

export default Navbar;
