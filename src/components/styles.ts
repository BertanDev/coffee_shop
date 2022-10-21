import { NavLink } from 'react-router-dom'
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

export const CartButton = styled(NavLink)`
    position: relative;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    svg {
        color: ${props => props.theme['yellow-dark']};
    }
`

export const CartCounter = styled.span`
  position: absolute;
  right: -8.35px;
  top: -8px;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${props => props.theme['yellow-dark']};
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
`