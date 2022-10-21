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

