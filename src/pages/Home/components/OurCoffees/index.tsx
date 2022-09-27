import { CoffeeCard } from "../../../../components/CoffeeCard";
import { TitleText } from "../../../../components/Typograhy";
import { coffees } from "../../../../data/coffees";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {



  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">Nossos cafés</TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}