import { Minus, Plus, Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";

import imgTest from '../../../../assets/Americano.png'

import {
    CartContainer,
    InputButton,
    Input,
    ItemContainer,
    InfoItem,
    RemoveButton,

    PaymentInfo,
    ValueOrder,
    TotalItems,

    ConfirmedButton
} from './styles'

export function CartItens(){
    return(
        <CartContainer>
            <ItemContainer>
                <img src={imgTest} alt="" />

                <InfoItem>
                    <div>
                        <p>Expresso Tradicional</p>
                        <span>R$ 9,90</span>
                    </div>

                    <div>
                        <Input>
                            <InputButton>
                                <Minus size={14}/>
                            </InputButton>

                            <input
                            type="number"
                            disabled
                            value='99'
                            min={1}
                            max={100}
                            />

                            <InputButton>
                                <Plus size={14}/>
                            </InputButton>

                            
                        </Input>

                        <RemoveButton>
                            <Trash/>
                            <span>REMOVER</span>
                        </RemoveButton>
                    </div>
                </InfoItem>
            </ItemContainer>

            <PaymentInfo>
                <ValueOrder>
                    <span>Total de items</span>
                    <span>R$ 29,70</span>
                </ValueOrder>

                <ValueOrder>
                    <span>Entrega</span>
                    <span>R$ 3,50</span>
                </ValueOrder>

                <TotalItems>
                    <span>Total</span>
                    <span>R$ 33,20</span>
                </TotalItems>
            </PaymentInfo>

            <NavLink to='/confirmed'>
                <ConfirmedButton>
                    CONFIRMAR PEDIDO
                </ConfirmedButton>
            </NavLink>
        </CartContainer>
    )
}