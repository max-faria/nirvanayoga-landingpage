import PriceCard from "../PriceCard";
import { ResponsiveCardContainer } from "../PriceCard/styles";

const YinPricesCard = () => {
  return (
    <ResponsiveCardContainer>
      <PriceCard
        title="Tranquility"
        description="2x a week"
        price="39"
        features={[
          { id: 1, content: "Ideally for those with no much time" },
          { id: 2, content: "Free yoga gear rental" },
          { id: 3, content: "Access to online recoded classes" },
          { id: 4, content: "Automatic renovation" },
          { id: 5, content: "Cancel anytime" },
        ]}
      />
      <PriceCard
        title="Deep Relaxation"
        description="3x a week"
        price="49"
        features={[
          { id: 1, content: "Step further into relaxation" },
          { id: 2, content: "Free yoga gear rental" },
          { id: 3, content: "Free meditation sessions" },
          { id: 4, content: "Automatic renovation" },
          { id: 5, content: "Cancel anytime" },
        ]}
      />
    </ResponsiveCardContainer>
  );
};

export default YinPricesCard;
