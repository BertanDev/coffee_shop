import styled from "styled-components";

export const PaymentContainer = styled.div`
    padding: 2.8rem;
`

export const Title = styled.div`
    display: flex;

    svg{
        font-size: 1.5rem;
        color: ${props => props.theme["purple"]};
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

export const PaymentOptions = styled.div`
    margin-top: 2.2rem;
    display: flex;
    gap: 0.85rem;
`

const BaseButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;

    &:focus{
        border: 1px solid;
        box-shadow: none;
        border-color: ${(props) => props.theme["purple"]};
    }

    svg{
        font-size: 1.14rem;
        color: ${props => props.theme["purple"]};
    }

    span{
        font-size: 0.85rem;
        color: ${props => props.theme["base-text"]};
        font-family: 'Roboto';
    }
`

export const CreditOption = styled(BaseButton)`

`

export const DebitOption = styled(BaseButton)`

`

export const MoneyOption = styled(BaseButton)`

`
