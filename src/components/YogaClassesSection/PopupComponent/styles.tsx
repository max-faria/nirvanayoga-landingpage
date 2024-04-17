import styled, { css, keyframes } from "styled-components";

interface AnimationInterface {
  closing: boolean,
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleUp = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0.5); 
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1); 
    opacity: 1;
  }
`;

const scaleDown = keyframes`
  from { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  to { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
`;

export const Backdrop = styled.div<AnimationInterface>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);  
  z-index: 5;
  animation: ${props => props.closing ? css`${fadeOut} 0.2s ease-out forwards` : css`${fadeIn} 0.2s ease-out forwards`};

`;

export const PopupContainer = styled.div<AnimationInterface>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 90%; 
  min-width: 300px; 
  max-height: 80%; 
  padding: 20px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 10;
  animation: ${props => props.closing ? css`${scaleDown} 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards` : css`${scaleUp} 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards`}; 
  overflow-y: auto;
  `;
  
