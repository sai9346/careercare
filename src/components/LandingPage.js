import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background-color: #4caf50;
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  max-width: 800px;
`;

const CTAButton = styled(Link)`
  background-color: #fff;
  color: #4caf50;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f1f1f1;
    color: #388e3c;
  }
`;

const LandingPage = () => (
  <HeroSection>
    <HeroTitle>Welcome to CareerCarve</HeroTitle>
    <HeroSubtitle>Connect with experienced mentors to guide your career path.</HeroSubtitle>
    <CTAButton to="/search">Find a Mentor</CTAButton>
  </HeroSection>
);

export default LandingPage;
