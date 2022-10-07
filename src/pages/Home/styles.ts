import styled from "styled-components";

export const HomeContainer = styled.div`
    
`

export const Welcome = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4rem 0;

    div{
        span:first-child{
            font-size: 3.4rem;
            font-family: 'Baloo 2';
            font-weight: 800;
            line-height: 4rem;
            color: ${props => props.theme["base-title"]};
        }

        span:nth-child(3){
            display: flex;
            font-size: 1.4rem;
            font-family: 'Roboto';
            font-weight: 400;
            color: ${props => props.theme["base-subtitle"]};

            margin-top: 1rem;
        }
    }
`

export const ContainerOptions = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
`

const BACK_COLOR = {
    yellow_dark: 'yellow-dark',
    yellow: 'yellow',
    base_text: 'base-text',
    purple: 'purple'
} as const

interface BackColorProps{
    backColor: keyof typeof BACK_COLOR
}

export const Option = styled.div<BackColorProps>`
    display: flex;
    align-items: center;
    min-width: 20rem;
    gap: 1rem;
    margin-top: 1rem;

    svg{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.white};
        border-radius: 50%;
        width: 2.2rem;
        height: 2.2rem;
        padding: 0.5rem;
        background-color: ${props => props.theme[BACK_COLOR[props.backColor]]};
    }

    span{
        font-size: 1.14rem;
        font-family: 'Roboto';
        color: ${props => props.theme["base-text"]};
    }
`

export const Title = styled.h2`
    margin-top: 3rem;
    margin-bottom: 2rem;
    color: ${props => props.theme["base-subtitle"]};
    font-size: 2.2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
`

export const Coffees = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    padding-bottom: 5rem;
`