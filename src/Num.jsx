import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  background-color: #39B54A;
  padding: 50px 0;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
`;

const Statistic = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Label = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const CountUpSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountUpAnimation = () => {
  const numberRef = useRef(null);

  useEffect(() => {
    // GSAP Count-Up Animation
    gsap.fromTo(
      numberRef.current,
      { innerHTML: 0 },
      {
        innerHTML: 127, // Target number
        duration: 3, // Duration in seconds
        ease: 'power1.out',
        snap: { innerHTML: 1 }, // Snap to the nearest integer
        onUpdate: function () {
          numberRef.current.innerHTML = Math.floor(this.targets()[0].innerHTML);
        },
      }
    );
  }, []);

  return (
    <PageContainer>
      <CountUpSection>
        <Statistic ref={numberRef}>0</Statistic>
        <Label>Awards Received</Label>
      </CountUpSection>
    </PageContainer>
  );
};

export default CountUpAnimation;
