import styled from "styled-components"

export const ConfirmationContainer = styled.div`
    display: flex;
`

export const LabelTitle = styled.h2`
    font-family: 'Baloo 2';
    font-size: 1.28rem;
    color: ${props => props.theme["base-subtitle"]};
`

export const ConfirmedButton = styled.button`
    width: 26.2rem;
    height: 3.2rem;
    border-radius: 6px;
    border: 0;
    margin-top: 1.7rem;
    cursor: pointer;

    background: ${props => props.theme["yellow"]};
    color: ${props => props.theme["white"]};
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: bold;
`

export const Form = styled.form`
    display: flex;
    gap: 2rem;
`

export const FinishedOrder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`