import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoApp from '../assets/logo_app.svg'
import {
    HeaderContainer,
    InfoContainer,
    Location,
} from './styles'

export function Header(){
    return(
        <HeaderContainer>
            <NavLink to='/' title='Home'>
                <img src={logoApp} alt="logo Coffe Delivery" />
            </NavLink>

            <InfoContainer>
                <Location>
                    <MapPin size={22} color='#4B2995'/>

                    <span>Porto Alegre, RS</span>
                </Location>

                <NavLink to='/confirmation'>
                    <ShoppingCart size={22}/>
                </NavLink>
            </InfoContainer>
        </HeaderContainer>
    )
}