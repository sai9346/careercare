import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.875rem;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <p>&copy; 2024 CareerCarve. All rights reserved.</p>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
