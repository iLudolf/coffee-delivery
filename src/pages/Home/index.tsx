import { Landing } from "./components/Landing";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Landing />
      <OurCoffees />
    </HomeContainer>
  )
}