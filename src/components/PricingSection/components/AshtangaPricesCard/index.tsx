import PriceCard from "../PriceCard"
import { ResponsiveCardContainer } from "../PriceCard/styles"

const AshtangaPricesCard = () => {

    return (

        <ResponsiveCardContainer>
        <PriceCard
          title="Dual Harmony"
          description="2x a week"
          price="39"
          features={[
            { id: 1, content: "Ideally for beginners" },
            { id: 2, content: "Saturday led class for a fee" },
            { id: 3, content: "Access to online theoretical classes" },
            { id: 4, content: "Automatic renovation" },
            { id: 5, content: "Cancel anytime" },
          ]}
        />
        <PriceCard
          title="Essence Flow"
          description="3x a week"
          price="49"
          features={[
            { id: 1, content: "Develop your dedication" },
            { id: 2, content: "Saturday led class for a fee" },
            { id: 3, content: "Access to exclusive content" },
            { id: 4, content: "Automatic renovation" },
            { id: 5, content: "Cancel anytime" },
          ]}
        />
        <PriceCard
          title="Dedicated"
          description="5x a week"
          price="59"
          features={[
            { id: 1, content: "Commitment to the practice" },
            { id: 2, content: "Free saturday led class" },
            { id: 3, content: "Access to exclusive content" },
            { id: 4, content: "Automatic renovation" },
            { id: 5, content: "Cancel anytime" },
          ]}
        />
        </ResponsiveCardContainer>
    )
}

export default AshtangaPricesCard