import styled from "styled-components"

export const ItemContainer = styled.div`
    display: flex;
    width: 26rem;
    align-items: center;
    padding: 0.8rem 0.1rem;
    gap: 0.8rem;

    &:not(:fiSrst-child){
        margin-top: 1.7rem;
    }

    img{
        width: 4.5rem;
        height: 4.5rem;
    }
`

export const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 26rem;

    div{
        display: flex;
    }

    div:first-child{
        justify-content: space-between;

        p{
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1.14rem;
            font-family: 'Roboto';
        }

        span{
            font-size: 1.14rem;
            color: ${props => props.theme["base-text"]};
            font-family: 'Roboto';
            font-weight: 700;
        }
    }
`

export const Input = styled.div`
    gap: 0.5rem;

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

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    border: 0;
    margin-left: 1rem;
    gap: 0.2rem;

    svg{
        width: 1.14rem;
        height: 1.14rem;
        color: ${props => props.theme["purple"]};
    }

    span{
        font-size: 0.85rem;
        color: ${props => props.theme["base-text"]};
        font-family: 'Roboto';
    }
`


