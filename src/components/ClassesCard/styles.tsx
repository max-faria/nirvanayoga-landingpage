import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 300px;
  gap: 5px;
  border: 1px solid transparent;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

export const CardImg = styled.img`
  max-height: 280px;
  align-self: stretch;
  margin-bottom: 12px;
  border-radius: 15px;
  

`;

export const CardTitle = styled.h3`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  margin-bottom: 18px;
`;

export const InformationContainer = styled.div`
    display: flex;
    gap: 10px;
    padding; 10px;
    align-items: center;
    color: var(--Black, #000);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 8px; 
`;

export const TextDescriptionCard = styled.p`
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  max-width: 400px;
  margin-bottom: 20px;
`;
