import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
`;

export const PricingCardContainer = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid var(--Black, #000);
  width: 230px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PlanTitle = styled.h3`
  color: var(--Black, #000);
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
`;

export const PlanDescription = styled.p`
  color: var(--Black, #000);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Price = styled.h3`
  display: flex;
  align-items: flex-end;
  color: var(--Black, #000);
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 67.2px */

  p {
    font-family: Roboto, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const PriceButton = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid var(--Black, #000);
  background: var(--Black, #000);
  color: var(--White, #fff);

  /* Text/Regular/Normal */
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #000;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FeatureContainer = styled.div`
  display: flex;
  gap: 16px;

  p {
    color: var(--Black, #000);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
`;
