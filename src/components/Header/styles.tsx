import styled from "styled-components";

interface MobileMenuInterface{
  isOpen: boolean,
}

export const Container = styled.div`
  max-width: 1280px;
`;

export const MobileMenuIcon = styled.div`
  display: none; /* Hidden on larger screens by default */

  @media (max-width: 768px) {
    display: block; /* Show hamburger icon on mobile devices */
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div<MobileMenuInterface>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 72px; /* Directly below the navbar */
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid var(--Kuno-Grey, #676767);
  z-index: 20;
  gap: 8px;
  align-items: center;
`;


export const NavigationBar = styled.nav`
  display: flex;
  height: 72px;
  padding: 0px 64px 0px 64px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #676767;
  background: var(--White, #fff);

  @media (max-width: 768px) {
    padding: 0 10px; /* Even smaller padding for mobile devices */
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  padding: 29px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10.498px;
`;

export const Logo = styled.img`
  width: 170px;
`;

export const NavButtonsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;  
  }
`;
export const SectionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 24px;

  @media (max-width: 768px){
    flex-direction: column;
    margin-right: 0px;
    gap: 6px;
    padding-top: 12px;
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;

export const NavButton = styled.button`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  color: var(--Black, #000);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background-color: #fff;
  border: none;
  cursor: pointer;

  @media (max-width: 768px){
    padding: 0;
    justify-content: center;
    font-size: 18px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 5px;
  border: 1px solid var(--Black, #000);
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  background-color: #fff;
  cursor: pointer;

  &:nth-child(even) {
    background: #000;
    color: #fff;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`;

export const ContainerHeroSection = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: var(--White, #fff);
  justify-content: space-between;

  @media (max-width: 430px){
    flex-direction: column;
    
  }
`;

export const TextHero = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 60px;
  gap: 15px;

  @media (max-width: 430px) {
    padding: 16px;
  }

`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 430px) {
    width: 100%;        
    max-width: 100vw;  
    overflow: hidden;
    
  }
`;



export const ImgHero = styled.img`
  flex: 1;
  height: 100%;

  @media (max-width: 430px){
    max-width: 100vh;
    overflow: hidden;
    height: auto;
  }
`;

export const ImgAboutUs = styled.img`
  flex: 1;
  min-height: 50vh;
  padding-right: 64px;

  @media (max-width: 430px) {
    width: 100%;    /* Scale to the width of its container */
    height: auto;
    padding-right:0;
  }
`;
export const Title = styled.h1`
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 67.2px */

  @media (max-width: 430px){
    font-size: 40px;
    text-align: center;
    padding: 0px;
    line-height: 100%;
  }
`;

export const TitleSecondary = styled.h2`
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 67.2px */

  @media (max-width: 430px) {
   font-size: 32px;
   display: flex;
   line-wrap: wrap;
   margin: 0 12px;
   justify-content: center;
   text-align: center; 
  }
`;

export const Subtitle = styled.div`
  color: var(--Black, #000);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 40px;

  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
`;
