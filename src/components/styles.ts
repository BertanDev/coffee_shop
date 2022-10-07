import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.3rem 0;
`

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 0.85rem;

    button{
        cursor: pointer;
        border: 0;
    }

    svg:last-child{
        width: 2.7rem;
        height: 2.7rem;
        padding: 0.5rem;
        border-radius: 8px;

        color: ${props => props.theme['yellow-dark']};
        background: ${props => props.theme['yellow-light']};
    }
`
export const Location = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme['purple-dark']};
    font-size: 'Roboto';

    gap: 0.28rem;
`