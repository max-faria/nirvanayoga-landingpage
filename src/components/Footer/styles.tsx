import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  padding: 80px 40px 20px;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  background: #000;

  @media (max-width: 430px){
    flex-direction: column;
  }
`;

export const SubscribeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 430px){
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

`;

export const SubscribeText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const SubscribeTitle = styled.h3`
  color: var(--White, #fff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
`;

export const SubscribeSubtitle = styled.h4`
  color: var(--White, #fff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
`;

export const SubscribeInput = styled.input`
  padding: 12px;
  flex: 2;
  border-radius: 5px;
  border: 1px solid #fff;
  background: #000;
  color: #fff;
`;

export const SubscribeButton = styled.button`
  padding: 12px 24px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--White, #fff);
  color: var(--White, #fff);
  background-color: transparent;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  flex: 1;
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  align-self: stretch;
  
  @media (max-width: 430px){
    flex-direction: column;
  }

`;

export const ListLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h4 {
    color: var(--White, #fff);

    /* Text/Regular/Semi Bold */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
  }

  p {
    color: var(--White, #fff);

    /* Text/Small/Normal */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-decoration-line: underline;
  }

  @media (max-width: 430px){
    flex-direction: column;
    align-items: center;
  }
`

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 12px;

`