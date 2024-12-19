import React from "react";
import styled from "styled-components";
import BackgroundImage from "./main.jpg"; // Ensure the image path is correct.

const Main = ({ children }) => {
  return <Section>{children}</Section>;
};

export default Main;

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BackgroundImage}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto; /* Adjust height for smaller screens */
    background-position: top; /* Adjust background alignment */
  }

  @media (max-width: 480px) {
    background-size: contain; /* Change background sizing for very small devices */
  }
`;
