import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Controller, useFormContext } from "react-hook-form";
import {
  PaymentContainer,
  Title,
  PaymentOptions,
  PaymentOption
} from "./styles";

export function FormOfPayment() {
  const { control } = useFormContext();

  return (
    <PaymentContainer>
      <Title>
        <CurrencyDollar />

        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Title>

      <Controller
        control={control}
        name="formOfPayment"
        render={({ field }) => {
          return (
            <PaymentOptions
                onValueChange={field.onChange}
                value={field.value}
            >
              <PaymentOption variant='credit' value="credit">
                <CreditCard />
                <span>CARTÃO DE CRÉDITO</span>
              </PaymentOption>
              <PaymentOption variant='debit' value="debit">
                <Bank />
                <span>CARTÃO DE DÉBITO</span>
              </PaymentOption>
              <PaymentOption variant='money' value="money">
                <Money />
                <span>DINHEIRO</span>
              </PaymentOption>
            </PaymentOptions>
          );
        }}
      />
    </PaymentContainer>
  );
}
