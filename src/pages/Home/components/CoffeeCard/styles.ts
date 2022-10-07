import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 18.2rem;

    h2{
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Baloo 2';
        font-family: 1.4rem;
    }

    p{
        color: ${props => props.theme["base-label"]};
        font-family: 'Roboto';
        text-align: center;
        margin-top: 0.5rem;
    }
`

export const Tags = styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 0.7rem;
    
    span{
        font-size: 0.7rem;
        color: ${props => props.theme["yellow-dark"]};
        font-family: 'Roboto';
        font-weight: 700;
        background: ${props => props.theme["yellow-light"]};
        padding: 0.4rem;
        border-radius: 100px;
    }
`

export const PurchaseOptions = styled.div`
    display: flex;
    margin-top: 3rem;

    span{
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};

        strong{
            font-size: 1.7rem;
            font-family: 'Baloo 2';
            font-weight: 800;
        }
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-left: 2rem;
    }

    /*Remover setas do input*/
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    input{
        border: 0;
        width: 1.5rem;
        margin: 0 0.1rem;
        text-align: center;
        font-size: 1.14rem;
        font-family: 'Roboto';
    }
`

export const InputButton = styled.button`
    border: 0;
    cursor: pointer;

    svg{
        color: ${props => props.theme["purple"]};
        
    }
`

export const PurchaseButton = styled.button`
    border: 0;
    background: ${props => props.theme["purple-dark"]};
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 6px;
    margin-left: 0.7rem;
    color: ${props => props.theme["white"]};
    display: flex;
    align-items: center;
    justify-content: center;
`