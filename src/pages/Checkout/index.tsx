import { CompleteOrderForm } from "./CompleteOrderForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { CheckoutContainer } from "./styles";
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from "react-router-dom";


export type OrderData = {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: "credit" | "debit" | "money";
}

type ConfirmOrderData = OrderData;


export function Checkout() {

  const navigate = useNavigate();
  const form = useForm<ConfirmOrderData>();
  const { handleSubmit } = form;

  function submitForm(data: ConfirmOrderData) {
    navigate("/confirm", {
      state: data
    })
  }


  return (
    <FormProvider {...form}>
      <CheckoutContainer className="container" onSubmit={handleSubmit(submitForm)}>
        <CompleteOrderForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}