import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { Coffee } from "../data/coffees";



export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffee: (coffee: CartItem) => void;
  deleteCoffee: (id: number) => void;
}

const COFFEE_DELIVERY_STORAGE = "coffeeDelivery:cartItems"

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: { children: ReactNode }) {

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storagedCartItems = localStorage.getItem(COFFEE_DELIVERY_STORAGE);
    if (storagedCartItems) {
      return JSON.parse(storagedCartItems);
    }
    return [];
  })


  useEffect(() => {
    localStorage.setItem(COFFEE_DELIVERY_STORAGE, JSON.stringify(cartItems))
  }, [cartItems])



  function addCoffee(coffee: CartItem) {
    const currentCart = [...cartItems]
    const coffeeInCart = currentCart.findIndex(c => c.id === coffee.id)
    if (coffeeInCart < 0) {
      const updatedCart = [...currentCart, coffee];
      setCartItems(updatedCart)
    } else {
      const coffeeToUpdateQuantity = currentCart[coffeeInCart]
      const updatedCoffee = { ...coffeeToUpdateQuantity, quantity: coffee.quantity }
      let cart = [...cartItems]
      cart[coffeeInCart] = updatedCoffee;
      setCartItems(cart);
    }
  }

  function deleteCoffee(id: number) {
    const currentCart = [...cartItems]
    const updatedCart = currentCart.filter((c) => c.id !== id);

    setCartItems(updatedCart)
  }


  return (
    <CartContext.Provider value={{ cartItems, addCoffee, deleteCoffee }}>
      {children}
    </CartContext.Provider>
  )
}


export function useCart() {
  const context = useContext(CartContext)

  return context;
}