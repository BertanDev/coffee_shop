import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.85rem;
`

export const LabelTitle = styled.h2`
    font-family: 'Baloo 2';
    font-size: 1.28rem;
    color: ${props => props.theme["base-subtitle"]};
`

export const PaymentInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    padding: 0.8rem 0.1rem;
    gap: 1rem;
`

export const ValueOrder = styled.p`
    display: flex;
    width: 26rem;
    justify-content: space-between;

    span{
        color: ${props => props.theme["base-text"]};
        font-family: 'Roboto';
        font-size: 1.14rem;
    }

    span:first-child{
        font-size: 1rem;
    }
`

export const TotalItems = styled.p`
    display: flex;
    width: 26rem;
    justify-content: space-between;
    margin-top: 0.2rem;

    span{
        font-size: 1.42rem;
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Roboto';
        font-weight: bold;
    }
`

