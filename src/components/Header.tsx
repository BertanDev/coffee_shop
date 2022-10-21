import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import logoApp from '../assets/logo_app.svg'
import { OrderContext } from '../contexts/OrderContext'
import {
    HeaderContainer,
    InfoContainer,
    Location,
    CartButton,
    CartCounter
} from './styles'

export function Header(){
    const { orders } = useContext(OrderContext)

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

                <CartButton to='/confirmation'>
                    {orders.length > 0 && <CartCounter>{orders?.length}</CartCounter>}
                    <ShoppingCart size={22}/>
                </CartButton>
            </InfoContainer>
        </HeaderContainer>
    )
}