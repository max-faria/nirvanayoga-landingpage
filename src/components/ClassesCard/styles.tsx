import styled from "styled-components";

interface grid {
  column: string;
}

export const CardContainer = styled.div<grid>`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 300px;
  gap: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding-top: 12px;
  grid-column: ${(props) => (props.column ? props.column : 1)};
`;

export const ImgCardContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

export const CardTitle = styled.h3`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 8px;
  padding-left: 10px;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  max-width: 400px;
  margin-bottom: 20px;
  height: 80px;
`;

export const GridClassesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 48px;

  @media (max-width: 375px){
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;
