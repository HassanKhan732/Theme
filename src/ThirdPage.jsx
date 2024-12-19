import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPalette,
  faBullhorn,
  faCode,
  faPencilRuler,
  faDesktop,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const ThirdPage = () => {
  useEffect(() => {
    // Animations for headings
    gsap.fromTo(
      '.animate-heading',
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.animate-heading',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    // Animations for cards
    gsap.fromTo(
      '.animate-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.cards-container',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <PageContainer>
      {/* Heading Section */}
      <HeadingContainer>
        <MainHeading className="animate-heading">What We Do</MainHeading>
        <SubHeading className="animate-heading">
          We’ve got everything you need to launch and grow your business
        </SubHeading>
      </HeadingContainer>

      {/* Cards Section */}
      <CardsContainer className="cards-container">
        <Card className="animate-card">
          <IconWrapper>
            <FontAwesomeIcon icon={faPalette} />
          </IconWrapper>
          <CardTitle>Brand Identity</CardTitle>
          <CardDescription>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est.
          </CardDescription>
        </Card>

        <Card className="animate-card">
          <IconWrapper>
            <FontAwesomeIcon icon={faPencilRuler} />
          </IconWrapper>
          <CardTitle>Illustration</CardTitle>
          <CardDescription>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est.
          </CardDescription>
        </Card>

        <Card className="animate-card">
          <IconWrapper>
            <FontAwesomeIcon icon={faBullhorn} />
          </IconWrapper>
          <CardTitle>Marketing</CardTitle>
          <CardDescription>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est.
          </CardDescription>
        </Card>

        <Card className="animate-card">
          <IconWrapper>
            <FontAwesomeIcon icon={faDesktop} />
          </IconWrapper>
          <CardTitle>Web Design</CardTitle>
          <CardDescription>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est.
          </CardDescription>
        </Card>

        <Card className="animate-card">
          <IconWrapper>
            <FontAwesomeIcon icon={faBoxOpen} />
          </IconWrapper>
          <CardTitle>Packaging Design</CardTitle>
          <CardDescription>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est.
          </CardDescription>
        </Card>

        <Card className="animate-card">
          <IconWrapper>
            <FontAwesomeIcon icon={faCode} />
          </IconWrapper>
          <CardTitle>Web Development</CardTitle>
          <CardDescription>
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est.
          </CardDescription>
        </Card>
      </CardsContainer>
    </PageContainer>
  );
};

export default ThirdPage;
// Styled Components
const PageContainer = styled.div`
  background-color: #f4f4f4;
  padding: 50px 20px;
  min-height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const HeadingContainer = styled.div`
  margin-bottom: 50px;
`;

const MainHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 70%;
  margin: 0 auto;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 300px;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #39b54a;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.6;
`;
