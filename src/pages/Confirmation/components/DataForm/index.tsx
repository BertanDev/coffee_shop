import { MapPinLine } from "phosphor-react";

import {
    FormContainer,
    Title,
} from './styles'

export function DataForm(){
    return(
        <FormContainer>
            <Title>
                <MapPinLine/>

                <div>
                    <p>Endereço de Entrega</p>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </Title>

            
        </FormContainer>
    )
}