import { Button } from "../../../components/Button";
import { RegularText } from "../../../components/Typograhy";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { SummarySectionContainer } from "./styles";

interface SummarySectionProps {
  subtotal: number;
  deliverFee: number;
}

export function SummarySection({ subtotal, deliverFee }: SummarySectionProps) {
  return (
    <SummarySectionContainer>
      <div>
        <RegularText size="s">Total de Itens</RegularText>
        <RegularText>R$ {currencyFormatter(subtotal)}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {currencyFormatter(deliverFee)}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
        <RegularText weight="700" color="subtitle" size="l">R$ {currencyFormatter(subtotal + deliverFee)}</RegularText>
      </div>
      <Button text="confirmar pedido" type="submit" />
    </SummarySectionContainer>
  )
}