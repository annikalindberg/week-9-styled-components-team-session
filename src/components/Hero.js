import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #f7f7f7;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
`;

const HeroButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  background-color: #333;

  &:hover {
    cursor: pointer;
    background-color: #555;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Welcome to our fitness class</HeroTitle>
        <HeroSubtitle>Join us today and achieve your fitness goals</HeroSubtitle>
        <HeroButton>Sign up now</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
