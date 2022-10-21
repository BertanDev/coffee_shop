import { CurrencyDollar, MapPin, Money, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";
import moto from "../../assets/entregador.svg";

import {
  ConfirmedContainer,
  TitleSuccess,
  DeliveryBorderWrap,
  DeliveryInformation,
  Info,
} from "./styles";

interface OrderInfo {
    data: {
        city: string;
        complement: string;
        district: string;
        formOfPayment: 'credit' | 'debit' | 'money';
        houseNumber: number;
        state: string;
        street: string;
        zipCode: string;
    }
  
}

export function Confirmed() {
  const location = useLocation();
  const order = location.state as OrderInfo;

  console.log(order);

  const paymentMethodLabel = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    money: "Dinheiro",
  };

  const payment = paymentMethodLabel[order.data.formOfPayment];

  return (
    <ConfirmedContainer>
      <div>
        <TitleSuccess>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </TitleSuccess>

        <DeliveryBorderWrap>
          <DeliveryInformation>
            <Info backColor="purple">
              <MapPin weight="fill" />
              <p>
                Entrega em{" "}
                <strong>
                  {order.data.street}, {order.data.houseNumber}
                </strong>{" "}
                <br />
                {order.data.district} - {order.data.city}, {order.data.state}
              </p>
            </Info>

            <Info backColor="yellow">
              <Timer weight="fill" />
              <p>
                Previsão de entrega
                <br /> <strong>20 min - 30 min</strong>
              </p>
            </Info>

            <Info backColor="yellow_dark">
              <CurrencyDollar />
              <p>
                Pagamento na entrega
                <br /> <strong>{payment}</strong>
              </p>
            </Info>
          </DeliveryInformation>
        </DeliveryBorderWrap>
      </div>

      <img src={moto} alt="" />
    </ConfirmedContainer>
  );
}
