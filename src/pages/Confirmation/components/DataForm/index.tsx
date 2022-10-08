import { MapPinLine } from "phosphor-react";

import {
    FormContainer,
    Title,
    Inputs,

    CepInput,
    StreetInput,
    NumberInput,
    ComplementInput,
    DistrictInput,
    CityInput,
    UfInput,
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

            <Inputs>
                <CepInput
                    placeholder="CEP"
                />

                <StreetInput
                    placeholder="Rua"
                />

                <div>
                    <NumberInput
                        placeholder="Número"
                    />

                    <ComplementInput
                        placeholder="Complemento"
                    />
                </div>

                <div>
                    <DistrictInput
                        placeholder="Bairro"
                    />

                    <CityInput
                        placeholder="Cidade"
                    />

                    <UfInput
                        placeholder="UF"
                    />
                </div>
            </Inputs>
        </FormContainer>
    )
}