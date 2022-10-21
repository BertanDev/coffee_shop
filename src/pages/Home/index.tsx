import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { useContext } from 'react'

import coffeHome from '../../assets/coffe_home.svg'

import { OrderContext } from '../../contexts/OrderContext'
import { CoffeeCard } from './components/CoffeeCard'

import {
    HomeContainer,
    Welcome,
    ContainerOptions,
    Option,
    Coffees,
    Title
 } from './styles'

export function Home(){
    const { coffeeList } = useContext(OrderContext)

    return(
        <HomeContainer>
            <Welcome>
                <div>
                    <span>Encontre o café perfeito para qualquer hora do dia</span><br/>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    <ContainerOptions>
                        <div>
                            <Option backColor='yellow_dark'>
                                <ShoppingCart/>
                                <span>Compra simples e segura</span>
                            </Option>

                            <Option backColor='yellow'>
                                <Timer/>
                                <span>Entrega rápida e rastreada</span>
                            </Option>
                        </div>

                        <div>
                            <Option backColor='base_text'>
                                <Package/>
                                <span>Embalagem mantém o café intacto</span>
                            </Option>

                            <Option backColor='purple'>
                                <Coffee/>
                                <span>O café chega fresquinho até você</span>
                            </Option>
                        </div>
                    </ContainerOptions>
                </div>
                <img src={coffeHome} alt="" />
            </Welcome>

            <Title>Nossos cafés</Title>

            <Coffees>
                {coffeeList.map(cafe => {
                    return(
                        <CoffeeCard data={cafe} key={cafe.id}/>
                    )
                })}
            </Coffees>
        </HomeContainer>
    )
}