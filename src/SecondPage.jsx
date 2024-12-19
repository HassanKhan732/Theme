// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import styled from 'styled-components';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Styled Components
// const PageContainer = styled.div`
//   background-color: #39B54A;
//   padding: 50px 0;
//   min-height: 100vh;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-family: Arial, sans-serif; /* Added font-family */
// `;

// const SmallHeading = styled.h1`
//   color: black;
//   font-size: 1rem; /* Increased font size */
//   font-weight: 300;
//   margin-bottom: 20px;
// `;

// const BigHeading = styled.h2`
//   color: white;
//   font-size: 4rem; /* Increased font size */
//   font-weight: 600;
//   margin-bottom: 5px;
// `;

// const HorizontalLine = styled.div`
//   height: 2px;
//   background-color: white;
//   margin: 10px auto;
//   width: 0%;
// `;

// const Paragraph = styled.p`
//   color: #000000;
//   max-width: 65%;
//   margin: 10px auto;
//   font-size: 1.3rem; /* Increased font size */
//   line-height: 1.8;
//   text-align: justify;
//   font-family: Arial, sans-serif; /* Added font-family */
//   font-weight: lighter;

// `;

// const SecondPage = () => {
//   useEffect(() => {
//     // Animation for "Hello There" (small heading)
//     gsap.fromTo(
//       '.animate-small-heading',
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: '.animate-small-heading',
//           start: 'top 80%',
//           end: 'top 30%',
//           scrub: true,
//         },
//       }
//     );

//     // Animation for "We Are Glint" (big heading)
//     gsap.fromTo(
//       '.animate-big-heading',
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         scrollTrigger: {
//           trigger: '.animate-big-heading',
//           start: 'top 80%',
//           end: 'top 30%',
//           scrub: true,
//         },
//       }
//     );

//     // Animation for horizontal line
//     gsap.fromTo(
//       '.horizontal-line',
//       { width: 0, opacity: 0 },
//       {
//         width: '35%',
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: '.horizontal-line',
//           start: 'top 80%',
//           end: 'top 30%',
//           scrub: true,
//         },
//       }
//     );

//     // Animation for the paragraph
//     gsap.fromTo(
//       '.animate-paragraph',
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.5,
//         scrollTrigger: {
//           trigger: '.animate-paragraph',
//           start: 'top 80%',
//           end: 'top 30%',
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <PageContainer>
//       <SmallHeading className="animate-small-heading">Hello There</SmallHeading>
//       <BigHeading className="animate-big-heading">We Are Glint</BigHeading>
//       <HorizontalLine className="horizontal-line"></HorizontalLine>
//       <Paragraph className="animate-paragraph">
//         <p style={{textAlign:'center'}}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
//         </p>  </Paragraph>
//     </PageContainer>
//   );
// };

// export default SecondPage;



import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

const SmallHeading = styled.h1`
  color: black;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 20px;
`;

const BigHeading = styled.h2`
  color: white;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const HorizontalLine = styled.div`
  height: 2px;
  background-color: white;
  margin: 10px auto;
  width: 35%;
`;

const Paragraph = styled.p`
  color: #000000;
  max-width: 65%;
  margin: 10px auto;
  font-size: 1.3rem;
  line-height: 1.8;
  text-align: justify;
  font-family: Arial, sans-serif;
  font-weight: lighter;
`;

const CountUpContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
  margin-top: 50px;
`;

const CountUpItem = styled.div`
  text-align: justify;
  color: white;


  h3 {
    font-size: 7rem;
    font-weight: bold;
    margin: 0;
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: black;
    text-align: center;
  }
`;

const SecondPage = () => {
  const countRefs = useRef([]);

  useEffect(() => {
    // Heading and paragraph animations
    gsap.fromTo(
      '.animate-small-heading',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.animate-small-heading',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.animate-big-heading',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: '.animate-big-heading',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.horizontal-line',
      { width: 0, opacity: 0 },
      {
        width: '35%',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.horizontal-line',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.animate-paragraph',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.animate-paragraph',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    // Count-up animations
    countRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { innerHTML: 0 },
        {
          innerHTML: [127, 85, 240, 12][index], // Set your target numbers here
          duration: 2,
          ease: 'power1.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
          onUpdate: function () {
            ref.innerHTML = Math.floor(this.targets()[0].innerHTML);
          },
        }
      );
    });
  }, []);

  return (
    <PageContainer>
      <SmallHeading className="animate-small-heading">Hello There</SmallHeading>
      <BigHeading className="animate-big-heading">We Are Glint</BigHeading>
      <HorizontalLine className="horizontal-line"></HorizontalLine>
      <Paragraph className="animate-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </Paragraph>

      <CountUpContainer>
        {['Awards', 'Projects', 'Clients', 'Years'].map((label, index) => (
          <CountUpItem key={label}>
            <h3 ref={(el) => (countRefs.current[index] = el)}>0</h3>
            <span>{label}</span>
          </CountUpItem>
        ))}
      </CountUpContainer>
    </PageContainer>
  );
};

export default SecondPage;
