
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
// import BackgroundImage from './main.jpg'; 

function Content() {
  return (
    <Container>
      <LeftColumn>
        <h3 style={{ color: '#828587' }}>Welcome to Glint</h3>
        <h1>We are a creative group of people who design influential brands and digital experiences.</h1>
      </LeftColumn>
      <RightColumn>
        <Icon>
          <FaFacebook />
          <IconLabel>Facebook</IconLabel>
        </Icon>
        <Icon>
          <FaTwitter />
          <IconLabel>Twitter</IconLabel>
        </Icon>
        <Icon>
          <FaInstagram />
          <IconLabel>Instagram</IconLabel>
        </Icon>
        <Icon>
          <FaBehance />
          <IconLabel>Behance</IconLabel>
        </Icon>
        <Icon>
          <FaDribbble />
          <IconLabel>Dribbble</IconLabel>
        </Icon>
      </RightColumn>
    </Container>
  );
}

export default Content;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 50px;
  color: #f5f5f5;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack columns on smaller screens */
    justify-content: center;
    padding: 20px; /* Reduce padding */
  }
`;

const LeftColumn = styled.div`
  max-width: 60%;
  position: absolute;
  left: 20%;
  text-align: left;

  h3 {
    color: #828587;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: #ffffff;
    margin-top: 9px;
  }

  @media (max-width: 768px) {
    position: static; /* Remove absolute positioning */
    max-width: 100%; /* Expand to full width */
    text-align: center;

    h1 {
      font-size: 2.5rem; /* Reduce font size for smaller screens */
    }

    h3 {
      font-size: 1rem; /* Adjust h3 font size */
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px; /* Reduce spacing for smaller screens */
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: #34a745; /* Highlight color on hover */
  }

  &:hover span {
    opacity: 1;
    transform: translateX(10px);
  }

  @media (max-width: 480px) {
    font-size: 20px; /* Reduce icon size for mobile screens */
  }
`;

const IconLabel = styled.span`
  position: absolute;
  left: 40px;
  font-size: 16px;
  color: #ffffff;
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (max-width: 480px) {
    font-size: 14px; /* Adjust label size for smaller screens */
    left: 35px; /* Adjust spacing */
  }
`;
