import { CurrencyDollar, MapPin, Money, Timer } from 'phosphor-react'
import moto from '../../assets/entregador.svg'

import {
    ConfirmedContainer,
    TitleSuccess,
    DeliveryBorderWrap,
    DeliveryInformation,
    Info
} from './styles'

export function Confirmed(){
    return(
        <ConfirmedContainer>
            <div>
                <TitleSuccess>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>
                </TitleSuccess>

                <DeliveryBorderWrap>
                    <DeliveryInformation>
                        <Info backColor='purple'>
                            <MapPin weight='fill'/>
                            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />Farrapos - Porto Alegre, RS</p>
                            
                        </Info>
                            
                        <Info backColor='yellow'>
                            <Timer weight='fill'/>
                            <p>Previsão de entrega<br /> <strong>20 min - 30 min</strong></p>
                        </Info>

                        <Info backColor='yellow_dark'>
                            <CurrencyDollar/>
                            <p>Pagamento na entrega<br /> <strong>Cartão de crédito</strong></p>
                        </Info>
                    </DeliveryInformation>
                </DeliveryBorderWrap>
            </div>

            <img src={moto} alt="" />
        </ConfirmedContainer>
    )
}