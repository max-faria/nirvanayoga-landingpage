import { Check } from "@phosphor-icons/react";
import {
    Container,
    FeatureContainer,
    FeaturesContainer,
    Line,
  PlanDescription,
  PlanTitle,
  Price,
  PriceButton,
  PriceContainer,
  PricingCardContainer,
  TitleContainer,
} from "./styles";

interface Feature {
    id: number;
    content: string;
}

interface PriceCardInterface {
    title: string,
    description: string,
    price: string,
    features: Feature[],
}

const PriceCard: React.FC<PriceCardInterface> = (props) => {
  return (
    <Container>
      <PricingCardContainer>
        <TitleContainer>
          <PlanTitle>{props.title}</PlanTitle>
          <PlanDescription>{props.description}</PlanDescription>
        </TitleContainer>
        <Line/>
        <PriceContainer>
          <Price>
            ${props.price}
            <p>/mo</p>
          </Price>
        </PriceContainer>
          <PriceButton>Get Started</PriceButton>
          <Line/>
      <FeaturesContainer>
        {props.features.map((item) => (
            <FeatureContainer key={item.id}>
                <Check size={16}/>
                <p>{item.content}</p>
            </FeatureContainer>
        ))}
      </FeaturesContainer>
      </PricingCardContainer>
    </Container>
  );
};

export default PriceCard;
