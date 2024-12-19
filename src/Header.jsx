


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideLogo(true);
      } else {
        setHideLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav>
      <Navbar>
        <div>
          <h1 className={`logo ${hideLogo ? 'hide' : ''}`} style={{ fontSize: '2rem' }}>
            Glint <span style={{ color: '#34A745' }}>.</span>
          </h1>
        </div>
        <div style={{ display: 'flex' }}>
          <span
            style={{
              marginRight: '2rem',
              fontSize: '16px',
              color: '#34A745',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Menu
          </span>
          <Hamburger onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </div>
      </Navbar>
      <Sidebar isOpen={isOpen}>
        <CloseButton onClick={closeSidebar}>&times;</CloseButton>
        <SidebarItem>Home</SidebarItem>
        <SidebarItem>About</SidebarItem>
        <SidebarItem>Services</SidebarItem>
        <SidebarItem>Contact</SidebarItem>
      </Sidebar>
    </Nav>
  );
}

export default Header;
const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
  color: #ffffff;
  transition: all 0.3s ease;

  .logo {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .logo:hover {
    cursor: pointer;
  }

  .hide {
    opacity: 0;
    transform: translateY(-20px);
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    .logo {
      font-size: 18px; /* Adjust logo size */
    }
  }
`;

const Hamburger = styled.div`
  display: none; /* Hidden by default for larger screens */
  flex-direction: column;
  cursor: pointer;

  span {
    background-color: #fff;
    height: 3px;
    width: 25px;
    margin: 3px 0;
    transition: background-color 0.3s ease;
  }

  &:hover span {
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    display: flex; /* Visible for smaller screens */
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 250px;
  height: 100%;
  background-color: #232323;
  color: white;
  padding: 20px;
  transition: right 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 200px; /* Narrower sidebar for small screens */
  }

  @media (max-width: 480px) {
    width: 180px; /* Even narrower for very small devices */
  }
`;

const SidebarItem = styled.div`
  margin: 15px 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Even smaller font size */
  }
`;

const CloseButton = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust size for smaller screens */
  }
`;

const Nav = styled.div`
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust general font size for smaller screens */
  }
`;
