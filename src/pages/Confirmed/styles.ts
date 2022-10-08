import styled from "styled-components"

export const ConfirmedContainer = styled.div`
    display: flex;
    gap: 7.2rem;
    margin-top: 3rem;

    align-items: flex-end;
`

export const TitleSuccess = styled.div`
    h1{
        font-size: 2.2rem;
        font-family: 'Baloo 2';
        font-weight: 900;
        color: ${props => props.theme["yellow-dark"]};
    }

    h2{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.4rem;
        font-weight: 400;
        font-family: 'Roboto';
    }
`

export const DeliveryBorderWrap = styled.div`
    margin-top: 2.85rem;
    padding: 0.05rem;
    border-radius: 6px 36px 6px 36px;
    background: rgb(219,172,44);
    background: linear-gradient(160deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);
`

export const DeliveryInformation = styled.div`
    border-radius: 6px 36px 6px 36px;
    padding: 2.85rem;
    
    background: white;
`

const BACK_COLOR = {
    purple: 'purple',
    yellow: 'yellow',
    yellow_dark: 'yellow-dark',
} as const

interface BackColorProps{
    backColor: keyof typeof BACK_COLOR
}

export const Info = styled.div<BackColorProps>`
    display: flex;
    align-items: center;
    gap: 0.7rem;

    &:not(:first-child){
        margin-top: 2.2rem;
    }

    svg{
        width: 2.2rem;
        height: 2.2rem;
        padding: 0.6rem;
        background: ${props => props.theme[BACK_COLOR[props.backColor]]};
        border-radius: 50%;
        color: ${props => props.theme["white"]};
    }

    p{
        color: ${props => props.theme["base-text"]};
        font-size: 1.14rem;
        font-family: 'Roboto';
    }
`

