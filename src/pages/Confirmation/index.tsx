import { CartItens } from "./components/CartItens";
import { DataForm } from "./components/DataForm";
import { FormOfPayment } from "./components/FormOfPayment";

import {
    ConfirmationContainer,
    LabelTitle
} from './styles'

export function Confirmation(){
    return(
        <ConfirmationContainer>
            <div>
                <LabelTitle>Complete seu pedido</LabelTitle>

                <DataForm/>

                <FormOfPayment/>
            </div>
            
            <div>
                <LabelTitle>Cafés selecionados</LabelTitle>
                <CartItens/>
            </div>
        </ConfirmationContainer>
    )
}