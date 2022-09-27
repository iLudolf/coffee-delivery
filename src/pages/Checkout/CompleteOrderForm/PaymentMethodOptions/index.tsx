import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../../../../components/PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />
  }
}

export function PaymentMethodOptions() {

  const { register } = useFormContext()

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput key={label} label={label} icon={icon} value={key} id={key} {...register('paymentMethod')} />
      ))}

    </PaymentMethodOptionsContainer>
  )
}