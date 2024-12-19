import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
import Background from "./Formbg.png"; // Ensure the image path is correct.

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* padding: 50px 0; */
  margin-bottom: 8px;
  color: #333;
`;

const Heading = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
`;

const Section = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 20px;
`;

const LeftSection = styled.div`
  background-color: #000000;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333;

`;

const RightSection = styled.div`
  font-size: 1rem;
  line-height: 1.6; 
  width: 50%;
  margin-left: 4rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  `;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color:  #333;

`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  background-color:  #333;

`;

const Button = styled.button`
  background-color: #39B54A;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #2e9e40;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;

  a {
    color: #333;
    font-size: 1.5rem;
    transition: color 0.3s;
    &:hover {
      color: #39B54A;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Background}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
 `;
const Form1 = () => {
  return (
    <Container>
    <ContactContainer>
      <Heading style={{color:'white'}}>Contact Us<br />Reach out for a new project or just say hello</Heading>

      <Section>
        <LeftSection>
          <h2>Send Us A Message</h2>
          <Form>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="text" placeholder="Subject" />
            <TextArea rows="5" placeholder="Your Message"></TextArea>
            <Button type="submit" style={{width:'6rem'}}>Submit</Button>
          </Form>
        </LeftSection>
      </Section>

      <Section>
        <RightSection style={{backgroundColor:'black'}}>
          <ContactInfo>
            <h2>Contact Info</h2>
            <h3>Where to Find Us</h3>
            <p>
              1600 Amphitheatre Parkway<br />
              Mountain View, CA<br />
              94043 US
            </p>
          </ContactInfo>
          <ContactInfo>
            <h3>Email Us At</h3>
            <p>
              contact@glintsite.com<br />
              info@glintsite.com
            </p>
          </ContactInfo>
          <ContactInfo>
            <h3>Call Us At</h3>
            <p>
              Phone: (+63) 555 1212<br />
              Mobile: (+63) 555 0100<br />
              Fax: (+63) 555 0101
            </p>
          </ContactInfo>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaBehance /></a>
            <a href="#"><FaDribbble /></a>
          </SocialIcons>
        </RightSection>
      </Section>
    </ContactContainer>
    </Container>
  );
};

export default Form1
// import React from 'react';
// import styled from 'styled-components';
// import { FaFacebook, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
// import FormBg from './FormBg.webp'
// const ContactContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding: 50px 80px;
//   color: #333;
//   background: url('./FormBg.webp') no-repeat center center/cover;
//   min-height: 100vh;
// `;

// const Heading = styled.h1`
//   text-align: center;
//   width: 100%;
//   font-size: 2.5rem;
//   color: #fff;
//   margin-bottom: 40px;
// `;

// const Section = styled.div`
//   flex: 1;
//   min-width: 300px;
//   margin: 20px;
// `;

// const LeftSection = styled.div`
//   background-color: rgba(0, 0, 0, 0.8);
//   padding: 30px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   color: #fff;
// `;

// const RightSection = styled.div`
//   font-size: 1rem;
//   line-height: 1.6; 
//   width: 50%;
//   margin-left: 4rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: #fff;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   margin: 10px 0;
//   padding: 10px;
//   font-size: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   background-color: #333;
//   color: #fff;
// `;

// const TextArea = styled.textarea`
//   margin: 10px 0;
//   padding: 10px;
//   font-size: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   resize: none;
//   background-color: #333;
//   color: #fff;
// `;

// const Button = styled.button`
//   background-color: #39B54A;
//   color: white;
//   padding: 10px;
//   font-size: 1rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 10px;
//   &:hover {
//     background-color: #2e9e40;
//   }
// `;

// const ContactInfo = styled.div`
//   margin-bottom: 20px;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   margin-top: 20px;
//   gap: 10px;

//   a {
//     color: #fff;
//     font-size: 1.5rem;
//     transition: color 0.3s;
//     &:hover {
//       color: #39B54A;
//     }
//   }
// `;

// const Form1 = () => {
//   return (
//     <ContactContainer>
//       <Heading>Contact Us<br />Reach out for a new project or just say hello</Heading>

//       <Section>
//         <LeftSection>
//           <h2>Send Us A Message</h2>
//           <Form>
//             <Input type="text" placeholder="Your Name" />
//             <Input type="email" placeholder="Your Email" />
//             <Input type="text" placeholder="Subject" />
//             <TextArea rows="5" placeholder="Your Message"></TextArea>
//             <Button type="submit">Submit</Button>
//           </Form>
//         </LeftSection>
//       </Section>

//       <Section>
//         <RightSection>
//           <ContactInfo>
//             <h2>Contact Info</h2>
//             <h3>Where to Find Us</h3>
//             <p>
//               1600 Amphitheatre Parkway<br />
//               Mountain View, CA<br />
//               94043 US
//             </p>
//           </ContactInfo>
//           <ContactInfo>
//             <h3>Email Us At</h3>
//             <p>
//               contact@glintsite.com<br />
//               info@glintsite.com
//             </p>
//           </ContactInfo>
//           <ContactInfo>
//             <h3>Call Us At</h3>
//             <p>
//               Phone: (+63) 555 1212<br />
//               Mobile: (+63) 555 0100<br />
//               Fax: (+63) 555 0101
//             </p>
//           </ContactInfo>
//           <SocialIcons>
//             <a href="#"><FaFacebook /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaBehance /></a>
//             <a href="#"><FaDribbble /></a>
//           </SocialIcons>
//         </RightSection>
//       </Section>
//     </ContactContainer>
//   );
// };

// export default Form1;
