import { PaymentMethodInputContainer, ContentContainer } from "./styles";
import { CreditCard } from "phosphor-react";
import { forwardRef, InputHTMLAttributes } from "react";

interface PaymentMethodInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}


export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})