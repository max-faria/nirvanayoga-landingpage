import styled from "styled-components";
import img from "../../assets/benefits.png";

export const Container = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 112px 64px;
`;
export const Title = styled.h2`
  color: #f7f7f7;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr)
  column-gap: 24px;
  grid-template-areas:
  "a b"
`;

export const CardContent = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 0 55px;
`;

export const CardContentB = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const ImgCard = styled.img`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const TitleCard = styled.h3`
  color: var(--Kuno-Greywhite, #f7f7f7);
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
`;

export const DescriptionCard = styled.div`
  color: var(--Kuno-Greywhite, #f7f7f7);
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
