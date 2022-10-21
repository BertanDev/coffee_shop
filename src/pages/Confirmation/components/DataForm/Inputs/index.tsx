import { useFormContext } from 'react-hook-form'

import {
    InputsContainer,
    CepInput, 
    StreetInput,
    NumberInput,
    ComplementInput,
    DistrictInput,
    CityInput,
    UfInput
} from './styles'

export function Inputs(){
    const { register } = useFormContext()

    return(
        <InputsContainer>
            <CepInput
                type='text'
                placeholder="CEP"
                required
                {...register('zipCode')}
            />

            <StreetInput
                type='text'
                placeholder="Rua"
                required
                {...register('street')}
            />

            <div>
                <NumberInput
                    placeholder="Número"
                    type='number'
                    required
                    {...register('houseNumber', { valueAsNumber: true })}
                />

                <ComplementInput
                    type='text'
                    placeholder="Complemento"
                    {...register('complement')}
                />
            </div>

            <div>
                <DistrictInput
                    type='text'
                    placeholder="Bairro"
                    required
                    {...register('district')}
                />

                <CityInput
                    type='text'
                    placeholder="Cidade"
                    required
                    {...register('city')}
                />

                <UfInput
                    type='text'
                    placeholder="UF"
                    required
                    {...register('state')}
                />
            </div>
        </InputsContainer>
    )
}

