import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 50px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* padding: 3rem 7rem; */
  height: 65vh;
 color: #595954;
;`

const FooterSection = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 300px;
;
`
const LeftContent = styled.div`
  font-size: 17px;
  line-height: 1.6;
  margin: 0 1rem;
  h1{
    margin: 2rem 0;
    color: #39B54A
  }
;`

const RightContent = styled.div`
  font-size: 15px;
  padding-top:3rem;
  margin: 0 1rem;
  line-height: 1.4;

;
`
const SubscribeForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction:row;
;
`
const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background: transparent;
;
`
const Button = styled.button`
  background-color: #39B54A;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2e9e40;
  }
;
`
const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      '.footer-section',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <FooterContainer>
      <FooterSection className="footer-section">
        <LeftContent>
          <h1>Glint</h1>
          <p>
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
            accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </p>
        </LeftContent>
      </FooterSection>

      <FooterSection className="footer-section">
        <RightContent>
          <h3 style={{margin:'2rem 0'}}>Get Notified</h3>
          <p style={{margin:'2rem 0'}}>
            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
            aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
            iusto porro.
          </p>
          <SubscribeForm style={{margin:'2rem 0'}}>
            <Input type="email" placeholder="Email Address" />
            <Button type="submit">Subscribe</Button>
          </SubscribeForm>
        </RightContent>

      </FooterSection>
    </FooterContainer>

  );
};

export default Footer;


