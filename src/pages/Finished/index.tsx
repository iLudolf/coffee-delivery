import { RegularText, TitleText } from "../../components/Typograhy";
import { FinishedContainer, OrderDetailsContainer } from "./styles";
import motoImg from '../../assets/moto.svg'
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { MapPin, CurrencyDollar, Clock } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
  state: OrderData
}

export function Finished() {

  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()
  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [])

  if (!state) return <></>

  console.log(state)
  const { colors } = useTheme()
  return (
    <FinishedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l">Agora é só aguardar que logo o café chegará até você</RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon icon={<MapPin weight="fill" />} iconBg={colors["brand-purple"]}
            text={<RegularText>Entrega em <strong>{state.street}, {state.number}</strong> <br /> {state.neighborhood} - {state.city}, {state.uf}</RegularText>}
          />
          <InfoWithIcon icon={<Clock weight="fill" />} iconBg={colors["brand-yellow"]}
            text={<RegularText>Previsão de entrega  <br /><strong>20 min - 30 min</strong></RegularText>}
          />
          <InfoWithIcon icon={<CurrencyDollar weight="fill" />} iconBg={colors["brand-yellow-dark"]}
            text={<RegularText><strong>{paymentMethods[state.paymentMethod].label}</strong></RegularText>}
          />
        </OrderDetailsContainer>
        <img src={motoImg} alt="" />
      </section>
    </FinishedContainer>
  )
}