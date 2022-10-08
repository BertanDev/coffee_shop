import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
    PaymentContainer,
    Title,

    PaymentOptions,
    CreditOption,
    DebitOption,
    MoneyOption
} from './styles'

export function FormOfPayment(){
    return(
        <PaymentContainer>
            <Title>
                <CurrencyDollar/>

                <div>
                    <p>Pagamento</p>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </Title>

            <PaymentOptions>
                <CreditOption>
                    <CreditCard/>
                    <span>CARTÃO DE CRÉDITO</span>
                </CreditOption>

                <DebitOption>
                    <Bank/>
                    <span>CARTÃO DE DÉBITO</span>
                </DebitOption>

                <MoneyOption>
                    <Money/>
                    <span>DINHEIRO</span>
                </MoneyOption>
            </PaymentOptions>
        </PaymentContainer>
    )
}