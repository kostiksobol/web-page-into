import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const Section = styled.section`
  height: 100vh;
  background-color: #0a1924;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentContainer = styled.div`
  padding: 40px;
  background-color: #09111c;
  border-radius: 10px;
  animation: ${float} 5s ease-in-out infinite;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 15px 40px;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    opacity: 0.9;
  }
`;

const LearnMoreButton = styled(Button)`
  background-color: #007bff;
`;

const SparkleAppButton = styled(Button)`
  background-color: #28a745;
`;

// PrelandingSection component
const PrelandingSection: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <Section>
      {showContent && (
        <ContentContainer>
          <Heading>Unlock the Future of Communication with Sparkle Messenger</Heading>
          <ButtonContainer>
            <LearnMoreButton>Learn more</LearnMoreButton>
            <SparkleAppButton>Sparkle App</SparkleAppButton>
          </ButtonContainer>
        </ContentContainer>
      )}
    </Section>
  );
};

export default PrelandingSection;