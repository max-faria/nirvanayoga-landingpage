import PriceCard from "../PriceCard"
import { ResponsiveCardContainer } from "../PriceCard/styles"

const VinyasaPricesCards = () => {

    return (

        <ResponsiveCardContainer>
        <PriceCard
          title="Dual Harmony"
          description="2x a week"
          price="29"
          features={[
            { id: 1, content: "Ideally for beginners" },
            { id: 2, content: "Practice whenever you want" },
            { id: 3, content: "Access to online theoretical classes" },
            { id: 4, content: "Automatic renovation" },
            { id: 5, content: "Cancel anytime" },
          ]}
        />
        <PriceCard
          title="Essence Flow"
          description="3x a week"
          price="39"
          features={[
            { id: 1, content: "Develop your dedication" },
            { id: 2, content: "Feel the benefits faster" },
            { id: 3, content: "access to exclusive content" },
            { id: 4, content: "Automatic renovation" },
            { id: 5, content: "Cancel anytime" },
          ]}
        />
        </ResponsiveCardContainer>
    )
}

export default VinyasaPricesCards