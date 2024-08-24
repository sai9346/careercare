import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #4caf50;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled(Link)`
  color: white;
  margin-left: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Nav>
      <Logo to="/">CareerCarve</Logo>
      <NavLinks>
        <li><NavLink to="/search">Find a Mentor</NavLink></li>
        <li><NavLink to="/student-dashboard">Student Dashboard</NavLink></li>
        <li><NavLink to="/mentor-dashboard">Mentor Dashboard</NavLink></li>
      </NavLinks>
    </Nav>
  </HeaderWrapper>
);

export default Header;
