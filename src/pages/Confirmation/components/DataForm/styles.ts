import styled from "styled-components";

export const FormContainer = styled.div`
    padding: 2.8rem;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    display: flex;

    svg{
        font-size: 1.5rem;
        color: ${props => props.theme["yellow-dark"]};
        margin-right: 0.6rem;
    }

    p:first-child{
        font-size: 1.14rem;
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Roboto';
    }

    p:last-child{
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};
        margin-top: 0.3rem;
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.2rem;
    gap: 1.14rem;
    font-size: 1rem;

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