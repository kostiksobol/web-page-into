import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import RoadmapSection from './components/RoadmapSection';
import PrelandingSection from './components/PreendingSection';
import EndingSection from './components/EndingSection';
import styled from 'styled-components';

import './App.css';

const FullPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Star = styled.div<{ size: number }>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: white;
  border-radius: 50%;
  will-change: transform; 
`;

interface StarProps {
  id: number;
  top: string;
  left: string;
  size: number; // Added size property
}

const App: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    // Generate stars with random positions, sizes, and timings
    const newStars = Array.from({ length: 200 }).map((_, index) => ({
      id: index,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1, // Random size between 1px and 4px
    }));
    setStars(newStars);
  }, []);
  
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <RoadmapSection />
      <PrelandingSection />
      <EndingSection />
      <FullPageContainer>
        {stars.map(({ id, top, left, size }) => (
          <Star key={id} style={{ top, left }} size={size} />
        ))}
      </FullPageContainer>
    </div>
  );
}

export default App;


// import React, { useEffect, useState } from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';
// import FeaturesSection from './components/FeaturesSection';
// import RoadmapSection from './components/RoadmapSection';
// import PrelandingSection from './components/PreendingSection';
// import EndingSection from './components/EndingSection';
// import styled, { keyframes } from 'styled-components';

// const FullPageContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
// `;

// const flickerAnimation = keyframes`
//   0%, 100% { 
//     transform: scale(1, 1); 
//     opacity: 0.5; 
//   }
//   25% { 
//     transform: scale(1.2, 0.8); 
//     opacity: 0.75; 
//   }
//   50% { 
//     transform: scale(0.8, 1.2); 
//     opacity: 1; 
//   }
//   75% { 
//     transform: scale(1.1, 0.9); 
//     opacity: 0.75; 
//   }
// `;

// const Star = styled.div<{ size: number }>`
//   position: absolute;
//   width: ${({ size }) => `${size}px`};
//   height: ${({ size }) => `${size}px`};
//   background-color: white;
//   border-radius: 50%;
//   animation: ${flickerAnimation} ${({ size }) => 5 / size}s infinite;
// `;

// interface StarProps {
//   id: number;
//   top: string;
//   left: string;
//   size: number;
// }

// const App: React.FC = () => {
//   const [stars, setStars] = useState<StarProps[]>([]);

//   useEffect(() => {
//     const newStars = Array.from({ length: 200 }).map((_, index) => ({
//       id: index,
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       size: Math.random() * 3 + 1,
//     }));
//     setStars(newStars);
//   }, []);
  
//   return (
//     <div style={{ overflowX: 'hidden' }}>
//       <Navbar />
//       <HeroSection />
//       <AboutSection />
//       <FeaturesSection />
//       <RoadmapSection />
//       <PrelandingSection />
//       <EndingSection />
//       <FullPageContainer>
//         {stars.map(({ id, top, left, size }) => (
//           <Star key={id} style={{ top, left }} size={size} />
//         ))}
//       </FullPageContainer>
//     </div>
//   );
// }

// export default App;
