import { Trash } from "phosphor-react";
import { useState } from "react";
import { AmountInput } from "../../../components/AmountInput";
import { RegularText } from "../../../components/Typograhy";
import { CartItem, useCart } from "../../../contexts/CartContext";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";


interface CoffeeCartCardProps {
  cartItem: CartItem;
}

export function CoffeeCartCard({ cartItem }: CoffeeCartCardProps) {

  const { cartItems, addCoffee, deleteCoffee } = useCart()
  const [quantity, setQuantity] = useState(cartItem.quantity)

  function handleIncreaseQuantity(id: number) {
    const cartItem = cartItems.find((c) => c.id === id)
    if (cartItem) {
      const updatedCartQuantity = { ...cartItem, quantity: quantity + 1 }
      addCoffee(updatedCartQuantity);
      setQuantity((prev) => prev + 1)
    }
  }

  function handleDecreaseQuantity(id: number) {
    const cartItem = cartItems.find((c) => c.id === id)
    if (cartItem) {
      const updatedCartQuantity = { ...cartItem, quantity: quantity - 1 }
      addCoffee(updatedCartQuantity);
      setQuantity((prev) => prev - 1)
    }
  }

  function handleRemoveCartItem(id: number) {
    deleteCoffee(id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1659916800&Signature=E3001oUkq6tCa1tM7S1TOU1A9YSoso5ECgj0-ZCfrQ5NyCUY37wPdP~c0KRQ7Bhs1kYYOEfUi1duBXfiZPmyfN9dmi147nC9nAwW~8Ec5oxOCBhMGcLl-MUPvAoUzAUNu9qfY7B~UHNJonniQ8CsLSCygKdMM5sIJc6fZ4oY2hndf8dd~hSzT9kzoHbifn48rEGltkjNVkl5PuAoedoHiNlSIwrKNMeKdjEe5iayCYSAkFYDcr~2fO-Jj8ZkZustJZQxZSDVKGFhjfDbovv-t2c0WSKfz4-Jl2Ev3~Xkj~INA4~WrzXaKu3~dqYWroYKcEtdifXJdY9kOhkW7SmADg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
        <div>
          <RegularText color="subtitle">{cartItem.name}</RegularText>
          <ActionsContainer>
            <AmountInput size="small" onIncrease={() => handleIncreaseQuantity(cartItem.id)} onDecrease={() => handleDecreaseQuantity(cartItem.id)} quantity={cartItem.quantity} />
            <RemoveButton onClick={() => handleRemoveCartItem(cartItem.id)}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {currencyFormatter(cartItem.price * cartItem.quantity)}</p>
    </CoffeeCartCardContainer>
  )
}