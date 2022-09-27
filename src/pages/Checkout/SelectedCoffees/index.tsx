import { TitleText } from "../../../components/Typograhy";
import { useCart } from "../../../contexts/CartContext";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { SummarySection } from "../SummarySection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {

  const { cartItems } = useCart()

  const subTotal = cartItems.reduce((acc, current) => {
    const subTotalCoffee = current.price * current.quantity
    return subTotalCoffee + acc
  }, 0)

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((cartItem) => (

          <CoffeeCartCard key={cartItem.id} cartItem={cartItem} />
        ))}
        <SummarySection deliverFee={3.5} subtotal={subTotal} />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}