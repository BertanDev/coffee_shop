import styled from "styled-components"

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.14rem;
    font-size: 1rem;
    padding-left: 2.5rem;

    div{
        display: flex;
        gap: 0.85rem;
    }
`

const BaseInput = styled.input`
    height: 3rem;
    padding: 1rem;
    border: 0;
    font-size: 'Roboto';
    outline: 0;
    border: 1px solid;
    border-color: transparent;
    border-radius: 4px;

    color: ${props => props.theme["base-text"]};

    &:focus{
        border: 1px solid;
        box-shadow: none;
        border-color: ${(props) => props.theme["yellow-dark"]};
    }

    &::placeholder{
        color: ${props => props.theme["base-label"]};
    }
`

export const CepInput = styled(BaseInput)`
    width: 14.2rem;
`

export const StreetInput = styled(BaseInput)`
    width: 40rem;
`

export const NumberInput = styled(BaseInput)`
    width: 14.2rem;
`
export const ComplementInput = styled(BaseInput)`
    width: 24.9rem;
`
export const DistrictInput = styled(BaseInput)`
    width: 14.2rem;
`
export const CityInput = styled(BaseInput)`
    width: 19.7rem;
`
export const UfInput = styled(BaseInput)`
    width: 4.2rem;
`